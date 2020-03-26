'use strict';
function getResult(a, b, c){
    let x = [];
    let d = b ** 2 - 4 * a * c;
    if (d < 0) {
	    return x;
    } else if (d === 0) {
	    x[0] = (-b + Math.sqrt(d)) / (2 * a);
    } else {
	    x[0] = (-b + Math.sqrt(d)) / (2 * a);
	    x[1] = (-b - Math.sqrt(d)) / (2 * a);
    }
    
    return x;
}
function getAverageMark(marks){
  let averageMark = 0;
  let i = 0;
  let total = 0;

  if (marks.length == 0) {
    return 0; 
  } 

  let marks2 = marks.slice(0, 4);
  while (i < marks2.length) {
    total = total + marks2[i];
    i++;
  }
  averageMark = total / marks2.length;
    
  return averageMark;
}

function askDrink(name,dateOfBirthday){
	let year = new Date().getFullYear();
	let differenceYears = year - dateOfBirthday.getFullYear();
	if (differenceYears < 18) {
		return ('Сожалею, ' + name + ' , но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!')
	} 
	return ('Не желаете ли олд-фэшн, ' + name + '?')
}