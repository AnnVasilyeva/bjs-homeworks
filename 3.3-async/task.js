class AlarmClock {
	constructor () {
		this.init()
	}
	
	//функция обнуления значений
	init() {
		this.alarmCollection = [];
		this.timerId = null;
	}
	
	//добавляет новый звонок в коллекцию существующих
	addClock(time, callback, id) {
		//если id не передали в параметры
		if (id === undefined) {
			return console.error('Невозможно идентифицировать будильник. Параметр id не передан.');
		}
		
		//проверяет есть ли в массиве звонки		
		if (this.alarmCollection.length > 0) {
			//если есть, проверяет есть ли звонки с таким же id
			if (this.alarmCollection.find(item => item.id === id)) {
				return console.error('Будильник с таким id уже существует.');
			}
		}		
		
		//добавляем звонок в массив						
		this.alarmCollection.push({id: id, time: time, callback: callback});
		return this.alarmCollection;
	}
	
	//удаляет определённый звонок
	removeClock(id) {
		//находим звонок с таким же id какой передали в параметрах
		let item = this.alarmCollection.find(item => item.id === id);
		//если такой есть
		if (item) {
			//находим его индекс
			let idx = this.alarmCollection.indexOf(item);
			//удаляем звонок
			this.alarmCollection.splice(idx, 1);
		}
		
	}
	
	//возвращает текущее время в строковом формате HH:MM
	getCurrentFormattedTime() { 
		let time = new Date();
		return time.getHours() + ':' + (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
		//если минуты до 10 (типа 8 минут) то должно быть 08 (добавляем 0 к минутам), иначе не добавляем ничего
	}
	
	//запускает все звонки
	start() {
		const checkClock = () => {
			this.alarmCollection.forEach(item => {
				//если время звонка совпадает с текущим временем, вызываем колбек
				if (item.time == this.getCurrentFormattedTime()) {
					item.callback();
					// и чистим id чтобы не повторялся
					this.removeClock(item.id);
				}
			});			
		}
		
		if (this.timerId === null) {
			this.timerId = setInterval(checkClock, 5000);	
		}
	}
	
	//останавливает все выполнение звонков
	stop() {
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null; //удаляет значение из свойства идентификатора текущего таймера
		}
	}
	
	//печатает все звонки
	printAlarms() {
		console.log('Печать всех будильников в количестве: ' + this.alarmCollection.length)
		this.alarmCollection.forEach((item) => {
			console.log('Будильник № ' + item.id + ' заведен на ' + item.time);
		});	
	}
	
	//удаляет все звонки
	clearAlarms() {
		this.stop();
		this.init();
	}
}


/*
	let phoneAlarm = new AlarmClock();
	phoneAlarm.addClock('21:00', () => console.log('Скоро спать'), 1);
	
	phoneAlarm.addClock('21:01', () => { console.log('Пора готовиться ко сну!'); phoneAlarm.removeClock(2)}, 2);
	
	phoneAlarm.addClock('21:01', () => console.log('Иди умываться'));
	
	phoneAlarm.addClock('21:02', () => { 
		console.log('Иди спать, завтра рано на работу');
		phoneAlarm.clearAlarms();
		phoneAlarm.printAlarms();
		}, 3);
	
	phoneAlarm.addClock('21:05', () => console.log('Иди спать, завтра рано на работу'), 1);
	phoneAlarm.addClock('21:23', () => console.log('Иди умываться'), 1);
	phoneAlarm.printAlarms();
	
	phoneAlarm.start();
*/

