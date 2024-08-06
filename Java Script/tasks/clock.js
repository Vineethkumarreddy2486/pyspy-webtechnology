function digclock(){
    let alldate=new Date()
    let hh=alldate.getHours()
    let mm=alldate.getMinutes()
    let ss=alldate.getSeconds()
    let dd=alldate.getDate()
    let mon=alldate.getMonth()
    let yy=alldate.getFullYear()
    let ms=alldate.getMilliseconds()
    let dy=alldate.getDay()
    var am_pm='AM'
    if(hh>=12){
        am_pm='PM'
        if(hh>12){
            hh-=12
        }
    }
    if(hh==0){
        hh=12
    }
    document.querySelector('#time').innerHTML=`${hh}:${mm} ${am_pm}`
    switch(mon){
        case 0:
            mon='Jan'
        break;
        case 1:
            mon='Feb'
        break;
        case 2:
            mon='Mar'
        break;
        case 3:
            mon='Apr'
        break;
        case 4:
            mon='May'
        break;
        case 5:
            mon='Jun'
        break;
        case 6:
            mon='Jul'
        break;
        case 7:
            mon='Aug'
        break;
        case 8:
            mon='Sep'
        break;
        case 9:
            mon='Oct'
        break;
        case 10:
            mon='Nov'
        break;
        case 11:
            mon='Dec'
        break;
    }
    document.querySelector('#date').innerHTML=`${dd}-${mon}-${yy}`
    if(dy==0){
        dy="Sunday"
    }
    else if(dy==1){
        dy="Monday"
    }
    else if(dy==2){
        dy="Tuesday"
    }
    else if(dy==3){
        dy="Wednesday"
    }
    else if(dy==4){
        dy="Thursday"
    }
    else if(dy==5){
        dy="Friday"
    }
    else if(dy==6){
        dy="Saturday"
    }
    document.querySelector('#day').innerHTML=dy
    document.querySelector('#sec').innerHTML=ss
}
setInterval(digclock,1000)