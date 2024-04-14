
// Task 1

let count = 0;
const setInt = setInterval(() => {
    console.log('Hello World');
        count++;
        if (count === 5){
        console.log('Done');
        clearInterval(setInt);
    }
    }, 1000);


//Task 2
let func = (a,b) => {
    setTimeout((el) => {
               console.log(el);
},a,b)}

func(4000, 'Hello after 4 seconds');
func(8000, 'Hello after 8 seconds');



//Task 3
let day = +prompt('Введите число от 1 до 31');
switch(true){
    case day>0 && day<=10: 
        console.log('первая декада');
        break;
    case day>10 && day<=20: 
        console.log('вторая декада');
        break;
    case day>20 && day<=31: 
        console.log('третья декада');
        break;
    default:
        console.log('не входит в месяц');
        break;
}


//задача 1 от Перизат
let arr = ['t', 'e', 's', 't'];
console.log(arr.slice(0,-3).concat(arr.slice(2,-1)));
console.log(arr.splice(0,2));
console.log(arr);


// //задача 2 от Перизат
let arr2 = ['Я', 'изучаю', 'JavaScript'];
arr2.splice(2, 0, 'сложный', 'язык');
console.log(arr2);



