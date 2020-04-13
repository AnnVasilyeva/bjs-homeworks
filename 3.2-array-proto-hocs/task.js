function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(500); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}


function compareArrays( arr1, arr2 ) {
  if (arr1.length === arr2.length) {
    let check = arr1.every(function (element, index) {
      return element === arr2[index];
    });

    return check;
  }
}

compareArrays([8, 9], [6]); // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]); // true

function memorize(fn, limit) {
  let memory = []; //создаю пустой массив для хранения истории вызовов функции ниже
  
  //создаю функцию с аргументами из fn
  return function (...args) {
    //нахожу в memory элемент(объект) у которого ключ args совпадает с args(аргументами) из функции fn
    let found = memory.find(element => compareArrays(element.args, args));

//Добавить запись о вызове fn в memory.
    if (found) {
      console.log('from memory');
      return found.result;
    }
//Вычислить результат fn с переданными аргументами.
    let result = fn(...args);

//Вернуть результат fn с переданными аргументами.
    memory.push({
      args: args,
      result: result
    });
//При количестве элементов memory более limit удалить лишнее.
    if (memory.length > limit) {
      memory.shift();
    }
    //функция возвращает результат найденного объекта
    return result;
  }
}

const mSum = memorize(sum, 5);

console.log(mSum(6,5));
console.log(mSum(2,5));

const testArray = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];



function testCase(testFunction, timer) {
  console.time(timer);
   testArray.forEach(function(arr){
    for (let i = 0; i < 10; i++) {
        testFunction(...arr);
    }
  });
    console.timeEnd(timer);
}

let timer;

testCase(mSum, timer);


testCase(sum, timer);
//Вывод: обычная функция выполнялась 25104.056ms в то время как улучшенная функция (с сохранением памяти) выполнялась всего 2509.748ms.
//Если убрать задержку из обычной функции, то она выполняется быстрее (0.121ms) чем функция с памятью (0.804ms)
//Следовательно, если функция простая и не требует много времени на выполнение, то ее изменение с сохранением памяти не имеет смысла, так как на само сохранение уходит больше времени чем на обычную функцию.
