import { cleanup, renderHook } from '@testing-library/react-hooks';

//custom
import {useFetch} from './useFetch';
const mockData = 
  [{
    "productId": "5493179",
    "sku": "549/3179",
    "title": "Russell Hobbs Pennine Illuminating S Steel Kettle 20444",
    "price": 24.99,
    "image": "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130"
  },
  {
    "productId": "4251824",
    "sku": "425/1824",
    "title": "Challenge White Desk Fan - 12 Inch",
    "price": 14.99,
    "image": "https://media.4rgos.it/s/Argos/4251824_R_SET?w=110&h=130"
  }]

const mockJsonPromise = Promise.resolve(mockData);
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise,
});

describe('useFetch() is loading data', () => {
  afterEach(cleanup);
  beforeEach(()=>{
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  })
  it('should set loading=true' , async () => {
    const { result,waitForNextUpdate } = renderHook(() => useFetch({url:'/domain'}));
    expect(result.current.loading).toBe(true)
    await waitForNextUpdate()
  });
  it('should set loading=false once data is loaded' , async () => {
    const { result,waitForNextUpdate } = renderHook(() => useFetch({url:'/domain'}));
    await waitForNextUpdate()
    expect(result.current.loading).toBe(false)
  });
}); 

describe('useFetch() responds with data', () => {
  afterEach(cleanup);
  beforeEach(()=>{
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  })
  it('should call useFetch() with no params and return data' , async () => {
    const { result,waitForNextUpdate } = renderHook(() => useFetch({url:'/domain'}));
    await waitForNextUpdate()
    const mockDataJson = JSON.stringify(mockData)
    const hookResponseJson = JSON.stringify(result.current.data)
    expect(hookResponseJson).toBe(mockDataJson)
  });
  
}); 

describe('useFetch() responds with error', () => {
  afterEach(cleanup);
  beforeEach(()=>{
    global.fetch = jest.fn().mockImplementation(() => Promise.reject('error'));
  })
  it('should set error' , async () => {
    const { result,waitForNextUpdate } = renderHook(() => useFetch({url:'/domain'}));
    await waitForNextUpdate()
    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBe('error')
  });
}); 

