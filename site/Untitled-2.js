function day(a){
switch (a) {

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



console.log(day(2));