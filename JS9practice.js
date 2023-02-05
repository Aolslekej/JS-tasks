/*Задание 1

Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиш */

let input = document.querySelector('input');

input.addEventListener('keyup', () => {
    let ul = document.querySelector('ul');

    let li = document.createElement('li');

    li.innerText = input.value;

    ul.appendChild(li);
})

/*Задание 2

Вставить в html тег input (просто предусмотреть в разметке).

Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value*/

let string = document.querySelector('.string');

string.addEventListener('keyup', () => {
    console.log(string.value)
});

/*Задание 3

Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value). */

let form = document.querySelector('form');


form.addEventListener('submit', (event) => {

    event.preventDefault();

    let input = form.querySelector('.hide');

    let ul = document.querySelector('.second');

    let li = document.createElement('li');

    li.innerText = input.value;

    ul.appendChild(li);

    input.value = '';

});

/*Задание 4

Калькулятор. 

Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.



1) решить с помощью if

2) решить с помощью evel (https://developer.mozilla.org/...) */

let calc = document.querySelector('.calc');

let input1 = calc.querySelector('.text');

let input2 = calc.querySelector('.txt');

let select = calc.querySelector('select');

let div = document.querySelector('div');

calc.addEventListener('submit', (event) => {

    event.preventDefault();

    let result = '';

    if(select.value == '+'){
        result = Number(input1.value) + Number(input2.value);
    }else  if(select.value == '-'){
        result = Number(input1.value) - Number(input2.value);
    }else  if(select.value == '/'){
        result = Number(input1.value) / Number(input2.value);
    }else  if(select.value == '*'){
        result = Number(input1.value) * Number(input2.value);
    }else  if(select.value == '**'){
        result = Number(input1.value) ** Number(input2.value); 
    }   
    div.innerText = result;
    console.log(eval(`${Number(input1.value)} ${select.value} ${Number(input2.value)}`))
});

/*Задание 5

Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке. */

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomRGB() {
    let r = getRandomInteger(0, 255);
    let g = getRandomInteger(0, 255);
    let b = getRandomInteger(0, 255);
    return `rgb(${r},${g}, ${b})`;
}

function getRandomDegree(){
    let degree = getRandomInteger(-180, 180);
    return degree;
}

let button = document.querySelector('.random');

let button1 = document.createElement('button');

button1 = button;

button1.addEventListener('mouseenter', () =>{
    button1.style.backgroundColor = getRandomRGB();
})


button1.addEventListener('mouseleave', () =>{
   button1.style.transform = `rotate(${getRandomDegree()}deg)`;
   button1.style.transition = '0.2s'
})




