

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
		start.textContent = 'Pause';
		run = true;	
	} else {
		clearInterval(timer);
		start.textContent = 'Start';
		run = false;
	}
});



function begin() {
	timer = setInterval( render , 100);
}
function render() {
	  	time += 10;

	var ms = Math.floor(time % 1000) / 10; 
 	if(ms<10) {
		milisecond.textContent = "0" + ms;
 	}
 	else {
 		milisecond.textContent = ms;
 	}

 	var s = Math.floor(time / 100 % 60);
 	// var s = (time % 6000) / 1000;
 	if(s<10) {
 		seconds.textContent = "0" + s;
 	}
 	else {
 		seconds.textContent = s;
 	}

 	var m = Math.floor(time / 100 / 60);
 	
 	if(m<10) {
 		minutes.textContent = "0" + m;
 	}
 	else {
 		minutes.textContent = m;
 	}

 	var h = Math.floor (time / 100 / 60 / 60);
 	if(h<10) {
 		hours.textContent = "0" + h;
 	}
 	else {
 		hours.textContent = h;
 	}
console.log(time);
}


reset.addEventListener("click" , end);
function end() {
	clearInterval(timer);
	start.textContent = 'Start';
	run = false;
	time = 0;
	milisecond.textContent = "00";
	seconds.textContent = "00";
	minutes.textContent = "00";
	hours.textContent = "00";

}

