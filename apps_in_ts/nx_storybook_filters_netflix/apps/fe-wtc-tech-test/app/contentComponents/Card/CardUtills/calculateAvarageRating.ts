export const calculateAvarageRatings = (Ratings: {}[]) => {
  const percentageValue: number[] = [];

  const overAllPerc = Ratings.map(
    ({ Value }: { Value: string }) => Value
  ).reduce((avaragePerc, rating, index): number => {
    if (rating.includes('/')) {
      const [ratio, all] = rating.split('/').map((value) => Number(value));
      const calcPercentage = (ratio * 100) / all;
      percentageValue.push(calcPercentage);
    }

    if (rating.includes('%')) {
      const value = rating.match(/\d+/)[0];
      const percentage = Number(value);
      percentageValue.push(percentage);
    }

    if (index === Ratings.length - 1) {
      const sumPercentage = percentageValue.reduce((acc, value) => acc + value);

      avaragePerc = sumPercentage / Ratings.length;
      const avaragePercFloat = parseFloat(String(avaragePerc)).toFixed(2);
      return Number(avaragePercFloat);
    }
    return 0;
  }, 0);

  return overAllPerc;
};
