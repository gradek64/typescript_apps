"use strict";
exports.__esModule = true;
exports.customCompose = void 0;
/* Facts
 * 1. function arguments spread operator produces array
 * 2. this reduceRight method is extended with another function that takes arguments as below example
 *      const extendedReduced =  [].reduceRight((fnResult: Function, fn: Function) => (...firstFnArgs: any)=>{}
 *      to execute: extendedReduced(...firstFnArgs: any)
 *      Above will call reduceRight and the extended method;
 * 3. reduceRight will start looping from most right element in the array opposite to regular reduce that takes most left element first
 */
var customCompose = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return fns.reduceRight(function (fnResult, fn) { return function () {
        /* console.log('all fns', typeof fns)
        console.log('first fn', typeof fnResult)
        console.log('rest fn', fn)
        console.log('all args', ...firstFnArgs) */
        var firstFnArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            firstFnArgs[_i] = arguments[_i];
        }
        return fnResult(fn.apply(void 0, firstFnArgs));
    }; });
};
exports.customCompose = customCompose;
