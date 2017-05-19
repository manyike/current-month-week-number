
"use strict";
const moment = require('moment');
/*
 * DateOfTheCurrentMonth is a number e.g 13 for 13th of the current month
 * Get the weekNumber for the current month
 */
exports.weekNumberOfCurrentMonth = function (dateOfTheCurrentMonth) {
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
};

