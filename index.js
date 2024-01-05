// index.js
const calculateFutureValue = (presentValue, interestRate, periods) => {
  // Convert interest rate to decimal form
  const decimalInterestRate = interestRate / 100;

  // Calculate the future value
  const futureValue = presentValue * Math.pow(1 + decimalInterestRate, periods);

  return Math.ceil(futureValue);
};

module.exports = calculateFutureValue;
