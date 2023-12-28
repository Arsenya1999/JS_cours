console.log(1)
console.log(5);
  




function sum(a, b) {
    return a+b
}
console.log(sum(7,"c"));









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
 
function year(a){
    // a=Number
    // switch(a){
    //     case"+":
    //         console.log('Январь');
    //         break;
    // }

    if ( a>=0 && a <= 31    ) {
        return "январь"
    }
}


console.log(year(23));
 