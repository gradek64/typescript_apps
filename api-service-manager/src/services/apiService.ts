// custom
import { ENV_POSTS, ENV_WEATHER } from '../utils/ENV';

const apiService = () => {
  const TIMEOUT = 30000;

  const errorInterceptor = (err) => {
    switch (err.status) {
      case -1:
        if (err.xhrStatus === 'abort') {
          if (!err.config) {
            err.config = { timeout: TIMEOUT };
          }
          console.warn(
            `REQUEST CANCELED (config timeout: ${err.config.timeout}ms)`
          );
        }
        break;
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
    throw err;
  };

  const responseMiddleware = (res) => res;

  const requestPath = (path: string, params?: Object) => {
    //for testing work with 2 BASE_URLs
    const PATH = path.includes('location')
      ? ENV_WEATHER.BASE_URL
      : ENV_POSTS.BASE_URL;
    if (params && Object.keys(params).length > 1) {
      let query: string = '';

      for (const keys in params) {
        query += keys + '=' + params[keys] + '&';
      }
      console.log('requestPath1', PATH + path);
      //remove last '&' symbol
      return PATH + path + '?' + query.replace(/&$/, '').trim();
    }

    //console.log('requestPath2', PATH + path);

    return PATH + path;
  };

  interface RequestInit {}
  const requestInterceptor = (
    serviceConfig: {
      path: string;
      method: string;
      params?: Object;
      body?: Object;
    },
    customRequestHeaders: Object
  ): RequestInit => {
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
    //console.log('request with headers', request);
    return request;
  };

  const sendRequest = async (
    serviceConfig: {
      path: string;
      method: string;
      params?: Object;
      body?: Object;
    },
    customRequestHeaders: Object
  ): Promise<{ [key: string]: any }> => {
    try {
      const response = await fetch(
        requestPath(serviceConfig.path, serviceConfig.params),
        requestInterceptor(serviceConfig, customRequestHeaders)
      );
      const res = await response.json();
      return responseMiddleware(res);
    } catch (err) {
      console.log('it has errored');
      return errorInterceptor(err);
    }
  };

  const get = (
    path: string,
    { params = {} } = {}, //this syntax means optional with defualt {}
    { customRequestHeaders = {} } = {} //this syntax means optional with defualt {}
  ) => sendRequest({ method: 'GET', path, params }, customRequestHeaders);

  const post = (
    path: string,
    { body }: { body: { [key: string]: any } },
    { customRequestHeaders = {} } = {} //this syntax means optional with defualt {}
  ) => sendRequest({ method: 'POST', path, body }, customRequestHeaders);

  const put = (
    path: string,
    { body }: { body: { [key: string]: any } },
    { customRequestHeaders = {} } = {} //this syntax means optional with defualt {}
  ) => sendRequest({ method: 'PUT', path, body }, customRequestHeaders);

  const patch = (
    path: string,
    { body }: { body: { [key: string]: any } },
    { customRequestHeaders = {} } = {} //this syntax means optional with defualt {}
  ) => sendRequest({ method: 'PATCH', path, body }, customRequestHeaders);

  const del = (
    path: string,
    { params }: { params?: Object },
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
