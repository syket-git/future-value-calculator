# future-value-calculator

[![npm version](https://badge.fury.io/js/future-value-calculator.svg)](https://www.npmjs.com/package/future-value-calculator)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple npm package to calculate the future value of an investment based on the present value, interest rate, and compounding periods.

Examples at https://future-value-calculator-demo.vercel.app/.

Source code at https://github.com/syket-git/future-value-calculator,

## 🏗️ Installation

You can install the package using npm:

```bash
npm install future-value-calculator

```

## 🔥 How to use

```js
import calculateFutureValue from "future-value-calculator";

// Example usage
const presentValue = 1000;
const interestRate = 5;
const periods = 10;

const futureValue = calculateFutureValue(presentValue, interestRate, periods);
console.log("Future Value:", futureValue);
```

## API

calculateFutureValue(presentValue, interestRate, periods)

Calculates the future value of an investment.

- presentValue (number): The initial investment amount.
- interestRate (number): The annual interest rate in percentage.
- periods (number): The number of compounding periods.

Returns the calculated future value rounded up to the nearest whole number.

## License

This project is licensed under the MIT License

## Contributing

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them.
- Push to your fork and submit a pull request.

## Acknowledgments

- This package is a simple financial utility tool.
- Inspired by the need for a quick and reliable future value calculator.

Feel free to use and contribute to this project. Happy calculating!
