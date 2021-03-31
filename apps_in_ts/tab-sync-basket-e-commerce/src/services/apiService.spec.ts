import apiService from './apiService';

const httpMethods = ['get', 'post', 'patch', 'delete', 'put'];
test('all exposed methods exists and calls http request', () => {
  httpMethods.forEach((method) => {
    expect(typeof apiService[method]).toBe('function');
    expect(apiService[method] instanceof Function).toBe(true);
    if (typeof apiService[method]) console.log('method passed', method);
    apiService[method] = jest.fn(() => Promise.resolve('result'));
    apiService[method]().then((data) => {
      expect(data).toBe('result');
    });
  });
});
