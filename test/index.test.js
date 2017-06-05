
"use strict";
const index  = require('../index');
const moment = require('moment');

test('Expect the day 1 of the month to be on the first week', () => {
	expect(index.weekNumberOfCurrentMonth(moment().startOf('month').date())).toBe(1);
});

test('Expect the last day of the month to be at least on the fourth week', () => {
	expect(index.weekNumberOfCurrentMonth(moment().endOf('month').date())).toBeGreaterThanOrEqual(4);
});


test('Expect undefined if input is empty', () => {
	expect(index.weekNumberOfCurrentMonth()).toBeUndefined();
});


// This is an exciting example coz the first was on a friday that means this has 6 weeks, say what?? yes 6.
test('Expect 17th of May 2015 (2017-5-17) be on the 4th week(4)', () => {
	expect(index.weekNumberForGivenDate('2015', '5', '17')).toBe(4);
});


test('Expect error message if year has more than four digits', () => {
	expect(index.weekNumberForGivenDate('20100', '5', '17')).toBe('full year should be four digits e.g 2017');
});


test('Expect error message if month is greater than 12 or less than 1', () => {
	expect(index.weekNumberForGivenDate('2015', '18', '17')).toBe('Full month should be between 1 and 12');
});

test('Expect error message if day is in a wrong format', () => {
	expect(index.weekNumberForGivenDate('2015', '5', '02')).toBe('dateOfTheMonth should be between 1 and 31 i.e >=1 and <=31 and not 01 or 09');
});

test('Expect error message if day is greater than 31', () => {
	expect(index.weekNumberForGivenDate('2015', '5', '32')).toBe('dateOfTheMonth should be between 1 and 31 i.e >=1 and <=31');
});

test('Expect error message if date is month has a zero prefix', () => {
	expect(index.weekNumberForGivenDate('2015', '02', '31')).toBe('Month should be between 1 and 12 i.e >=1 and <=12 and not 01 or 09');
});

test('Expect error message if date is invalid eg 2015-02-30', () => {
	expect(index.weekNumberForGivenDate('2015', '2', '31')).toBe('supplied date is not valid');
});

test('Expect undefined if either year, month or date is missing', () => {
	expect(index.weekNumberForGivenDate()).toBeUndefined();
});
