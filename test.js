// test.js
const calculateFutureValue = require("./index");

const presentValue = 1000;
const interestRate = 5;
const periods = 10;

const futureValue = calculateFutureValue(presentValue, interestRate, periods);
console.log("Future Value:", futureValue);
