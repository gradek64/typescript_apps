(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./littlerHelpersFn/extractCookieContent":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookieValue = exports.hasCookie = exports.getCookies = void 0;
const extractCookieContent = () => {
    const getCookies = (cookies) => {
        const cookiePairs = cookies
            .split(';')
            .map((cookie) => cookie.split('='));
        //for documentaion you can specify what to return from es6 array methods the same idea as type assertion
        //the callback literally returns a string but we know in fact that Array.map() returns an array
        //so it is diffrent to reduce that explicitally returns what is define in object for entire Array.reduce()
        //as const outcome = reduce<string>((acc, el)=>()) will return the same so string !
        //const ss = [1, 2, 3, 5].map((el): number => { //this wil force callback to set number and error
        //hover ss const and U will see that correctly assigns ss:string[]
        const ss = [1, 2, 3, 5].map((el) => {
            return el + '3';
        });
        //with reduce U might need to tell what it returns if object is more complex omit when not needed
        //U reducing to string
        const ss1 = [1, 2, 3].reduce((acc, el) => {
            return acc + el;
        }, 'hello number');
        console.log('ss', ss);
        console.log('ss', ss1);
        //const cookiePairsObjectArray = cookiePairs.reduce<GetCookiesReturnObject[]>(
        const cookiePairsObjectArray = cookiePairs.reduce(
        //this reduce only has callback with params (acc, element as[]) missing third value
        (accumulator, [key, value]) => {
            //decodeURIComponent converts encoded values as %2Fgreg%2Fset%3Fvalue%3D0 to /greg/set?value=0
            accumulator.push({
                name: key.trim(),
                value: decodeURIComponent(value),
            });
            return accumulator;
        }, [] //with initial value provider for accumulater you need assert its structure <GetCookiesReturnObject[]>
        );
        return cookiePairsObjectArray;
    };
    const hasCookie = (cookies, name) => {
        const allCookies = getCookies(cookies);
        return !!allCookies.find(({ name: cookieName }) => cookieName === name);
    };
    const getCookieValue = (cookies, name) => {
        const allCookies = getCookies(cookies);
        const foundName = allCookies.find(({ name: cookieName }) => cookieName === name);
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
exports.getCookies = getCookies;
exports.hasCookie = hasCookie;
exports.getCookieValue = getCookieValue;

},{}]},{},[1]);
