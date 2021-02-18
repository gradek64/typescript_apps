/* Facts
 * 1. function arguments spread operator produces array
 * 2. this reduceRight method is extended with another function that takes arguments as below example 
 *      const extendedReduced =  [].reduceRight((fnResult: Function, fn: Function) => (...firstFnArgs: any)=>{}
 *      to execute: extendedReduced(...firstFnArgs: any)
 *      Above will call reduceRight and the extended method;
 * 3. reduceRight will start looping from most right element in the array opposite to regular reduce that takes most left element first
 */
export const customCompose = (...fns: Array<Function>) => fns.reduceRight((fnResult: Function, fn: Function) => (...firstFnArgs: any) => {

  /* console.log('all fns', typeof fns)
  console.log('first fn', typeof fnResult)
  console.log('rest fn', fn)
  console.log('all args', ...firstFnArgs) */

  return fnResult(fn(...firstFnArgs))

})
