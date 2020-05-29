"use strict";
exports.__esModule = true;
var a = "a";
var b = "c";
console.log(a);
console.log(b);
var button = document.querySelector('button');
button.addEventListener('click', function () {
    console.log('Clicked!');
});
var c = [1, 3, 5, 7, 9];
for (var _i = 0, c_1 = c; _i < c_1.length; _i++) {
    var i = c_1[_i];
    console.log(i);
}
function clickHandler(message) {
    console.log('CLicked! ' + message);
}
exports.clickHandler = clickHandler;
//# sourceMappingURL=app.js.map