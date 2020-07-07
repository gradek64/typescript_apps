"use strict";
//   1. anonimous non-return function
/* function(x,y){
  console.log(x,y)
} */
exports.__esModule = true;
var addNew_1 = require("./addNew");
console.log('check', addNew_1.list);
//es5
var ss = function (x, y) {
    console.log(x, y);
};
//es6
var ssES6 = function (x, y) {
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
var ss_ts = function (x, y) {
    console.log(x, y);
};
//ts format
var ss_ts_es6 = function (x, y) {
    console.log(x, y);
};
//ts format contextual types are skipped in actual function
var ss_ts_es6_cont = function (x, y) {
    console.log(x, y);
};
//   1. named function add that takes 2 parameters of types: Number, Number
function add(x, y) {
    return x + y;
}
var addConst = function (x, y) {
    return x + y;
};
//ts type
var addConst_ts = function (x, y) {
    return x + y;
};
//ts type with es6
var addConst_ts_es6 = function (x, y) {
    return x + y;
};
//ts contextualtype with es6 with only one parameter contextual
var addConst_ts_es6_cont = function (x, y) {
    return x + y;
};
var addConst_ts_es6_interface = function (x, y) {
    return x + y;
};
addConst_ts_es6_interface(6, 7);
/********---------------------*********/
//   2. ():number is indication of return type and can be skipped due to return statement in function body
function addNonSpecificReturn(x, y) {
    return x + y;
}
var addNonSpecificReturnConst = function (x, y) { return x + y; };
//ts format always require return type even if doesnt so it takes => void
var addNonSpecificReturnConst_ts = function (x, y) { return x + y; };
//ts format always contextual types are skiped in actual functon and kept in declarion
var addNonSpecificReturnConst_ts_cont = function (x, y) { return x + y; };
var addConst_ts_es6_interface_skipped_return = function (x, y) {
    return x + y;
};
addConst_ts_es6_interface_skipped_return(7, 7);
/********---------------------*********/
//  3. optional parameter
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + ' ' + lastName;
    else
        return firstName;
}
//es6 format
var buildNameConst = function (firstName, lastName) {
    if (lastName)
        return firstName + ' ' + lastName;
    else
        return firstName;
};
//typescript format;
var buildName_ts = function name(firstName, lastName) {
    if (lastName)
        return firstName + ' ' + lastName;
    else
        return firstName;
};
//t_s contextual typing actual parameters types are skiped since defined in function declaration
var buildName_ts_cont = function name(firstName, lastName) {
    if (lastName)
        return firstName + ' ' + lastName;
    else
        return firstName;
};
var buildName_ts_cont_interface = function name(firstName, lastName) {
    if (lastName)
        return firstName + ' ' + lastName;
    else
        return firstName;
};
buildName_ts_cont_interface('Greg');
buildName_ts_cont_interface('Greg', 'Gil');
/********---------------------*********/
//   4. default parameter lastName = "Smith
function buildNameDefault(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Smith'; }
    return firstName + ' ' + lastName;
}
//es6 format
var buildNameDefaultConst = function (firstName, lastName) {
    if (lastName === void 0) { lastName = 'Smith'; }
    return firstName + ' ' + lastName;
};
//ts format type declaration dont take defaults cause they only define types
var buildNameDefaultConst_ts = function (firstName, lastName) {
    if (lastName === void 0) { lastName = 'Smith'; }
    return firstName + ' ' + lastName;
};
//ts contextual typing actual parameters types are skiped since defined in function declaration
var buildNameDefaultConst_ts_cont = function (firstName, lastName) { return firstName + ' ' + lastName; };
var buildName_ts_default_interface = function name(firstName, lastName) {
    if (lastName === void 0) { lastName = 'not known'; }
    return firstName + ' ' + lastName;
};
buildName_ts_cont_interface('Greg');
buildName_ts_cont_interface('Greg', 'Gil');
/********---------------------*********/
//   5. unlimited parameter as rest operator ...parameter (is always optional and it doesnt have to be declare in interface)
var rest_operator_ts = function (firstName) {
    var restofName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restofName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restofName.join(' ');
};
//ts contextual
var rest_operator_ts_cont = function (firstName) {
    var restofName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restofName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restofName.join(' ');
};
rest_operator_ts_cont('Greg', 'is', 'cool', 'and', 'even');
var buildName_spread_operator_interface = function (firstName) {
    var otherNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherNames[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + otherNames.join(' ');
};
buildName_spread_operator_interface('Greg');
buildName_spread_operator_interface('Greg', 'is', 'cool', 'and', 'more', 'cool');
/********---------------------*********/
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
//   6. function that takes one OR another parameter type
var one_or_other = function (value) { return value; };
one_or_other('Greg');
one_or_other(37);
var buildName_one_or_another_interface = function (data) { return data; };
buildName_one_or_another_interface('Greg');
//buildName_one_or_another_interface(38) //U need function overload for that ?
//6. function that takes other function as parameter
function setMe(func) {
    var result = func();
    return result; //allows to return even the return set to void
}
//es6
var setMeES6 = function (func) {
    var result = func();
    return result; //allows to return even the return set to void
};
//ts format
var setMeSingnature = function (func) {
    var result = func();
    return result; //allows to return even the return set to void
};
//es6 function singnature
var setMeSingnatureES6 = function (func) {
    var result = func();
    return result; //allows to return even the return set to void
};
