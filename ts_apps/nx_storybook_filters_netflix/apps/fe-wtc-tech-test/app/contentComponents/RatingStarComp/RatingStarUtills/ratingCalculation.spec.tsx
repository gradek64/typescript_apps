import { showStarRating } from './ratingCalculation';

describe('calculate number of diffrent starts out of 5', () => {
  it('should have 5 whole stars for perecentage of 100', () => {
    const ratingCalculation = showStarRating(100, 5);
    const expectedStars = [
      'wholeStar',
      'wholeStar',
      'wholeStar',
      'wholeStar',
      'wholeStar',
    ].join();
    const starCollection = ratingCalculation.map((fn) => fn.name).join();
    expect(expectedStars).toBe(starCollection);
  });
  it('should have 2 whole stars 1 half star and 2 empty stars for perecentage of 50', () => {
    const ratingCalculation = showStarRating(50, 5);
    const expectedStars = [
      'wholeStar',
      'wholeStar',
      'halfStar',
      'emptyStar',
      'emptyStar',
    ].join();
    const starCollection = ratingCalculation.map((fn) => fn.name).join();
    expect(expectedStars).toBe(starCollection);
  });
  it('should have 2 whole stars and 3 empty stars for perecentage of 40', () => {
    const ratingCalculation = showStarRating(40, 5);
    const expectedStars = [
      'wholeStar',
      'wholeStar',
      'emptyStar',
      'emptyStar',
      'emptyStar',
    ].join();
    const starCollection = ratingCalculation.map((fn) => fn.name).join();
    expect(expectedStars).toBe(starCollection);
  });
  it('should have 1 half star and 4 empty stars for perecentage of 10', () => {
    const ratingCalculation = showStarRating(10, 5);
    const expectedStars = [
      'halfStar',
      'emptyStar',
      'emptyStar',
      'emptyStar',
      'emptyStar',
    ].join();
    const starCollection = ratingCalculation.map((fn) => fn.name).join();
    expect(expectedStars).toBe(starCollection);
  });
});
