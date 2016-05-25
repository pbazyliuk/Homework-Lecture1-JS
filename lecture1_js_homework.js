
/*1) Прототипне наслідування через функції контруктори*/

// Конструктор батківський
function Animal(name, age, sound, region) {
    this.name = name;
    this.age = age;
    this.sound = sound;
    this.region = region;
}

// Методи зберігаємо в прототип
Animal.prototype.say = function() {
    console.log("My name is " + this.name);
}

// Конструктор нащадок
function AnimalInherit(name, age, sound, region) {
    Animal.call(this, name, age, sound, region);
}

// Здійснюємо наслідування
Object.setPrototypeOf(AnimalInherit.prototype, Animal.prototype);

// Методи нащадка
AnimalInherit.prototype.getAway = function() {
    console.log("Dont stare at me, unless I can bite you!!! " + this.sound)
};

// Готово, створюємо обєкти
var dog = new AnimalInherit("Sharik", 9, "Wuff", "Ukraine");
var cat = new AnimalInherit("Borys", 6, "Meoff", "Russia");
var woodpecker = new AnimalInherit("Woody", "Pam-pam-param", "Usa");



/*2) Наслідування через конструкцію Object.create()*/

// Конструктор батківський
function Animal(name, age, sound, region) {
    this.name = name;
    this.age = age;
    this.sound = sound;
    this.region = region;
}

// Методи зберігаємо в прототип
Animal.prototype.say = function() {
    console.log("My name is " + this.name);
}

// Конструктор нащадок
function AnimalInherit(name, age, sound, region) {
    Animal.call(this, name, age, sound, region);
}

// Здійснюємо наслідування
AnimalInherit.prototype = Object.create(Animal.prototype);

// Методи нащадка
AnimalInherit.prototype.getAway = function() {
    console.log("Dont stare at me, unless I can bite you!!! " + this.sound)
};

// Створюємо обєкти
var dog = new AnimalInherit("Sharik", 9, "Wuff", "Ukraine");
var cat = new AnimalInherit("Borys", 6, "Meoff", "Russia");
var woodpecker = new AnimalInherit("Woody", "Pam-pam-param", "Usa");




/*3) Викликати метод say() на кожному обєкті*/

// Перевіряємо наявність методу say() в створених обєктах
dog.say();
cat.say();
woodpecker.say();




/*4) Реалізувати функцію getType(), яка приймає один з обєктів Dog, 
Cat, Woodpecker і повертає його тип.*/

// Функція повертає імя конструктора, яким створений обєкт
function getType(inst) {
    (inst.getAway !== undefined) ? console.log('AnimalInherit'): console.log('Something else...');
}

getType(dog);
getType(cat);
getType(woodpecker);


/*5) Модифікувати функцію так, щоб вона не приниймала обєкт, а оперувала з обєктом this*/

// Функція оперує з обєктом this і викликається на обєкті за доп. метода call
function getTypeMod() {
    (this.getAway !== undefined) ? console.log('AnimalInherit'): console.log('Animal');
}

getTypeMod.call(dog);
getTypeMod.call(cat);
getTypeMod.call(woodpecker);
