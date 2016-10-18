
function human() {
	this.name = 'Pole';
	this.age = 20;
	this.sex = 'male';
	this.height = '170 sm';
	this.weight = '70 kg';
};

var newHuman = new human();

console.log('newHuman', newHuman);

function worker() {
	this.job = 'Company';
	this.salary = 100000;
	this.work = function () {
		alert('Work_hard');
	};
};

worker.prototype = newHuman;

var NewWorker = new worker();
console.log('NewWorker.name', NewWorker.name);

function student() {
	this.stady = '';
	this.grant = 200;
	this.watch = function () {
		alert('Watch_series');
	};
};

student.prototype = newHuman;

var NewStudent = new student();
console.log('NewStudent.weight', NewStudent.weight);