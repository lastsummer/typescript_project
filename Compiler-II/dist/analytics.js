"use strict";
exports.__esModule = true;
var app_1 = require("./app");
function sendAnalytics(data) {
    console.log(data);
}
sendAnalytics('The data');
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return 0;
}
add(2, 5);
app_1.clickHandler("message");
//# sourceMappingURL=analytics.js.map