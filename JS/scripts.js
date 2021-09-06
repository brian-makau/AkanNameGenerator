function generateName(){
    let name = document.getElementById("name").value; 
    
    let date = document.getElementById("date").value;

    let month = document.getElementById("month").value;

    let year = document.getElementById("year").value;

    let gender = document.getElementById("gender").value;

    let century = year.slice(0,2);

    let yearName = year.slice(2,4);

    let day = ( ( (century/4) -2*yearName-1) + ((5*yearName/4) ) + ((26*(month+1)/10)) + date ) % 7;
    
    day = Math.floor(day)
    
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    var femaleNames = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];

    if (gender === "male"){
        document.getElementById("akan").innerHTML = maleNames[day - 1]
    }
    else{
        document.getElementById("akan").innerHTML= femaleNames[day - 1]
    }
    if(date <= 0 || date > 31){
        alert("The date entered is invalid")
    }
    else if(month <= 0 || month > 12){
        alert("The month entered is invalid")
    }
    else if(year < 1000 || year >= 9999){
        alert("The year entered is invalid")
    }
}