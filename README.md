# current-month-week-number 

Simple function to get the current month's week number for a given day in that month.

## Motivation

The main reason I created this package was as a result of wanting to do something that I thought was easy but after spending hours without getting it right and a lot of suggested solutions on stack overflow not achieving what I wanted. 
I vowed that once I get it working I'll publish the solution for someone to use it if they ever have similar requirement that I had. So this is me fulfilling my vow :); I hope someone will find this useful. Thanks to [Cornelous](https://github.com/cornelous) and [Tinashe](https://github.com/cylon85) for their valuable input.

[![Build Status](https://travis-ci.org/manyike/current-month-week-number.svg?branch=master)](https://travis-ci.org/manyike/current-month-week-number) | [![Test Coverage](https://codeclimate.com/github/manyike/current-month-week-number/badges/coverage.svg)](https://codeclimate.com/github/manyike/current-month-week-number/coverage)

## Installation

```sh
npm install current-month-week-number --save
```
## Usage

```sh
var weekNumber = require('current-month-week-number');
var weekNumberIs = weekNumber.weekNumberOfCurrentMonth(11); // 11th of the current month
var weekNumberForGivenDate = weekNumber.weekNumberForGivenDate('2017', '1', '17');// i.e January 17th 2017
Note: month must be between 1-12 and date between 1-31 and year must be full year including century like 2010 or 1999
```

## Tests

```sh
npm install
npm test
npm run coverage
```

## Dependencies

- [moment](https://github.com/moment/moment): Parse, validate, manipulate, and display dates

## Dev Dependencies
- [jest](http://facebook.github.io/jest/) Delightful JavaScript Testing

None

## License

[MIT](http://vjpr.mit-license.org)
