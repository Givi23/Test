

// // let fruits = ["яблоко", "апельсин", "груша"];
// // alert (fruits);
// // console.log (fruits);

// // доступ к локальным переменным 
// // function showMessage(){
// // let message = "Доброе утро Гиви"
// // alert(message)
// // }
// // showMessage();

// // function showMessage (){
// //     let message = "хорошего вам дня Гиви"
// //     alert(message)
// // }
// // showMessage ();
// // доступ к  глобальным переменным 
// // let userName = 'Гиви';
// // function showMessage() {
// //     let message = 'Привет,' + userName;
// //     alert(message)
// // }
// // showMessage();
// // функция имеет полный внешний доступ: изменение значения (Гиви на Макс)
// // let userName = 'Гиви';
// // function showMessage (){
// //     userName = 'Макс'
// // let message = 'Привет,' + userName;
// // alert(message);
// // }
// // alert(userName);
// // showMessage();
// // alert(userName);

// // let cityName = 'Москва';
// // function showMessage (){
// //     cityName = 'Cанкт-Петербург'
// // let message = 'Переезд в,' + cityName;
// // alert(message);
// // }
// // showMessage();

// // Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю
// // let cityName = 'Москва';
// // function showMessage (){
// // let cityName = 'Cанкт-Петербург'
// // let message = 'Переезд в,' + cityName;
// // alert(message);
// // }
// // showMessage();

// // функция с использованием параметров
// // function showMessage(from,text){
// //     alert(from + ': '+ text);
// // }
// // showMessage('Аня', 'Привет!');
// // showMessage('Аня', 'Как дела?');

// // возрат значения
// // function sum (a,b){
// //     return a + b;
// // }
// // let result = sum(7,7);
// // alert(result);
// // function minus (c,d){
// //     return c - d;
// // }
// // let result = minus(c,d);
// // alert(result);

// // функция с использованием параметров
// // function checkAge(age){
// //     if(age >= 18){
// //         return true;
// //     } else {
// //         return confirm('А родители разрешили?');
// //     }
// // }
// // условное ветвление: if, else, if else
// // let age = prompt('Cколько вам лет?', 18);
// // if (checkAge (age)){
// //     alert('Доступ получен');
// // } else {
// //     alert('Доступ закрыт');
// // }

// // let year = prompt('Cколько вам лет?');
// // if (year< 29 ){
// //     alert('неверно');
// // }
// // else if (year > 29){
// //     alert('это тоже неверно');
// // }
// // else{
// //     alert('верно!');
// // }

// let accessAllowed;
// let age = prompt('Cколько вам лет?', '')

// if (age > 18){
//     accessAllowed = true; 
// }
// else{
//     accessAllowed = false; 
// }
// alert(accessAllowed);

// // преобразование типов (строчные, числовые, логические)
// // строчные (string)
// let value = true
// alert (typeof value) // boolean
// value = String(value); // теперь value это строка
// alert (typeof value) // string
// // числовые
// let str = '123';
// alert (typeof str); // cтрочный
// let num = Number(str); // теперь str это числовой
// alert (typeof num);

// 04.08.23
// Тема "dragAndDrop"
// const dragAndDrop = () => {
//     const card = document.querySelector('js_main');
//     const cell = document.querySelectorAll('js-cell');
//     const dragStart = function () {
//         console.log('dragstart');

//     };
//     card.addEventListener('dragstart', dragStart);
// }
// dragAndDrop ()
// 06.08.23
// тема методы setTimeout и setInterval (планирования вызова)
// function showMessage(text, name){
//     console.log(showMessage);
// }
// // один раз в определенный интервал времени setTimeout (метод) имя функция или код, задержка (delay), параметр,....параметр (arg1 ......arg2)
// setTimeout(showMessage, 3000, 'Привет', 'Вася');
// // регулярно вызов в определенный интервал времени setInterval (метод) имя функция или код, задержка (delay), параметр,....параметр (arg1 ......arg2)
// setInterval(showMessage, 500, 'Привет', 'Вася');

// метод clearTimeout: останавливает работу setTimeout и setInterval

// пример с setTimeout (clearTimeout)
// function showMessage(num){
//     console.log(num);
//     // cинтаксис для отмены
//     let timerId = setTimeout(showMessage, 1000, ++num);
//     if(num == 6) {
//     // cинтаксис для отмены
//         clearTimeout(timerId);
//     }
// }
// setTimeout(showMessage, 1000, 1);

// // пример cинтаксис для отмены cперва планируем вызов setTimeout, а затем передумываем и отменяем
// let timeId = setTimeout(()=> alert("ничего не происходит"), 1000);
// alert(timeId);
// clearTimeout(timeId);
// alert(timeId);

// // пример с setInterval (clearTimeout)
// function showMessage(num){
//     console.log(num);
//     let timerId = setInterval(showMessage, 1000, ++num) 
//      if(num == 6) {
//         clearTimeout(timerId);
//      }  
// }
// setTimeout(showMessage, 1000, 1);

// пример cинтаксис для отмены cперва планируем вызов setInterval, а затем передумываем и отменяем
// повторять с интервалом каждые 2 секунды
// let timeId = setInterval(()=> alert("ничего не происходит"), 2000);
// // остановить вывод через 5 секунд
// setTimeout(() => {clearInterval(timerId); alert('stop'); }, 5000)

// // пример (условие)
// function showMessage(num){
//     console.log(num);
//     if(num < 5) {
//     setTimeout(showMessage, 1000, ++num);
//     }
// }
// setTimeout(showMessage, 1000, 1);

// планирование вызова setTimeout без параметров
// const printHello = () =>{
//     console.log('Привет');
// }
// // вызов функции через 5 секунд пример без параметров
// setTimeout(printHello, 5000)
// // // планирование вызова setTimeout с параметроми
// const printHello = (text) =>{
//     console.log('text');
// }
//     // вызов функции через 5 секунд пример c параметром ставиться в конце
//     setTimeout(printHello, 5000, 'Наш текст');


// Тема отмена действия браузера
// почему меню сперва? что такое onclick, event.target.nodeName что это такое что это такое!= 'А'
// menu.onclick = function(event) {
//     if (event.target.nodeName != 'А') return;
//     let href = event.target.getAttribute('href');
//     alert(href);
//     // отменить действие браузера (переход по ссылке)
//     return false;
// };

//  д/з на 13.08.23
// // переписать функции в виде стрелочной
// 1 создать переменную 2 открыть скобки внутри прописать два аргумента 3 вычесляем вырожение (expession)
// let sum = (a, b) => {a + b 
//     console.log(sum);
// } 


// let satHi = (name) => {
//     let name =promt("введите текст");
//     alert("Привет" + name);
// }
// // переписать cтрелочные функции в обычные
// function minus(a, b){
//     return a - b;
// }
// let result = minus(2,1);
// alert(result);

// function sum(a, b){
//     return a + b;
// }
// const outcome = sum(4,3);
// alert(outcome);


// тема планирование setTimeout и setInterval задачи
// задача №1 
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// function printNumbers(from, to){
//     let current1 = from; // создать переменную для сохранения счетчика (from) 
//     let interval = setInterval( function(){ //создаем новую функцию и новый параметр 
//         alert(current1);
//         current1++ // увеличиваем на один счетчик 
//         if(current1 == to){ // условие если счетчик равен от 1 до 10
//             clearInterval(interval); // отчищаем интервал за 10 больше не пойдет 
//         }
//     }, 1000) // создать переменую и вызываем функцию со значением (current) и время 
// }
// printNumbers(1,10)

// function printNumbers(from, to){ 
//     let timeInterval = from;
//     setTimeout(()=> alert('timeInterval'),1000);
// }

// д/з на 15.08.23
// практика
// function printNumbers(from, to){ // функция с названием дана и параметры
//     let current = from; // cоздали переменную для cохранения счетчика
//     let timeInterval = setInterval(()=> { // cоздали переменную внуьри нее используем метод setInterval (стрелочноя функция, вывести счетчик from, итерация на еденицу, условие прописываем если счетчик равен tо )
//         alert(current);// выводим окно с текстом счетчика 
//         current++// итерация
//         if(current == to){;// условие прописываем если счетчик равен tо 
//         clearInterval(timeInterval); // отчищаем интервал 
//     }
// }, 1000) // время задержки
// }
// printNumbers(1,10)// вызов функции с параметрами

// №1 Напишите функцию printDivision2(from, to), которая выводит остаток от деления на два каждую секунду, начиная от from и заканчивая to. 
// function printDivision2 (from, to){ // функция с названием дана и параметры
//     let current2 = from; // cоздали переменную для cохранения счетчика
//     let interval2 = setInterval(()=>{ // cоздали переменную внуьри нее используем метод setInterval (стрелочноя функция, вывести счетчик from, итерация на еденицу, условие прописываем если счетчик равен tо )
//         alert(current2 % 2); // выводим окно с текстом счетчика 
//         current2++ // итерация
//         if(current2 ==  to){
//         clearInterval(interval2); // отчищаем интервал 
//     }
// }, 1000) // время задержки
// }
// printDivision2(1,10) // вызов функции с параметрами

// №2 Напишите функцию printDivision3(from, to), которая выводит остаток от деления на три каждые две секунды, начиная от from и заканчивая to.
// function printDivision3 (from, to){
//     let current3 = from;
//     let interval3 = setInterval(()=>{
//         alert(current3 % 3);
//         current3++
//         if(current3 == to){
//         clearInterval(interval3);
//         }
//     },2000)
// }
// printDivision3 (3,12)

//  №3 Напишите функцию printnEvenNumbers(from, to), которая выводит четные числа  каждые две секунды, начиная от from и заканчивая to.
// function printnEvenNumbers (from, to){
//     let current4 = from;
//     let interval4 = setInterval(()=> {
//         if(current4 % 2 == 0){
//             alert(current4)
//         }

//         if(current4 == to){
//             clearInterval(interval4);
//         }
//             current4++

//     },1000)
// }
//     printnEvenNumbers(2,10)

// function printnEvenNumbers(from, to) {
//     let current4 = from;
//     let interval4 = setInterval(() => {
//         if (current4 % 2 == 1) {
//             alert(current4)
//         }

//         if (current4 == to) {
//             clearInterval(interval4);
//         }
//         current4++

//     }, 1000)
// }
// printnEvenNumbers(2, 10)

// д/з на 17.08.23
// №1 Найдите остаток от деления в следующих примерах. Используйте console.log():

// console.log(10 % 2 == 0);  




// console.log(230 % 7 == 6); 




// console.log(235 % 9 == 2)




// console.log(34 % 4 == 2)



// console.log(126 % 3 == 0)

// console.log("пример  - 10%2 = ", 10%2  )

// №2 Запросите у пользователя целое число и выведите ответ, четное число или нет. В задании используйте модальное окно prompt для получения данных от пользователя, условную конструкцию if..else и оператор %.
    // let i = Number(prompt('введите число'));
    // // если переменная раделилась на 2 без остатка, то оно четное 
    // if(i % 2 == 0){
    //  alert('число четное')
    // }
    // else{
    //     alert('число не четное')
    // }
    // №3 Запросите у пользователя два числа(используйте два модальных окна prompt) и выведите в ответ остаток от деления одного числа на другое. 
    // let j = Number(prompt('введите число'))
    // let i = Number(prompt('введите число'))
    // alert(j % i);
    // №4. Запросите у пользователя число и проверьте что оно делится на 3. 
    // let i = Number(prompt('введите число'));
    // if(i % 3 == 0){
    //     alert('делеться на 3');
    // }
    // else{
    //     alert('не делеться на 3');
    // }
    // let i = 'привет';
    // let h = 2;
    // let d = true;
    
// практика на 17.08.23 тема "Условное ветвление if"
// №2 
// let i = prompt('Какое офицальное название JavaScript');
// if(i == 'ECMAScript'){
//     alert('верно!')
// }
// else{
//     alert('Не знаете? ECMAScript')
// }
// №3
// let value = prompt('введите число', 0);
// if(value > 0){
//     alert(1);
// }
// else if (value < 0){
//     alert(-1);
// }
// else{
//     alert(0);
// }
// №4 Перепишите конструкцию if с использованием условного оператора '?':
// result = (a + b < 4) ? 'Мало' : 'Много';

// д/з на 19.08.23
// №1. Найдите остаток от деления в следующих примерах. Используйте console.log():
// console.log(11%4);
// console.log(1000%11);
// console.log(1230%30);
// console.log(26%22);
// console.log(84%5); // остаток почему 4?

// №2. Запросите у пользователя целое число и выведите ответ, делится введенное число на 4 или нет. В задании используйте модальное окно prompt для получения данных от пользователя, условную конструкцию if..else и оператор %. Для вывода используйте alert. 
// let value  = Number(prompt('введите число')); // создаем переменную, создаем модальное окно для ввода текста, преобразововаем строчный тип в числовой тип
//     if(value % 4 == 0){ // пишим проверку условие если введенное целое число делиться на 4 то остаток от деления не будет 
//         alert('делиться на 4'); // выводим вывод делиться ли число на 4 ?
//     }
//     else{ // пишим проверку условие иначе введенное целое число делиться на 4 не будет
//         alert('не делиться на 4'); // выводим вывод не делиться число на 4 
// }

// №3. Запросите у пользователя целое число и выведите ответ, делится введенное число на 5 или нет. В задании используйте модальное окно prompt для получения данных от пользователя, условную конструкцию if..else и оператор %. 
// let value = Number(prompt('введите число'));
// if(value % 5 == 0){
//     alert('данное число делиться на 5')
// }
// else{
//     alert('данное число делиться на 5 не будет')
// }

// №4. Запросите у пользователя целое число и выведите ответ, делится введенное число на 5 или нет. В задании используйте модальное окно prompt для получения данных от пользователя, условную конструкцию if..else и оператор %. 
// let value = Number(prompt('введите число'));
// if(value % 6 == 0){
//     alert('число на 6 делиться')
// }
// else{
//     alert('число на 6 не делиться')
// }

// №5. Запросите у пользователя два числа(используйте два модальных окна prompt). Введенные числа сложите и сохраните в переменную result. Далее проверьте result на четность. Если число четное, то выведите сообщение "четное". Если число нечетное, то вывести сообщение "нечетное". 
// Для вывода используйте alert. 
// Пример: пользовать ввел число 4 и число 2, тогда выведется "четное" (т.к 2+4 = 6, а 6 - число четное). 
// let i = Number(prompt('введите число', 8));
// let j = Number(prompt('введите число', 4));
// let result = (i + j);
// if(result % 2 == 0){ // почему именно на 2 но 12 тоже четное же?
//     alert('числа четные');
// }
// else{
//     alert('числа не четные')
// }

//№6.Запросите у пользователя три числа. Два введенных числа сложите и сохраните в переменную result. Далее проверьте делится ли нацело result на третье число. Если число делится, то выведите сообщение "сумма чисел a и b кратна числу с".
//Если число не делится, то выведите сообщение "сумма чисел a и b не кратна числу с".
//Пример: пользовать ввел числа 2, 3, 4 тогда выведется "сумма чисел 2 и 3 не кратна числу 4" (т.к 2+3 = 5, а число 5 не делится на 4 нацело).let i = Number(prompt('введите число', 8));
let i = Number(prompt('введите число', 4));
let j = Number(prompt('введите число', 8));
let c = Number(prompt('введите число', 12));
let result = (i + j );
if(result % 12 == 0){ 
    alert('сумма чисел a и b кратна числу с');
}
else{
    alert('сумма чисел a и b не кратна числу с')
}