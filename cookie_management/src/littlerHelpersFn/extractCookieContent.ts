const extractCookieContent = () => {
  // Array<Array<string>> === string[][]
  interface GetCookiesReturnObject {
    name: string;
    value: string;
  }
  const getCookies = (cookies: string): any[] => {
    const cookiePairs: Array<Array<string>> = cookies
      .split(';')
      .map((cookie) => cookie.split('='));

    //for documentaion you can specify what to return from es6 array methods the same idea as type assertion
    //the callback literally returns a string but we know in fact that Array.map() returns an array
    //so it is diffrent to reduce that explicitally returns what is define in object for entire Array.reduce()
    //as const outcome = reduce<string>((acc, el)=>()) will return the same so string !
    //const ss = [1, 2, 3, 5].map((el): number => { //this wil force callback to set number and error
    //hover ss const and U will see that correctly assigns ss:string[]
    const ss = [1, 2, 3, 5].map((el): string => {
      return el + '3';
    });

    //with reduce U might need to tell what it returns if object is more complex omit when not needed
    //U reducing to string
    const ss1 = [1, 2, 3].reduce<string>((acc, el): string => {
      return acc + el;
    }, 'hello number');

    console.log('ss', ss);
    console.log('ss', ss1);
    //const cookiePairsObjectArray = cookiePairs.reduce<GetCookiesReturnObject[]>(
    const cookiePairsObjectArray = cookiePairs.reduce<GetCookiesReturnObject[]>(
      //this reduce only has callback with params (acc, element as[]) missing third value
      (accumulator, [key, value]): Array<GetCookiesReturnObject> => {
        //decodeURIComponent converts encoded values as %2Fgreg%2Fset%3Fvalue%3D0 to /greg/set?value=0
        accumulator.push({
          name: key.trim(),
          value: decodeURIComponent(value),
        });
        return accumulator;
      },
      [] //with initial value provider for accumulater you need assert its structure <GetCookiesReturnObject[]>
    );
    return cookiePairsObjectArray;
  };

  const hasCookie = (cookies: string, name: string): boolean => {
    const allCookies: Array<GetCookiesReturnObject> = getCookies(cookies);
    return !!allCookies.find(({ name: cookieName }) => cookieName === name);
  };

  const getCookieValue = (
    cookies: string,
    name: string
  ): string | undefined => {
    const allCookies: Array<GetCookiesReturnObject> = getCookies(cookies);
    const foundName = allCookies.find(
      ({ name: cookieName }) => cookieName === name
    );
    return foundName && foundName['value'] !== ''
      ? foundName['value']
      : undefined;
  };

  return {
    getCookies,
    hasCookie,
    getCookieValue,
  };
};

const { getCookies, hasCookie, getCookieValue } = extractCookieContent();
export { getCookies, hasCookie, getCookieValue };
