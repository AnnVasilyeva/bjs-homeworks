class Weapon {
	constructor (weapon) {
		this.name = weapon.name;
		this.attack = weapon.attack;
		this.durability = weapon.durability;
		this.range = weapon.range;
    this.durabilityOriginal;
	}

	takeDamage(damage) {
		this.durability -= damage;
    if (this.durability < 0) {
        this.durability = 0;
    }
	}

  getDamage() {
    if (this.durability === 0) {
      return 0;
    }
  if (this.durability >= this.durabilityOriginal * 0.3) {
   return this.attack;
  } else {
    return this.attack / 2;

  }
}

isBroken() {
  if (this.durability > 0) {
    return false;
  } else {
    return true;
  }
}
}

const sword = new Weapon({
  name: 'Старый меч',
  attack: 20,
  durability: 10,
  range: 1,
});

sword.takeDamage(5);
console.log(sword.durability); // 5

sword.takeDamage(50);
console.log(sword.durability); // 0

const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

arm.takeDamage(20);
console.log(arm.durability); // Infinity

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

bow.takeDamage(20);
console.log(bow.durability); // 180

bow.takeDamage(200);
console.log(bow.durability); // 0

class Bow extends Weapon {
  constructor () {
    super();
    this.name = 'Лук';
    this.attack = 10;
    this.durability = 200;
    this.range = 3;
  }
}

class Knife extends Weapon {
  constructor () {
    super();
    this.name = 'Нож';
    this.attack = 5;
    this.durability = 300;
    this.range = 1;
  }
}

class Sword extends Weapon {
   constructor () {
    super();
    this.name = 'Старый меч';
    this.attack = 20;
    this.durability = 10;
    this.range = 1;
  }
}

class Arm extends Weapon {
  constructor () {
    super();
    this.name = 'Рука';
    this.attack = 1;
    this.durability = Infinity;
    this.range = 1;
  }
}

class Staff extends Weapon {
  constructor () {
    super();
    this.name = 'Посох';
    this.attack = 8;
    this.durability = 300;
    this.range = 2;
  }
}

class LongBow extends Bow {
  constructor () {
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
  }
};

class Axe extends Sword {
  constructor () {
    super();
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
  }
};

class StormStaff extends Staff {
  constructor () {
    super();
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
  }
};

const arm = new Arm();
const sword = new Sword();
const longBow = new LongBow();
const staff = new Staff();
const knife = new Knife();

const stormStaff = new StormStaff();

console.log(stormStaff.name);
stormStaff.takeDamage(10);
console.log(stormStaff.durability);
console.log(stormStaff.getDamage()); 
console.log(stormStaff.isBroken()); 

const bow = new Bow();

console.log(bow.name); 
bow.takeDamage(60);
console.log(bow.durability);
console.log(bow.getDamage()); 
console.log(bow.isBroken()); 


const ax = new Axe();

console.log(ax.name);
ax.takeDamage(260);
console.log(ax.durability);
console.log(ax.getDamage());
console.log(ax.isBroken());

//task_3

class StudentLog {
  constructor(name) {
    this.name = name;
    this.grades = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (typeof grade !== 'number' ||  grade === 0 || grade > 5) {
      console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
    }
    //проверяем, есть ли в this.grades атрибут subject
  if (!this.grades.hasOwnProperty([subject])) {
    this.grades[subject] = []; //если нет, то создаем его со значением пустого массива
  } 
 //добавляем в массив предмета оценку
  this.grades[subject].push(grade);
  //возращаем количество оценок в массиве
  return this.grades[subject].length;
  }

  getAverageBySubject(subject) {
    let averageBySubject = 0;
    if (!this.grades.hasOwnProperty([subject])) {
      return 0;
    }
    for (let i = 0; i < this.grades[subject].length; i++) {
      averageBySubject += this.grades[subject][i];
    }
    return averageBySubject / this.grades[subject].length;
  }

  getTotalAverage() {
    let totalAverage = 0;
    for (let subject in this.grades) {
      totalAverage += this.getAverageBySubject([subject]);
    }
    return totalAverage / Object.keys(this.grades).length;
  }
  
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName());

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0

console.log(log.getTotalAverage()); // 3,75
