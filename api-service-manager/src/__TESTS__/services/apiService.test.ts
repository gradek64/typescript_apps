import apiService from '../../services/apiService';

describe('test API', () => {
  beforeEach(() => {
    //actual api response
    const JSON_API_RESPONSE = jest.fn(
      () =>
        new Promise((resolve) => {
          resolve({ data: { data: 'data' } });
        })
    );
    window.fetch = jest.fn().mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve({ json: JSON_API_RESPONSE });
        })
    );
  });
  describe('it calls GET request', () => {
    it('will be called with path only', async () => {
      await apiService.get('/path');
      expect(window.fetch).toHaveBeenCalledWith(
        'https://rest-api-node-moogoose.herokuapp.com/path',
        {
          cache: 'default',
          credentials: 'same-origin',
          headers: { 'Content-Type': 'application/json' },
          method: 'GET',
        }
      );
    });
    it('will be called with path and {params} object', async () => {
      await apiService.get('/path', {
        params: { query: 'london', attitude: 'long' },
      });
      expect(window.fetch).toHaveBeenCalledWith(
        'https://rest-api-node-moogoose.herokuapp.com/path?query=london&attitude=long',
        {
          cache: 'default',
          credentials: 'same-origin',
          headers: { 'Content-Type': 'application/json' },
          method: 'GET',
        }
      );
    });
    it('will be called with path and {params} object, {customRequestHeaders} object', async () => {
      await apiService.get(
        '/path',
        {
          params: { query: 'london', attitude: 'long' },
        },
        { customRequestHeaders: { 'custom-header': 'header' } }
      );
      expect(window.fetch).toHaveBeenCalledWith(
        'https://rest-api-node-moogoose.herokuapp.com/path?query=london&attitude=long',
        {
          cache: 'default',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'custom-header': 'header',
          },
          method: 'GET',
        }
      );
    });
    it('will response with data', async () => {
      const res = await apiService.get('/path');
      expect(res).toEqual({ data: { data: 'data' } });
    });
    it('will fail if promise is rejected', async () => {
      const JSON_API_RESPONSE_FAIL = jest.fn(
        () =>
          new Promise((reject) => {
            reject('fail');
          })
      );
      window.fetch = jest.fn().mockImplementation(
        () =>
          new Promise((resolve, reject) => {
            resolve({ json: JSON_API_RESPONSE_FAIL });
            reject('fail');
          })
      );
      const res = await apiService.get('/path');
      expect(res).toEqual('fail');
    });
  });
});
