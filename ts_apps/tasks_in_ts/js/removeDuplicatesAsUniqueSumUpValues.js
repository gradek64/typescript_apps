/**
 * 1. find properties 'profit..' in an object,
 * 2. for duplicates take their value and sum it up
 * 3. Create final list with unique properties and sum up values
 *
 */
//data
var data = [
    { profit1: 10, profit2: 10, profit3: 10 },
    { profit1: 10, profit2: 10, profit3: 10 },
    { profit1: 10, profit2: 10, profit3: 10, profit4: 40 }
];
//outcome
var outcome = { profit1: 30, profit2: 30, profit3: 30, profit4: 40 };
var generateUniqueValue = function (outcome, obj) {
    return Object.keys(obj).reduce(function (acc, key) {
        acc[key] = !acc[key] ? obj[key] : acc[key] += obj[key];
        return acc;
    }, outcome);
};
/**
* @param data => data objects to iterate on
*/
var customReducer = function (data, reducerMethod) {
    var outcome = {};
    data.forEach(function (obj) {
        outcome = reducerMethod(outcome, obj);
    });
    return outcome;
};
// before refactoring
var findUniqueBefore = function (data) {
    var outcome = {};
    data.forEach(function (obj) {
        Object.keys(obj).forEach(function (key) {
            if (!outcome[key]) {
                outcome[key] = obj[key];
            }
            else {
                outcome[key] += obj[key];
            }
        });
    });
    return outcome;
};
console.log('result from unique object sum up properties:', customReducer(data, generateUniqueValue));
console.log('before refactoring:', findUniqueBefore(data));
