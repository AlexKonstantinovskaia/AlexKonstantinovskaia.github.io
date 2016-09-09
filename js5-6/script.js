

var start = document.getElementById('start'),
	reset = document.getElementById('reset'),
	milisecond = document.getElementById('dms'),
	seconds = document.getElementById('ds'),
	minutes = document.getElementById('dm'),
	hours = document.getElementById('dh'),
	time = 0,
	timer,
	run = false;
	

start.addEventListener("click" , function() {
	
	if (run === false) {
		begin();
		run = true;
		start.textContent = 'Pause';
	} else {
		clearInterval(timer);
		run = false;
		start.textContent = 'Start';
	}
});

reset.addEventListener("click" , function() {
	end();
});

function begin() {
	timer = setInterval( render , 10);
}

function render() {
  	time += 10;
	
	var ms = time % 1000;
	var s = (time - ms) / 1000 % 60;
	var m = ((time - ms) / 1000 - s) / 60 % 60;
	var h = (((time - ms) / 1000 - s) / 60 - m) / 60;

	milisecond.textContent = format(ms/10, 2);
	seconds.textContent = format(s, 2);
	minutes.textContent = format(m, 2);
	hours.textContent = format(h, 2);
}

function format(num, len) {
	return ('0000' + num).substr(-2, len);
}

function end() {
	clearInterval(timer);
	run = false;
	time = 0;
	start.textContent = 'Start';
	milisecond.textContent = "00";
	seconds.textContent = "00";
	minutes.textContent = "00";
	hours.textContent = "00";
}