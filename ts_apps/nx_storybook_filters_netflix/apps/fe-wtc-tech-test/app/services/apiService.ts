// custom
import { ENV_MOVIES } from './utils/ENV';

const apiService = () => {
  const errorInterceptor = (response: Response) => {
    switch (response.status) {
      case 401:
      case 405:
        // events.emit('NOT_AUTHENTICATED');
        break;
      case 403:
        // events.emit('NOT_AUTHORISED');
        // break;
        // case 405:
        //   events.emit('METHOD_NOT_ALLOWED');
        break;
      default:
    }
    throw response;
  };

  const responseMiddleware = (res: { [key: string]: any }[]) => res;

  const requestPath = (path: string, params?: Record<string, string>) => {
    const PATH = ENV_MOVIES.BASE_URL;
    if (params && Object.keys(params).length > 1) {
      let query = '';
      for (const keys in params) {
        query += keys + '=' + params[keys] + '&';
      }
      return PATH + path + '?' + query.replace(/&$/, '').trim();
    }
    return PATH + path;
  };

  const requestInterceptor = (
    serviceConfig: {
      path: string;
      method: string;
      params?: Record<string, string>;
      body?: Record<string, string>;
    },
    customRequestHeaders: Record<string, string>
  ) => {
    const requestHeaders = {
      'Content-Type': 'application/json',
    };

    let request = {
      method: serviceConfig.method,
      //mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        ...requestHeaders,
        ...customRequestHeaders,
      },
    };

    //request with body object not empty {}
    if (serviceConfig.body && Object.keys(serviceConfig.body).length > 1) {
      request = Object.assign(request, {
        //convert to JSON object
        body: JSON.stringify(serviceConfig.body),
      });
    }
    return request as RequestInit;
  };

  const sendRequest = async (
    serviceConfig: {
      path: string;
      method: string;
      params?: Record<string, string>;
      body?: Record<string, string>;
    },
    customRequestHeaders: Record<string, string>
  ): Promise<{ [key: string]: any }[]> => {
    try {
      const path = requestPath(serviceConfig.path, serviceConfig.params);
      const params = requestInterceptor(serviceConfig, customRequestHeaders);
      const response = await fetch(path, params);
      const res = await response.json();
      return responseMiddleware(res);
    } catch (err) {
      return errorInterceptor(err);
    }
  };

  const get = (
    path: string,
    { params = {} } = {},
    { customRequestHeaders = {} } = {}
  ) => sendRequest({ method: 'GET', path, params }, customRequestHeaders);

  const post = (
    path: string,
    { body }: { body: { [key: string]: any } },
    { customRequestHeaders = {} } = {}
  ) => sendRequest({ method: 'POST', path, body }, customRequestHeaders);

  const put = (
    path: string,
    { body }: { body: { [key: string]: any } },
    { customRequestHeaders = {} } = {}
  ) => sendRequest({ method: 'PUT', path, body }, customRequestHeaders);

  const patch = (
    path: string,
    { body }: { body: { [key: string]: any } },
    { customRequestHeaders = {} } = {}
  ) => sendRequest({ method: 'PATCH', path, body }, customRequestHeaders);

  const del = (
    path: string,
    { params }: { params?: Record<string, string> },
    { customRequestHeaders = {} } = {} //this syntax means optional with defualt {}
  ) => sendRequest({ method: 'DELETE', path, params }, customRequestHeaders);

  return {
    get,
    post,
    put,
    patch,
    delete: del,
  };
};

export default apiService();
