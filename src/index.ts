// index.ts
const calculateFutureValue = (
  presentValue: number,
  interestRate: number,
  periods: number
): number => {
  // Convert interest rate to decimal form
  const decimalInterestRate: number = interestRate / 100;

  // Calculate the future value
  const futureValue: number =
    presentValue * Math.pow(1 + decimalInterestRate, periods);

  return Math.ceil(futureValue);
};

export default calculateFutureValue;
