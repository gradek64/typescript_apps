import { generateFilters } from './generateFilters';

describe('it generate filters depending on arugument string and number of execution', () => {
  it('should create and object from string on single execution', () => {
    expect(generateFilters('string', 1)).toEqual({ string: 1 });
  });
  it('should create and object from string on multiple execution', () => {
    let multiple: {};
    for (let index = 0; index < 2; index++) {
      multiple = generateFilters('string', 2);
    }
    expect(multiple).toEqual({ string: 2 });

    //different string given on each interration
    for (let index = 0; index < 2; index++) {
      multiple = generateFilters('string' + index, 2);
    }
    expect(multiple).toEqual({ string0: 1, string1: 1 });
  });
  it('should create and object from coma seperated string on single execution', () => {
    const value = 'value1,value2';
    expect(generateFilters(value, 1)).toEqual({ value1: 1, value2: 1 });
  });
  it('should create and object from coma seperated string on multiple execution', () => {
    let multiple: {};
    const value = 'value1,value2';
    for (let index = 0; index < 2; index++) {
      multiple = generateFilters(value, 2);
    }
    expect(multiple).toEqual({ value1: 2, value2: 2 });
  });
  it('should create and object from coma seperated string and single string  on multiple execution', () => {
    let multiple: {};
    const one = 'value1,value2';
    const two = 'value1';
    const three = 'value3';
    for (let index = 1; index < 4; index++) {
      if (index === 1) multiple = generateFilters(one, 3);
      if (index === 2) multiple = generateFilters(two, 3);
      if (index === 3) multiple = generateFilters(three, 3);
    }
    expect(multiple).toEqual({ value1: 2, value2: 1, value3: 1 });
  });
});
