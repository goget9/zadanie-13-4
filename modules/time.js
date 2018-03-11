var os = require('os');
var time = os.uptime();

	var dayCount = Math.floor(time / 86400);
	var hoursCount = Math.floor((time - dayCount * 86400) / 3600);
	var minutesCount = Math.floor((time - (dayCount * 86400) - (hoursCount * 3600)) / 60);
	var secondsCount = 	time - (dayCount * 86400) - (hoursCount * 3600) - (minutesCount * 60);

	if(dayCount === 1) {
		var days = dayCount + ' day';
	} else {
		var days = dayCount + ' days';
	};

	if(hoursCount === 1) {
		var hours = hoursCount + ' hour';
	} else {
		var hours = hoursCount + ' hours';
	};

	if(minutesCount === 1) {
		var minutes = minutesCount + ' minute';
	} else {
		var minutes = minutesCount + ' minutes';
	};

	if(secondsCount === 1) {
		var seconds = secondsCount + ' second';
	} else {
		var seconds = secondsCount + ' seconds';
	};
	

	var uptime = days + ', ' + hours + ', ' + minutes + ', ' + seconds;

exports.uptime = uptime

//module.exports {
//	uptime: hhMMss
//};


