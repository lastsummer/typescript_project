function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function testUndefined(num) {
    console.log('Result: ' + num);
    return;
}
printResult(add(5, 12));
var addFun;
addFun = printResult;
var combineValue;
combineValue = printResult;
combineValue(2);
function addAndHandel(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandel(5, 6, function (num) {
    console.log(num);
    return true;
});
