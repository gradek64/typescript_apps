//import axios from 'axios';
// custom
//import { ENV } from '../utils/ENV';

//const { BASE_URL, ACCESS_TOKEN } = ENV;

const apiService = () => {
  const TIMEOUT = 30000;

  const errorInterceptor = (err:any) => {
    switch (err.status) {
    case -1:
      if (err.xhrStatus === 'abort') {
        if (!err.config) {
          err.config = { timeout: TIMEOUT };
        }
        console.warn(
          `REQUEST CANCELED (config timeout: ${err.config.timeout}ms)`,
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

    // console.log(err)
    // console.log(err instanceof Error)
    // console.log(typeof err)
    // console.log(err.constructor.name)
    throw err;
  };

  //apply additional middleware if data needs processing/transforming
  const responseMiddleware = (res:any) => res;


  interface httpParamsInt {
    method:string,
    url:string,
    params?:Record<string,string|number> | null,
    body?:Record<string,any>, //{[key:string]:any} === Record<string,any> same
    customHeaders?:Record<string,string>,
    
  }
  /* const requestInterceptor = (
    { method, 
      url, 
      params,
      body, 
      customHeaders}:httpParamsInt) => {

    // axios default config part of axios request no need to include in request object;
    axios.defaults.baseURL = BASE_URL || '';
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common.Authorization = ACCESS_TOKEN;

    // service headers and data
    // const dataOrParams = ['GET', 'DELETE'].includes(config.method) ? 'params' : 'data';
    const dataOrParams = paramsOrData ? 'params' : 'data';
    /* const configObject = config.data
      ? { ...config, [dataOrParams]: config.data }
      : { ...config }; 

    if (serviceHeaders === undefined) {
      config.headers = {};
    }
    // conf.headers.Authorization = cookies.get('access_token');
    return {
      method,
      url:path,
      [dataOrParams]: serviceConfig[dataOrParams],
    };
  }; */

  const addParamsToUrl = (params:Record<string,string|number>) => 
  Object.keys(params).reduce((str,key)=>str+=`?${key}=${params[key]}`,'')


  
  const send = (
    { method, url, params, body, customHeaders}:httpParamsInt
    ) => {
      
      //with axios
     /*  return axios
      .request(requestInterceptor({ method, url, paramsOrBody, customHeaders}))
      .then(responseMiddleware)
      .catch(errorInterceptor); */

      //with fetch 
     let path = params ? `${url}${addParamsToUrl(params)}`: url

      console.log(JSON.stringify(body))
      if(body){
        return fetch(path,
          { method,
            headers:{
              'Content-Type': 'application/json',
              ...customHeaders
            },
            body:JSON.stringify(body), // body data type must match "Content-Type" header
            })
          .then((data)=>data.json())
          .then(responseMiddleware) 
          .catch(errorInterceptor);
      }
      if(!body){
          return fetch(path,{...customHeaders})
          .then((data)=>data.json())
          .then(responseMiddleware)
          .catch(errorInterceptor);
      } 
      
    }
      
  //methods
  //const get = (url:string, {params}:{params:Record<string,string|number> | null}={params:null},customHeaders?:Record<string,string> ) =>
  const get = (url:string, params:Record<string,string|number> | null=null,customHeaders?:Record<string,string> ) =>
   send({ method: 'GET', url, params, customHeaders});

  const post = (url:string, body:Record<string,any>, customHeaders?:Record<string,string>) => 
  send({ method: 'POST', url, body, customHeaders});

  const put = (url:string, body:Record<string,any>, customHeaders?:Record<string,string>) =>   
  send({ method: 'PUT', url, body, customHeaders});

  const patch = (url:string, body:Record<string,any>, customHeaders?:Record<string,string>) =>   
  send({ method: 'PATCH', url, body, customHeaders});

  const del = (url:string, body:Record<string,any>, customHeaders?:Record<string,string>) => 
  send({ method: 'DELETE', url, body, customHeaders});

  return {
    get,
    post,
    put,
    patch,
    delete: del,
  };
};

export default apiService();
