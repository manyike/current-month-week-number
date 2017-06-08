
"use strict";
const moment = require('moment');
/*
 * DateOfTheCurrentMonth is a number e.g 13 for 13th of the current month
 * Get the weekNumber for the current month
 */
function weekNumberOfCurrentMonth(dateOfTheCurrentMonth) {
	if(!dateOfTheCurrentMonth) return undefined;

	let endOfMonth = moment().endOf('month');
	let beginningOfMonth = moment().startOf('month').day(); // numeric representation of weekday for the day the month begins
	let totalNumberOfDaysInAMonth = endOfMonth.date();
	let thisMonthTracker = {};
	let weekCounter = 1;

	for (let i = 1; i <= totalNumberOfDaysInAMonth; i++) {
		if(beginningOfMonth === 6) {
			thisMonthTracker[i] = weekCounter;
			weekCounter++;
			beginningOfMonth = 0;
		} else {
			thisMonthTracker[i] = weekCounter;
			beginningOfMonth++;
		}
	}

	return thisMonthTracker[dateOfTheCurrentMonth.toString()];
}

function weekNumberForGivenDate (fullYear, fullMonth, dateOfTheMonth) {

	if (!fullYear || !fullMonth || !dateOfTheMonth) {
		return undefined;
	}

	if (fullYear.length > 4) {
		return 'full year should be four digits e.g 2017'
	}

	if (parseInt(fullMonth, 10) > 12 || parseInt(fullMonth, 10) < 1) {
		return 'Full month should be between 1 and 12'
	}

	if (fullMonth.length > 1 && parseInt(fullMonth, 10) < 10) {
		return 'Month should be between 1 and 12 i.e >=1 and <=12 and not 01 or 09';
	}

	if (dateOfTheMonth.length > 1 && parseInt(dateOfTheMonth, 10) < 10) {
		return 'dateOfTheMonth should be between 1 and 31 i.e >=1 and <=31 and not 01 or 09';
	}

	if (parseInt(dateOfTheMonth, 10) > 31) {
		return 'dateOfTheMonth should be between 1 and 31 i.e >=1 and <=31';
	}

	let paddedDayOfTheMonth = parseInt(dateOfTheMonth, 10) > 9 ? dateOfTheMonth : '0' + dateOfTheMonth;
	let paddedMonth = parseInt(fullMonth, 10) > 9 ? fullMonth : '0' + fullMonth;

	if (!moment(`${fullYear}-${paddedMonth}-${paddedDayOfTheMonth}`).isValid()) {
		return 'supplied date is not valid';
	}
	let endOfMonth = moment(`${fullYear}-${paddedMonth}-${paddedDayOfTheMonth}`).endOf('month');
	let beginningOfMonth = moment(`${fullYear}-${paddedMonth}-${paddedDayOfTheMonth}`).startOf('month').day(); // numeric representation of weekday for the day the month begins
	let totalNumberOfDaysInAMonth = endOfMonth.date();
	let thisMonthTracker = {};
	let weekCounter = 1;

	for (let i = 1; i <= totalNumberOfDaysInAMonth; i++) {
		if (beginningOfMonth === 6) {
			thisMonthTracker[i] = weekCounter;
			weekCounter++;
			beginningOfMonth = 0;
		} else {
			thisMonthTracker[i] = weekCounter;
			beginningOfMonth++;
		}
	}
	return thisMonthTracker[dateOfTheMonth.toString()];
}

module.exports = {
	weekNumberOfCurrentMonth,
	weekNumberForGivenDate
};
