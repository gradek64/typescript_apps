//   1. anonimous non-return function
/* function(x,y){
  console.log(x,y)
} */

import { list } from './addNew';

console.log('check', list);
//es5
var ss = function (x: string, y: string) {
  console.log(x, y);
};
//es6
const ssES6 = (x: string, y: string) => {
  console.log(x, y);
};
//ts
/*
  1.const ss_ts: === var ss_ts = function
  2.Function signature: this part is stricly t_s and it acts as type check and parameters it takes
  it is similar to object declaration (it is interface for objects including functions) as:
       obj:{param1:string, param2:string} and return: => number,string etc...
                                          no return => void (has to be there)
        parameters dont have to match names with actual function parameters, 
        as long as the numbers of parameters are the same is valid
  3. function(x:string,y:string) {
  console.log(x,y) this is actual function declaration with parameters and body 
*/
const clueless: unknown = '1';
//treat as a number even it is a string
const clueNum: number = <number>clueless;

const inputElement = document.getElementById('id') as HTMLInputElement;
inputElement.value = 'someValue ';

const planetFix = {} as { name: string };
planetFix.name = 'earth';
const planetFix1 = <{ name: string }>{};
planetFix1.name = 'earth';

const setter = {};
const bb = setter.toString();
interface int {
  x: number;
  y: number;
}

const res: number[] = [5, 5, '44'].map((el: any) => el + 4);

//ts format
const ss_ts_es6: (xType: string, yType: string) => void = (
  x: string,
  y: string
) => {
  console.log(x, y);
};

//ts format contextual types are skipped in actual function
const ss_ts_es6_cont: (xType: string, yType: string) => void = (x, y) => {
  console.log(x, y);
};

//   1. named function add that takes 2 parameters of types: Number, Number
function add(x: number, y: number): number {
  return x + y;
}
const addConst = (x: number, y: number): number => {
  return x + y;
};
//ts type
const addConst_ts: (x: number, y: number) => number = function (
  x: number,
  y: number
) {
  return x + y;
};
//ts type with es6
const addConst_ts_es6: (x: number, y: number) => number = (
  x: number,
  y: number
) => {
  return x + y;
};

//ts contextualtype with es6 with only one parameter contextual
const addConst_ts_es6_cont: (xtype: number, ytypo: number) => number = (
  x,
  y: number
) => {
  return x + y;
};

//function signature with function interface;
interface AddConst_ts_es6_interface {
  (xtype: number, key: number): number;
}
const addConst_ts_es6_interface: AddConst_ts_es6_interface = (x, y: number) => {
  return x + y;
};

addConst_ts_es6_interface(6, 7);
/********---------------------*********/

//   2. ():number is indication of return type and can be skipped due to return statement in function body
function addNonSpecificReturn(x: number, y: number) {
  return x + y;
}
const addNonSpecificReturnConst = (x: number, y: number) => x + y;

//ts format always require return type even if doesnt so it takes => void
const addNonSpecificReturnConst_ts: (x: number, y: number) => number = (
  x: number,
  y: number
) => x + y;

//ts format always contextual types are skiped in actual functon and kept in declarion
const addNonSpecificReturnConst_ts_cont: (x: number, y: number) => number = (
  x,
  y
) => x + y;

//function signature with function interface; (not recommeded due to confusion what functions actually does)
interface AddConst_ts_es6_interface_skipped_return {
  (xtype: number, key: number);
}
const addConst_ts_es6_interface_skipped_return: AddConst_ts_es6_interface_skipped_return = (
  x,
  y: number
) => {
  return x + y;
};

addConst_ts_es6_interface_skipped_return(7, 7);

/********---------------------*********/

//  3. optional parameter
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + ' ' + lastName;
  else return firstName;
}

//es6 format
const buildNameConst = (firstName: string, lastName?: string): string => {
  if (lastName) return firstName + ' ' + lastName;
  else return firstName;
};

//typescript format;
const buildName_ts: (
  firstName: string,
  lastName?: string
) => string = function name(firstName: string, lastName?: string) {
  if (lastName) return firstName + ' ' + lastName;
  else return firstName;
};

//t_s contextual typing actual parameters types are skiped since defined in function declaration
const buildName_ts_cont: (
  firstName: string,
  lastName?: string
) => string = function name(firstName, lastName?) {
  if (lastName) return firstName + ' ' + lastName;
  else return firstName;
};

//t_s optional parameter with function interface
interface AddConst_ts_es6_interface_optional_param {
  (firstNametype: string, lastName?: string): string;
}
const buildName_ts_cont_interface: AddConst_ts_es6_interface_optional_param = function name(
  firstName,
  lastName?
) {
  if (lastName) return firstName + ' ' + lastName;
  else return firstName;
};
buildName_ts_cont_interface('Greg');
buildName_ts_cont_interface('Greg', 'Gil');
/********---------------------*********/

//   4. default parameter lastName = "Smith
function buildNameDefault(firstName: string, lastName = 'Smith'): string {
  return firstName + ' ' + lastName;
}
//es6 format
const buildNameDefaultConst = (firstName: string, lastName = 'Smith'): string =>
  firstName + ' ' + lastName;

//ts format type declaration dont take defaults cause they only define types
const buildNameDefaultConst_ts: (
  firstName: string,
  lastName: string
) => string = (firstName: string, lastName = 'Smith') =>
  firstName + ' ' + lastName;

//ts contextual typing actual parameters types are skiped since defined in function declaration
const buildNameDefaultConst_ts_cont: (
  firstNameType: string,
  lastNameType: string
) => string = (firstName, lastName) => firstName + ' ' + lastName;

//t_s optional parameter with function interface
interface AddConst_ts_es6_interface_optional_param {
  (firstNametype: string, lastName?: string): string;
}

//t_s optional parameter in interface (function signature) with default function parameter
interface AddConst_ts_es6_interface_optional {
  (firstName: string, lastName?: string);
}
const buildName_ts_default_interface: AddConst_ts_es6_interface_optional = function name(
  firstName,
  lastName = 'not known'
) {
  return firstName + ' ' + lastName;
};

buildName_ts_cont_interface('Greg');
buildName_ts_cont_interface('Greg', 'Gil');
/********---------------------*********/

//   5. unlimited parameter as rest operator ...parameter (is always optional and it doesnt have to be declare in interface)
const rest_operator_ts: (
  firstNameType: string,
  ...restofName: string[]
) => string = (firstName: string, ...restofName: []) =>
  firstName + ' ' + restofName.join(' ');

//ts contextual
const rest_operator_ts_cont: (
  firstNameType: string,
  ...restofName: string[]
) => string = (firstName, ...restofName) =>
  firstName + ' ' + restofName.join(' ');

rest_operator_ts_cont('Greg', 'is', 'cool', 'and', 'even');

//t_s rest parameter in interface (function singnature)
interface AddConst_spread_operator {
  (firstName: string, ...restofName: string[]);
}
const buildName_spread_operator_interface: AddConst_spread_operator = (
  firstName,
  ...otherNames: string[]
) => {
  return firstName + ' ' + otherNames.join(' ');
};
buildName_spread_operator_interface('Greg');
buildName_spread_operator_interface(
  'Greg',
  'is',
  'cool',
  'and',
  'more',
  'cool'
);

/********---------------------*********/

function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

//   6. function that takes one OR another parameter type
const one_or_other: (value: string | number) => string | number = (
  value: string | number
) => value;

one_or_other('Greg');
one_or_other(37);

//t_s rest parameter in interface (function singnature)
interface AddConst_one_or_another {
  (data: string | number): string | number;
}
const buildName_one_or_another_interface: AddConst_spread_operator = (
  data: string | number
) => data;

buildName_one_or_another_interface('Greg');
//buildName_one_or_another_interface(38) //U need function overload for that ?

//6. function that takes other function as parameter

function setMe(func: () => void): void {
  const result = func();
  return result; //allows to return even the return set to void
}

//es6
const setMeES6 = (func: () => void): void => {
  const result = func();
  return result; //allows to return even the return set to void
};
//ts format
const setMeSingnature: (sign: () => void) => void = function (
  func: () => void
) {
  const result = func();
  return result; //allows to return even the return set to void
};

//es6 function singnature
const setMeSingnatureES6: (sign: () => void) => void = (func: () => void) => {
  const result = func();
  return result; //allows to return even the return set to void
};
