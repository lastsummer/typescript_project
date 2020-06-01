var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName = 'Summer';
var age = 30;
var add = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
console.log('result--->', add(5, 6));
var printOutput = function (print) { return console.log(print); };
var printOutput2;
var printOutput3 = function (output) { console.log(output); };
var printOutput5 = function (output) { return console.log(output); };
printOutput5(add(5));
var hobbies = ['Sports', 'Cooking', 'Sports2', 'Cooking2'];
var hobby1 = hobbies[0], hobby2 = hobbies[1], remaining = hobbies.slice(2);
console.log(hobby1, hobby2);
console.log(remaining);
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
var person = {
    name: 'Summer',
    age: 35
};
var copiedPerson = __assign({}, person);
var add2 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (prev, curr) { return prev + curr; }, 0);
};
var add3 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (prev, curr) { return prev + curr; }, 0);
};
console.log(add2(5, 8, 9, 3.4));
//# sourceMappingURL=app.js.map