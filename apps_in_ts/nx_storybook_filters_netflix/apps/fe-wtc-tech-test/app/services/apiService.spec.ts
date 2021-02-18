import apiService from './apiService';

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
    it('will be called with /api/movies', async () => {
      await apiService.get('/api/movies');
      expect(window.fetch).toHaveBeenCalledWith(
        'http://localhost:3333/api/movies',
        {
          cache: 'default',
          credentials: 'same-origin',
          headers: { 'Content-Type': 'application/json' },
          method: 'GET',
        }
      );
    });

    it('will response with data', async () => {
      const res = await apiService.get('/api/movies');
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
      const res = await apiService.get('/api/movies');
      expect(res).toEqual('fail');
    });
  });
});
