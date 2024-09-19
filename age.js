let input = document.querySelector("input");
let btn = document.querySelector("button");
let p = document.querySelector("P");

let date = new Date();
let y1 = date.getFullYear();
let m1 = date.getMonth() + 1;
let d1 = date.getDate();

console.log(d1, m1, y1);

function age () {
	let bDay = new Date(input.value);
	let y2 = bDay.getFullYear();
	let m2 = bDay.getMonth() + 1;
	let d2 = bDay.getDate();

	let inY;
	inY = y1 - y2;

	let inM;
	if(m1 > m2) {
		inM = m1 - m2;
	}else if(m1 <= m2) {
		inY--;
		m2++;
		inM = 12 + m1 - m2;
	}

	let inD;
	if(d1 > d2) {
		inD = d1 - d2;
	}else if(d1 <= d2) {
		inD = new Date(y1, m1, 0).getDate() + d1 - d2;
	}

	console.log(inY, inM, inD);

	p.innerText = `You are ${inY} years, ${inM} months and ${inD} days old`;
}

btn.addEventListener("click", age);


