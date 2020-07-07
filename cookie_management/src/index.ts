import { getCookieValue } from './littlerHelpersFn/extractCookieContent';

/*
  type assertion (tell typescript what type you wan to use)
  1.one way is by <>before object
  2. or use as Object as window as any 

*/
(<any>window).onload = function (): void {
  const optionValue: HTMLOptionElement = <HTMLOptionElement>(
    document.getElementById('ddlTheme')
  );
  //check if cookie color set already
  const cookieValue = getCookieValue(document.cookie, 'color');
  console.log('cookieValue', cookieValue);

  /* const res = [5, 5, {}].map((el) => {
    if (typeof el !== 'number') throw new Error('not a number');
    return Number(el) + 6;
  }); */

  const res = [5, 5, {}].map((el) => {
    try {
      if (typeof el !== 'number') throw new Error('not a number');
      return Number(el) + 6;
    } catch (e) {
      console.error(e);
    }
  });
  const [a, b, c]: [{}[], () => void, number] = [[{}, {}], (evt: nu) => {}, 4];

  console.log('a,b,c', a, b, c);

  if (cookieValue) {
    optionValue.value = cookieValue;
    document.bgColor = cookieValue;
  }
};

//(window as any) === (<any>window)
(<any>window).setColorCookie = function (): void {
  const optionValue: HTMLOptionElement = <HTMLOptionElement>(
    document.getElementById('ddlTheme')
  );

  if (optionValue.value !== 'Select Color') {
    document.bgColor = optionValue.value;
    document.cookie = 'color=' + optionValue.value;
    +';expires=Fri, 5 Aug 2020 01:00:00 UTC;';
  }
};

(<any>window).resetColorCookie = function (): void {
  const optionValue: HTMLOptionElement = <HTMLOptionElement>(
    document.getElementById('ddlTheme')
  );

  if (optionValue.value !== 'Select Color') {
    document.bgColor = 'white';
    optionValue.value = 'Select Color';
    document.cookie = 'color=';
  }
};
