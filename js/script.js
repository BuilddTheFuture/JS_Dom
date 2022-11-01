'use strict';

// let button = document.querySelector('#button');
// console.log(button) // записали ссылку на кнопку в переменную

// let elem_1 = document.querySelector('#elem1');
// let elem_2 = document.querySelector('#elem2');
// let elem_3 = document.querySelector('#elem3');
// console.log(elem_2)

// let elem = document.querySelector('#parent .elem');
// console.log(elem)

// let block_1 = document.querySelector('#block p:nth-child(2)')
// console.log(block_1) // получили ссылку на второй абзац div с id="block"

// let www_2 = document.querySelector('#block_www p.www:nth-child(2)')
// console.log(www_2)

// let button_1 = document.querySelector('#button1');
// let button_2 = document.querySelector('#button2');
// let button_3 = document.querySelector('#button3');

// let button = document.querySelector('#button');
// button.addEventListener('click', function() { // метод, который задает реакцию при действии на кнопку
//     alert('произошел клик') // по клику на кнопку вывели текст
// })

// let button_1 = document.querySelector('#button1');
// let button_2 = document.querySelector('#button2');
// let button_3 = document.querySelector('#button3');
// button_1.addEventListener('click', function() {
//     console.log('1'); // по клику вывели 1
// });
// button_2.addEventListener('click', function() {
//     console.log('2'); // ..2
// });
// button_3.addEventListener('click', function() {
//     console.log('3'); // ..3
// })

// let button_1 = document.querySelector('#button1');
// let button_2 = document.querySelector('#button2');
// let button_3 = document.querySelector('#button3');
// function func_1() {
//     console.log('1')
// }
// function func_2() {
//     console.log('2')
// }
// button_1.addEventListener('click', func_1) // 1
// button_2.addEventListener('click', func_2) // 2

// function func() {
//     alert ('есть click')
// }
// let elem1 = document.querySelector('#button1');
// elem1.addEventListener('click', func);

//Несколько обработчиков одного события
// let button = document.querySelector('#button');
// button.addEventListener('click', func1);
// button.addEventListener('click', func2);
// function func1() {
//     console.log('1')
// }
// function func2() {
//     console.log('2')
// }

// let button = document.querySelector('#button');
// button.addEventListener('dblclick', func);
// function func() {
//     alert('двойной клик')
// }

// let input = document.querySelector('.elem');
// input.addEventListener('mouseover', func1);
// function func1() {
//     console.log('наведение на поле ввода')
// }
// input.addEventListener('mouseout', func2);
// function func2() {
//     console.log('ушел с поля ввода')
// }

// let elem11 = document.querySelector('#elem11');
// console.log(elem11.textContent)
// elem11.textContent = 'chanched text'
// console.log(elem11.textContent)

// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// function func() {
//     console.log(elem.textContent)
// }
// button.addEventListener('click', func) // По клику на кнопку вывели текст абзаца в консоль

// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// function func() {
//     elem.textContent = 'new text';
//     console.log(elem.textContent)
// }
// button.addEventListener('click', func) // по клику меняется текст абзаца

// По нажатию на кнопку записал в текст дива сумму чисел
// let button = document.querySelector('#button');
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem_sum = document.querySelector('.elem_sum')
// button.addEventListener('click', function func(){
//     elem_sum.textContent = Number(elem1.textContent) + Number(elem2.textContent) + Number(elem3.textContent);
// })

// let button = document.querySelector('#button');
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem_sum = document.querySelector('.elem_sum')
// function func() {
//     if (Number(elem1.textContent) < 10) {
//         elem1.textContent = Number(elem1.textContent) + 1;
//     } else {
//         elem2.textContent = Number(elem2.textContent) + 1;
//     }
//     elem_sum.textContent = Number(elem1.textContent) + Number(elem2.textContent)
// }
// button.addEventListener('click', func)

// let button = document.querySelector('#button');
// let elem1 = document.querySelector('#elem1');
// button.addEventListener('click', function func(){
//     console.log(elem1.innerHTML) // при клике на кнопку выводит код внутри абзаца
// })

// let button = document.querySelector('#button');
// let elem1 = document.querySelector('#elem1 i');
// button.addEventListener('click', function func(){
//     elem1.innerHTML = '<b>1</b>'; 
//     console.log(elem1.innerHTML) // при клике на кнопку меняет шрифт на жирный
// })

// let button = document.querySelector('#button');
// let email = document.querySelector('#elem');
// button.addEventListener('click', function func() {
//     console.log(email.type) // вывели содержимое атрибута type
// })

// let button = document.querySelector('#button');
// let email = document.querySelector('#elem');
// button.addEventListener('click', function func() {
//     email.type = 'submit';
//     console.log(email.type) // по нажатию записали в атрибут type значение submit
// })

// let button = document.querySelector('#button');
// let elem = document.querySelector('.text');
// let link = document.querySelector('#link');
// button.addEventListener('click', function func() {
//     elem.textContent = link.innerHTML;
// })

// let button = document.querySelector('#button');
// let txt = document.querySelector('.text');
// let img = document.querySelector('#img');
// button.addEventListener('click', () => {
//     txt.innerHTML = img.src;
// })

// let button = document.querySelector('#button');
// let img = document.querySelector('#img');
// button.addEventListener('click', () => {
//     img.width = 300; // по клику на кнопку изменили width картинки
// })

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let img = document.querySelector('#img');
// button1.addEventListener('click', () => {
//     img.src = "./img/nft2.png";
//     img.width = 200;
// })
// button2.addEventListener('click', () => {
//     img.src = "./img/nft.png";
//     img.width = 200;
// })

// button1.addEventListener('click', () => {
//     // img.src = "D:\1_Igor_Lessons\Exercises\JS Dom\img\nft.png";
//     img.width = 200;
// })
// button2.addEventListener('click', () => {
//     img.src = 'D:\1_Igor_Lessons\Exercises\JS Dom\img\nft2.png';
// })

// let button = document.querySelector('#button')
// let input = document.querySelector('#elem')
// let txt = document.querySelector('.text')
// button.addEventListener('click', () => {
//     txt.innerHTML = input.value; // в абзац выводим измененное значение инпута
// })

// let button = document.querySelector('#button');
// let input = document.querySelector('#elem');
// let input2 = document.querySelector('#elem2');
// button.addEventListener('click', () => {
//     input2.value = input.value ** 2;
// })

// let button = document.querySelector('#button');
// let input = document.querySelector('#elem');
// let input2 = document.querySelector('#elem2');
// let value1 = input.value;
// let value2 = input2.value
// button.addEventListener('click', () => {
//     input.value = value2;
//     input2.value = value1;
// })

// let button = document.querySelector('#button');
// let txt = document.querySelector('.text')
// let input = document.querySelector('#elem');
// let input2 = document.querySelector('#elem2');
// let input3 = document.querySelector('#elem3');
// let input4 = document.querySelector('#elem4');
// let input5 = document.querySelector('#elem5');
// button.addEventListener('click', () => {
//    txt.innerHTML = (Number(input.value) + Number(input2.value) + Number(input3.value) + Number(input4.value) + Number(input5.value))/5;
// }) // посчитали среднее из всех инпутов

// let input = document.querySelector('#elem');
// input.addEventListener('focus', () => {
//     input.value = 'активное поле ввода';
// });
// input.addEventListener('blur', () => {
//     input.value = "неактивное поле ввода";
// })

// let input = document.querySelector('#elem');
// input.addEventListener('blur', () => {
//      alert(input.value ** 2); // 16
// })

// let input = document.querySelector('#elem');
// input.addEventListener('focus', () => {
//      input.value = '';
// })
// input.addEventListener('blur', () => {
//     input.value = 'введи текст';
// })

// let button = document.querySelector('#button');
// let nogap = document.querySelector('#elem1');
// button.addEventListener('click', () => {
//     console.log(nogap.className);
// })

// let button = document.querySelector('#button');
// let block = document.querySelector('#elem');
// button.addEventListener('click', () => {
//     block.className = 'aaa bbb ccc';
//     console.log(block.className);
// })

// let button = document.querySelector('#button');
// let block = document.querySelector('#elem');
// button.addEventListener('click', () => {
//     let arr = block.className.split(' ')
//     console.log(arr[0]) // обратились к первому классу через создание массива
// })

// document.querySelector('#button').addEventListener('click', () => {
//     console.log(document.querySelector('#image').src)
// });

// let input = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', func);
// function func() {
//     this.value = Number(this.value) + 1;
//     input.value = this.value
// }

// let elem = document.querySelector('.text');
// let elem2 = document.querySelector('.text2');
// let elem3 = document.querySelector('.text3');
// let elem4 = document.querySelector('.text4');
// let elem5 = document.querySelector('.text5');

// elem.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);

// function func() {
//     this.textContent = this.textContent + '!'; 
// }

// let input1 = document.querySelector('#elem1');
// let input2 = document.querySelector('#elem2');
// let input3 = document.querySelector('#elem3');

// input1.addEventListener ('blur', func);
// input2.addEventListener ('blur', func);
// input3.addEventListener ('blur', func);

// function func() {
//     this.value = Number(this.value) ** 2;
// }

// let btn = document.querySelector('#btn');
// let elems = document.querySelectorAll('.elem');

// btn.addEventListener('click', () => {
//     for (let elem of elems) {
//         elem.textContent = 'text';
//     }
// })

// let btn = document.querySelector('#btn');
// let elems = document.querySelectorAll('#elem');
// let sum = document.querySelector('#sum');

// btn.addEventListener('click', () => {
//     let result = 0;
//     for (let elem of elems) {
//         result += Number(elem.value);
//     }
//     sum.innerHTML = result;
// })

// let elems = document.querySelectorAll('#elem');
// for (let elem of elems) {
//     elem.addEventListener('blur', func)
// }
// function func() {
//     this.value = Number(this.value) + 1; // при потери фокуса в любом инпуте +1
// }

// let elems = document.querySelectorAll('.text');
// for (let elem of elems) {
//     elem.addEventListener('click', func)
    
//     function func() {
//         var result = this.textContent;
//         this.textContent = Number(result) ** 2;
//     }
// }

// let divs = document.querySelectorAll('div');
// for (let div of divs) {
// 	div.addEventListener('click', function(){
//         this.textContent++;
//     });
// }

// let link = document.querySelector('#elem');
// link.addEventListener('click', func);
// function func() {
//     this.innerHTML = this.innerHTML + '(' + this.href + ')';
//     this.removeEventListener('click', func)    
// }

// let button = document.querySelector('#btn');
// button.addEventListener('click', func);
// function func() {
//     if (button.value < 10) {
//         button.value = Number(button.value) + 1;
//         console.log(button.value)
//     } else {
//         button.removeEventListener('click', func)
//     }
// }

// let elems = document.querySelectorAll('.text');
// for (let elem of elems) {
//     elem.addEventListener('click', func)
// }
// function func() {
//     this.textContent = this.textContent + '!';
//     this.removeEventListener('click', func)
// }

// let lists = document.querySelectorAll('#list');
// for (let list of lists) {
//     list.addEventListener('click', function func(){
//         if (list.textContent < 10) {
//             this.textContent = Number(this.textContent) + 1;
//         } else {
//             list.removeEventListener('click', func)
//         }        
//     })
// } // по клику на любую li ее число увеличивается на 1, (до 10)

// let elem = document.querySelector('#elem');
// let inputClass = elem.getAttribute('class'); // Метод getAttribute, считал class
// console.log(inputClass);

// elem.setAttribute('class', 'fgf dsd') // переименовали class на 'fgf dsd'
// let newInputClass = elem.getAttribute('class');
// console.log(newInputClass);

// elem.removeAttribute('class');
// console.log(elem.hasAttribute('class'))

// let input = document.querySelector('#elem');
// let inputClass = elem.getAttribute('class');

// elem.setAttribute('class', 'ddddddd');
// console.log(elem.className); // ddddddd
// console.log(elem.hasAttribute('class')); // true

// elem.removeAttribute('class');
// console.log(elem.hasAttribute('class')); // false

//
// let elem = document.querySelector('#elem');
// console.log(elem.classList.length)

// let classNames = elem .classList;

// for (let className of classNames) {
//     document.write(className + '</br>')
// }

// elem.classList.add('fff'); // добавляет класс
// console.log(elem.className);

// elem.classList.remove('zzz'); // удаляет класс
// console.log(elem.className);

// console.log(elem.classList.contains('ggg')); // true

// elem.classList.toggle('www'); // toggle добавляет, если нет класса. Или удаляет, если есть.
// console.log(elem.className); // ggg fff

// elem.classList.toggle('www');
// console.log(elem.className); // ggg fff www

// elem.classList.toggle('www');
// console.log(elem.className); // ggg fff


//
// let elem = document.querySelector('#elem');
// elem.style.color = 'red';
// elem.style.fontSize = '26px';
// elem.textContent = '123';


//
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func);
// function func() {
//     this.textContent = 'Нажатие произошло';
//     this.classList.add('colored');
//     console.log(this.className)
// }


//
// let elem = document.querySelector('#elem');
// let btnCross = document.querySelector('#btnCross');
// let btnBold = document.querySelector('#btnBold');
// let btnRed = document.querySelector('#btnRed');

//
// btnCross.addEventListener('click', () => {
//     elem.classList.add('decoration')
// });
// btnBold.addEventListener('click', () => {
//     elem.classList.add('bold')
// });
// btnRed.addEventListener('click', () => {
//     elem.classList.add('colored')
// })

//
// btnCross.addEventListener('click', () => {
//     elem.classList.toggle('decoration')
// });
// btnBold.addEventListener('click', () => {
//     elem.classList.toggle('bold')
// });
// btnRed.addEventListener('click', () => {
//     elem.classList.toggle('colored')
// })

//
// let btnVisibility = document.querySelector('#btnVisibility');
// let elem = document.querySelector('#elem');
// btnVisibility.addEventListener('click', () => {
//     elem.classList.toggle('Visibility')
// })

//
// let parent = document.querySelector('#parent');
// console,console.log(parent.firstElementChild.textContent); // 1 
// console,console.log(parent.lastElementChild.textContent); // 2
// let elems = parent.children;
// for (let elem of elems) {
//     console.log (elem.textContent) // 1.. 2
// }

//
// let elem = document.querySelector('#elem');
// elem.parentElement.classList.add('borderRed')

//
// let elem = document.getElementById('elem'); // по id
// elem.innerHTML = '123';

//
// let elems = document.getElementsByTagName ('li'); // по тегу
// for (let elem of elems) {
//     elem.classList.add ('colored');
// }

//
// let elems = document.getElementsByClassName('www'); // по классу
// for (let elem of elems) {
// 	elem.innerHTML = '!!!';
// }

//
// let parent = document.querySelector('#parent');
// let elems1 = parent.querySelector('.www') // поиск элементов внутри родителя
// let elems2 = parent.querySelector('.ggg')


//
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', () => {
//     elem.innerHTML = elem.innerHTML + elem.dataset.text
// })

//
// let elems = document.getElementsByTagName('div');
// for (let elem of elems) {
//     elem.addEventListener('click', function func () {
//         this.innerHTML = this.innerHTML + this.dataset.num;
//         this.removeEventListener('click', func)
//     })
// }

//
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//     this.dataset.num = Number(this.dataset.num) + 1;
//     console.log(this.dataset.num)
// })
// btn.addEventListener('dblclick', function() {
//     alert(this.dataset.num)
// })

//
// let elem = document.querySelector('#elem');
// let text = document.querySelector('#text');
// elem.addEventListener('blur', function() {
//     if (this.value.length != this.dataset.length) {
//         text.textContent = 'Ошибка. Введите 5 знаков';
//     } else {
//         text.textContent = 'Введено верно';
//     }
// })

//
// let elem = document.querySelector('#elem');
// let text = document.querySelector('#text');
// elem.addEventListener('blur', function() {
//     if (this.value.length >= this.dataset.min && this.value.length <= this.dataset.max) {
//         text.textContent = 'Введено верно';
//     } else {
//         text.textContent = 'Ошибка. Введите от 5 до 10 знаков.';
//     }
// })

//
// let elem = document.querySelector('#elem');

// console.log(elem.getAttribute('data-num'));    // выведет 1000
// console.log(elem.getAttribute('data-my-num')); // выведет 2000

//
// let elem = document.querySelector('#elem');
// console.log(elem.childNodes[0]); // #comment
// console.log(elem.childNodes[1]); // #text
// console.log(elem.childNodes[2]); // span
// // или
// for (let node of elem.childNodes) {
// 	console.log(node);
// }

// let elems = document.querySelector('#elem');
// for (let node of elems.childNodes) {
//     if (node.nodeType === 1) {
//         console.log(node)
//     }
//     if (node.nodeType === 3) {
//         console.log(node)
//     }
// }

// let elems = document.querySelector('#elem');
// for (let node of elems.childNodes) {
//     if (node.nodeType === 3 || node.nodeType === 8) {
//         console.log(node.data) // text, com, text, com
//     }
    
// }

// let elems = document.querySelector('#elem');
// let arr = [];
// for (let node of elems.childNodes) {
//     if (node.nodeType === 3 || node.nodeType === 8) {
//         arr.push(node)
//     }
// }
// console.log(arr) // [text, comment, text, comment]

//0
// let elems = document.querySelectorAll('ul li')
// let sum = 0;
// for (let elem of elems) {
//     let text = elem.textContent;
//     let arr = text.split('')
//     if (+arr[0] + +arr[1] + +arr[2] + +arr[3] === 6) {
//         sum += +text;
//     }
// }
// console.log(sum)

//1
// let elems = document.querySelectorAll('ul li');
// for (let elem of elems) {
//     elem.textContent += '!';
//     console.log(elem.textContent)
// }

//2
// let elems = document.querySelectorAll('ul li');
// for (let elem of elems) {
//     elem.addEventListener('click', function() {
// 		elem.textContent = +elem.textContent + 1;
// 	});
// }

//3
// let button = document.querySelector('button');
// let elem   = document.querySelector('p');
// button.addEventListener('click', function() {
// 	elem.innerHTML = '<b>' + elem.textContent + '</b>';
// });

//4
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// button.addEventListener('click', function() {
// 	let sum = 0;
// 	for (let elem of elems) {
// 		sum += +elem.textContent;
// 	}
// 	console.log(sum);
// });

//5
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent += '!';
// 	});
// }

//6
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// button.addEventListener('click', function() {
// 	for (let elem of elems) {
// 		elem.innerHTML = '<b>' + elem.textContent + '</b>';
// 	}
// });

//7
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// let sum = 0;
// button.addEventListener('click', function() {
//     for (let elem of elems) {	
//         sum += +elem.textContent;
//     }
//     console.log(sum);
// });

//8
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('input');
// let sum = 0;
// button.addEventListener('click', function() {
//     for (let elem of elems) {
//         sum += +elem.value; 
//     }
//     console.log(sum)
// });

//9
// let button = document.querySelector('button');
// let elem1  = document.querySelector('#inp1');
// let elem2  = document.querySelector('#inp2');
// let elem3  = document.querySelector('#inp3');
// button.addEventListener('click', function() {
//     elem3.value = +elem1.value + +elem2.value;
// });

//11
// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')
// button.addEventListener('click', function() {
// 	for (let input of inputs) {
// 		if (input.value === input.dataset.text) {
// 			input.classList.add('right')
// 		} else {
// 			input.classList.add('wrong')
// 		}
//         console.log(input.classList)
// 	}
// });

// 12
// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')
// let texts = [
// 	'text1',
// 	'text2',
// 	'text3',
// ];
// button.addEventListener('click',function() {
//     for (let i = 0; i < inputs.length; i++) {
//         for (let j = 0; j < texts.length; j++) {         
//             if (i === j) {
//                 if (inputs[i].value === texts[j]) {
//                     inputs[i].classList.add('right')
//                     console.log(inputs[i].classList);
//                 }
//             } 
// 		}
// 	}
// });

//13
// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');
// let sum = 0;
// btn.addEventListener('click', function() {
// 	for (let input of inputs) {
//         sum += +input.value;
// 	}
// 	console.log(sum);
// });

//14
// let inp = document.querySelector('#inp');
// inp.addEventListener('blur', function() {
// 	let digits = inp.value.split('');
// 	let sum = 0;
// 	for (let digit of digits) {
// 		sum += +digit;
// 	}
// 	console.log(sum); //сумма цифр числа
// });

//15
// let input = document.querySelector('#inp');
// let button = document.querySelector('#btn');
// button.addEventListener('click', function(){
//         var text = "";
//         var possible = input.value;
//         for (var i = 0; i < input.value.length; i++) {
//             text += possible.charAt(Math.floor(Math.random() * possible.length));
//         }
//         input.value = text;
        
// })

//1
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#inp');
// input.addEventListener('blur', function() {
//     elem.textContent = elem.textContent + input.value; 
// })

//2
// let elem = document.querySelector('#elem');
// let input1 = document.querySelector('#inp');
// let input2 = document.querySelector('#inp2');
// let button = document.querySelector('#btn');
// button.addEventListener('click', () => {
//     elem.textContent = +input1.value + +input2.value;
// })

//3
// let input = document.querySelector('#inp');
// input.addEventListener('blur', function() {
//     let nums = input.value.split('');
//     let sum = 0;
//     for (let num of nums) {
//         sum += +num;
//     }
//     input.value = sum;
// })

//4
// let input = document.querySelector('#inp');
// input.addEventListener('blur', function() {
//     let nums = input.value.split(',');
//     let sum = 0;
//     for (let num of nums) {
//         sum += +num;
//     }
//     input.value = sum / nums.length; // среднее арифметическое введенных через ',' чисел
// })

//5
// let input = document.querySelector('#inp1');
// let input2 = document.querySelector('#inp2');
// let input3 = document.querySelector('#inp3');
// let input4 = document.querySelector('#inp4');
// input.addEventListener('blur', () => {
//     let initials = input.value.split(' ');
//     input2.value = initials[0];
//     input3.value = initials[1];
//     input4.value = initials[2];
// })

//6
// let input = document.querySelector('#inp');
// input.addEventListener('blur', function() {
//     let elems = input.value.split(' ');
//     for (let i = 0; i < elems.length; i++) {
//         elems[i] = elems[i].slice(0, 1).toUpperCase() + elems[i].slice(1).toLowerCase();
//     }
//     input.value = elems.join(' ')        
//     }) 

//7
// let input = document.querySelector('#inp');
// input.addEventListener('blur', () => {
//     let words = input.value.split(' ');
//     console.log(words.length + " words")
// })

//8
// let input = document.querySelector('#inp');
// input.addEventListener('blur', () => {
//     let newDate = input.value.split('.');
//     input.value = newDate.reverse().join('-')
// })

//9
// let input = document.querySelector('#inp');
// let button = document.querySelector('#btn');
// button.addEventListener('click', () => {
//     let reverseWord = input.value.split('').reverse().join('');
//     let newWord = input.value;
//     if (reverseWord === newWord) {
//         alert('слово читается с начала и с конца одинаково')
//     } else {
//         input.value = ''
//     }
// })

//10
// let input = document.querySelector('#inp');
// input.addEventListener('blur', () => {
//     let nums = input.value.split('');
//     for (let num of nums) {
//         if (+num === 3) {
//         input.value = 'число содержало цифру 3'
//         }
//     }
// })

//11
// let input = document.querySelector('#inp');
// input.addEventListener('blur', () => {
//     let arr = input.value.split('.').reverse();
//     console.log(arr);
//     let date = new Date(arr);
//     let day = date.getDay();
//     let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     console.log(days[day]); // сб
// })

//12
// let button = document.querySelector('#btn');
// let block = document.querySelector('#block');
// button.addEventListener('click', () => {
//     if (block.textContent.length >= 10) {
//         block.textContent = block.textContent.split('').slice(0, 10).join('') + '...';
//     }
// })
























