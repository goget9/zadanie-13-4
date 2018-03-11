var os = require('os');
var time = require('../modules/time.js');

function getOSinfo() {
	var type = os.type();
	switch(type) {
		case 'Darwin':
			type = 'OSX';
			break;
		case 'Windows_NT':
			type = 'Windows';
			break;
		case 'Linux':
			type = 'Linux';
			break;
		default:
			type = type;
			break;
	}
	
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = time.uptime;
	var userInfo = os.userInfo();
	
	console.log('System:', type);
	console.log('Release:', release);
	console.log('CPU:', cpu);
	console.log('Uptime:', uptime);
	console.log('User Name:', userInfo.name);
	console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;


