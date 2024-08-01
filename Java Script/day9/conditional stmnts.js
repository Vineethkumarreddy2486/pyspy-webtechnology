var bool=prompt('What u had for Bf..?')
// var st1=''
if(bool==null){
    console.log('Have your bf and come')
}
else{
    if(bool=='dosa'){
        console.log('was it good..?')
    }
    else if(bool=='idly'){
        console.log('Are you sick..?')
    }
    else if(bool=='vada'){
        console.log('It must be oily,have some healthy food')
    }
    else if(bool=='pulihora'){
        var Whatfav=prompt('Which flavor..?')
        if(Whatfav=='lemon'){
            console.log('Good')
        }
        else if(Whatfav=='tomato'){
            console.log('Very good')
        }
        else if(Whatfav=='mango'){
            console.log('My favourite one')
        }
        else{
            console.log('I dont know what it is')
        }
    }
}