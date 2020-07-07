"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extractCookieContent_1 = require("./littlerHelpersFn/extractCookieContent");
/*
  type assertion (tell typescript what type you wan to use)
  1.one way is by <>before object
  2. or use as Object as window as any

*/
window.onload = function () {
    const optionValue = (document.getElementById('ddlTheme'));
    //check if cookie color set already
    const cookieValue = extractCookieContent_1.getCookieValue(document.cookie, 'color');
    console.log('cookieValue', cookieValue);
    /* const res = [5, 5, {}].map((el) => {
      if (typeof el !== 'number') throw new Error('not a number');
      return Number(el) + 6;
    }); */
    const res = [5, 5, {}].map((el) => {
        try {
            if (typeof el !== 'number')
                throw new Error('not a number');
            return Number(el) + 6;
        }
        catch (e) {
            console.error(e);
        }
    });
    const [a, b, c] = [
        [{}, {}],
        (evt) => {
            evt;
        },
        4,
    ];
    console.log('a,b,c', a, b, c);
    if (cookieValue) {
        optionValue.value = cookieValue;
        document.bgColor = cookieValue;
    }
};
//(window as any) === (<any>window)
window.setColorCookie = function () {
    const optionValue = (document.getElementById('ddlTheme'));
    if (optionValue.value !== 'Select Color') {
        document.bgColor = optionValue.value;
        document.cookie = 'color=' + optionValue.value;
        +';expires=Fri, 5 Aug 2020 01:00:00 UTC;';
    }
};
window.resetColorCookie = function () {
    const optionValue = (document.getElementById('ddlTheme'));
    if (optionValue.value !== 'Select Color') {
        document.bgColor = 'white';
        optionValue.value = 'Select Color';
        document.cookie = 'color=';
    }
};
