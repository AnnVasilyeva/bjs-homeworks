// task_1

function getSolutions( a, b, c ) {
	let discriminant = Math.pow(b, 2) - 4 * a * c;
  let x1, x2;
	if (discriminant < 0) {
		return { D: discriminant, roots: []};
	} else if (discriminant === 0) {
		x1 = -b / (2 * a);
		return { D: discriminant, roots: [x1]};
	} else if (discriminant > 0) {
		x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return { D: discriminant, roots: [x1, x2]};

	}
}

function showSolutionsMessage( a, b, c ) {
	let result = getSolutions( a, b, c );
	console.log('Вычисляем корни квадратного уравнения ' + a + 'x²' +  '+' + b + 'x' + '+' + c);
	console.log('Значение дискриминанта: ' + result.D);
	if (result.D < 0) {
		console.log('Уравнение не имеет вещественных корней');
	} else if (result.D === 0) {
		console.log('Уравнение имеет один корень X₁ = ' + result.roots[0]);
	} else if (result.D > 0) {
		console.log('Уравнение имеет два корня. X₁ = ' + result.roots[0] + ', ' + 'X₂ = ' + result.roots[1]);
	}
}  

// task_2

function getAverageScore(data) {
  let averageScore = {};
  for (let prop in data) {
    averageScore[prop] = getAverageMark(data[prop]);
    
  }
  averageScore.average = getAverageMark(objectValues(averageScore));
  return averageScore;
}

//вычисляет среднее значение массива

function getAverageMark(marks) {
  let sumMarks = 0;
  for (let i = 0; i < marks.length; i++) {
    sumMarks += marks[i] / marks.length;
  }
  return sumMarks;
}

function objectValues(obj) {
  let values = [];
  for (let elem in obj) {
    values.push(obj[elem]);
  }

  return values;
}

//task_3

function getPersonData(secretData) {
  let secretDataCoding = {};
  secretDataCoding.firstName = getDecodedValue(secretData.aaa);
  secretDataCoding.lastName = getDecodedValue(secretData.bbb);
  
  return secretDataCoding;
}


function getDecodedValue(secret) {
  if (secret === 0) {
    return 'Родриго';
  } else {
    return 'Эмильо';
  }
}