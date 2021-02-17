import { calculateAvarageRatings } from './calculateAvarageRating';

describe('calculateAvarageRating reduces array values to a single value', () => {
  it('should return avarage percentage value from aray with ratio ratings as 20/100', () => {
    const ratioArrayValues = [
      { Source: 'Internet Movie Database', Value: '2/10' },
      { Source: 'Rotten Tomatoes', Value: '20/100' },
      { Source: 'Metacritic', Value: '50/100' },
    ];
    expect(calculateAvarageRatings(ratioArrayValues)).toBe(30);
  });
  it('should return avarage percentage value from aray with percentage ratings as 50%', () => {
    const ratioArrayValues = [
      { Source: 'Internet Movie Database', Value: '20%' },
      { Source: 'Rotten Tomatoes', Value: '20%' },
      { Source: 'Metacritic', Value: '50%' },
    ];
    expect(calculateAvarageRatings(ratioArrayValues)).toBe(30);
  });
  it('should return avarage percentage value from mixed aray with percentage and ratio ratings', () => {
    const ratioArrayValues = [
      { Source: 'Internet Movie Database', Value: '20%' },
      { Source: 'Rotten Tomatoes', Value: '20/100' },
      { Source: 'Metacritic', Value: '50%' },
    ];
    expect(calculateAvarageRatings(ratioArrayValues)).toBe(30);
  });
});
