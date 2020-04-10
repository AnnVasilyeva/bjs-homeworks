const divideError = new Error('Невалидное значение');
const triangleErr = new Error('Треугольник с такими сторонами не существует');

function parseCount(quantity) {
  const parsed =  Number.parseInt(quantity, 10)
	if (isNaN(parsed)) {
		throw divideError;
	}
	return parsed;
}


function validateCount(quantity) {
	try {
		return parseCount(quantity);
	} catch(err) {
		return divideError;
	} 

}

//task_2

class Triangle {
	constructor (first, second, third) {
		this.first = first;
		this.second = second;
		this.third = third;
		
		if (this.first + this.second < this.third || this.first + this.third < this.second || this.second + this.third < this.first) {
			
			throw triangleErr;	
		}
	}
	
	
	//возвращает периметр треугольника
	getPerimeter() {
		let perimeter = this.first + this.second + this.third;
		return perimeter;
		
	}
	
	//возвращает площадь треугольника
	getArea() { 
		let halfPerimeter = this.getPerimeter() / 2;
		let area = Math.sqrt(halfPerimeter * (halfPerimeter - this.first) * (halfPerimeter - this.second) * (halfPerimeter - this.third));
		return Number(area.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
	const triangle = new Triangle(a, b, c);
	return triangle;
	} catch(error) {
		let object = {};
		object.getPerimeter = object.getArea = () => 'Ошибка! Неправильный треугольник';
		return object;
	}
}

