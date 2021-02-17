export enum APIResult {
  SUCCESS = 'success',
  FAILURE = 'failure',
}

export enum Base {
  URL = 'https://www.metaweather.com/api',
}

const Endpoints = {
  articles_get: `${Base.URL}/location/44418/`,
};
export { Endpoints };
