
function day(a){
   

    if (a>7) { 
        
        a=a%7

    }

    switch(a) {
        case "7":
            return "Воскресенье";
            break;
        case "6" :
            return  "Суббота";
            break;
        case "5" :
            return "Пятница";
            break;
        case "4" :
            return "Четверг" ;
            break;
        case "3" :
            return "Среда";
            break;
        case "2" :
            return "Вторник";
            break;
        case "1" :
            return "Понедельник";
            break;
    }  

}


console.log(day(3));

function calculator(a, c, b) {
    switch(c) {
        case "+" :
            return a + b;
            break;
        case "-" :
            return a - b;
            break;
        case "*" :
            return a * b;
            break;
        case "/" :
            return a / b;
            break;
        case "%" :
            return a % b;
            break;
        case "**" :
            return a ** b;
            break;

    }
}
console.log(calculator(5, "+", 3));