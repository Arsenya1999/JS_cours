



function year(a){
    

    if ( a>=0 && a <= 31    ) {
        return "январь";
    } else if(a>31 && a<=59){
        return "Феврвль";
    } else if(a>59 && a<=90){
        return "Март";
    }else if(a>90 && a<=120){
        return "Апрель";
    }else if(a>120 && a<=151){
        return "Май";
    }else if(a>151 && a<=181){
        return "Июнь";
    }else if(a>181 && a<=212){
        return "Июль";
    }else if(a>212 && a<=243){
        return "Август";
    }else if(a>243 && a<=273){
        return "Сентябрь";
    }else if(a>273 && a<=304){
        return "Октябрь";
    }else if(a>304 && a<=334){
        return "Ноябрь";
    }else if(a>334 && a<=365){
        return "Декабрь";
}
}


console.log(year());