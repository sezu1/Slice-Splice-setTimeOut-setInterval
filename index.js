

// Task 1
const stopID = setInterval((text) => {
    console.log(text);
}, 1000, 'Hello World')

setInterval((a)=>  {
        (clearInterval(stopID))
        console.log('Done');
}, 5000)




//Task 2
let func = () => {
    setTimeout((four) => {
       console.log(four);
    }, 4000, 'Hello after 4 seconds');
    setTimeout((eigth) => {
        console.log(eigth);
     }, 8000, 'Hello after 8 seconds')
}
func()




//Task 3
let day = +prompt('Введите число от 1 до 31')
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
console.log(arr.slice(0,-3).concat(arr.slice(2,-1))) 
console.log(arr.splice(0,2))
console.log(arr)


//задача 2 от Перизат
let arr2 = ['Я', 'изучаю', 'JavaScript'];
arr2.splice(2, 0, 'сложный', 'язык');
console.log(arr2);



