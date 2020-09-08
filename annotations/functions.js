"use strict";
var add = function (a, b) {
    return a + b;
};
// a and b are both the arguments
// number is the output
var subtract = function (a, b) {
    return a - b;
};
function divide(a, b) {
    return a / b;
}
var multiply = function (a, b) {
    return a * b;
};
var logger = function (message) {
    console.log(message);
    return null;
    return undefined;
};
var throwError = function (message) {
    if (!message) {
        throw new Error(message);
    }
};
var todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeather(todaysWeather);
var loggingWeather = function (forecast) {
    console.log(forecast.date);
    console.log(forecast.weather);
};
loggingWeather(todaysWeather);
// ES2015 syntax
// const logWeather = ({date, weather}) => {
//     console.log(date)
//     console.log(weather)
// }
//logWeather(todaysWeather)
