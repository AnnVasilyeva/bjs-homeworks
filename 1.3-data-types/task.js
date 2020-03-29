'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    let p = Number(percent);
    let c = Number(contribution);
    let a = Number(amount);
    if (isNaN(p)) {
	    return `Параметр процентная ставка содержит неправильное значение ${percent}`;
    }
    if (isNaN(c)) {
	   return `Параметр сумму первоначального взноса содержит неправильное значение ${contribution}`; 
    }
    if (isNaN(a)) {
	    return `Параметр сумма кредита содержит неправильное значение ${amount}`; 
    }
    
    let s = a - c;
	let today = new Date();
	let n = (date.getFullYear() - today.getFullYear()) * 12 + (date.getMonth()) - (today.getMonth());
	p = p / 12 / 100;
	let payment = s * (p + p / ((Math.pow(1 + p, n)-1)));
	
	let totalMortgage = (payment * n);
	
    return Number(totalMortgage.toFixed(2));
    
}

function getGreeting(name) {
	if (typeof name === 'undefined' || name === null || name === "") {
		return `Привет, мир! Меня зовут Аноним`;
	}
   let greeting = `Привет, мир! Меня зовут ${name}`;
   return greeting;
}