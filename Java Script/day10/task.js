var vehicle=prompt("Enter your vehicle")
vehicle=vehicle.toLowerCase()
switch(vehicle){
    case "bike":
        document.getElementById("cont").innerHTML=`<img src="../../Assests/Images/bike.jpg" alt="">`
        break;
    case "car":
        document.getElementById('cont').innerHTML=`<img src="../../Assests/Images/lambo.png" alt="">`
        break;
    case 'truck':
        document.getElementById('cont').innerHTML=`<img src="../../Assests/Images/truck.png" alt="">`
        break;
    case 'train':
        document.getElementById('cont').innerHTML=`<img src="../../Assests/Images/train.png" alt="">`
        break;
    default:
        document.getElementById('cont').innerHTML=`Plss...enter valid input`
}