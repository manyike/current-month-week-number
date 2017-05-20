# current-month-week-number 

Simple function to get the current month's week number for a given day in that month.

## Motivation

The main reason I created this package was as a result of wanting to do something that I thought was easy but after spending hours without getting it right and a lot of suggested solutions on stack overflow not achieving what I wanted. 
I vowed that once I get it working I'll publish the solution for someone to use it if they ever have similar requirement that I had. So this is me fulfilling my vow :); I hope someone will find this useful.


## Installation

```sh
npm install current-month-week-number --save
```
## Usage

```sh
var weekNumber = require('current-month-week-number');
var weekNumberIs = weekNumber.weekNumberOfCurrentMonth(11);
```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [moment](https://github.com/moment/moment): Parse, validate, manipulate, and display dates

## Dev Dependencies


None

## License

[MIT](http://vjpr.mit-license.org)
