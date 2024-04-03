
//Create a function that will be used to calculate the points of demerit acquired.

function numberOfDemeritPoints() {

    speedLimit = 70
    let speed = prompt("Enter the speed")
    if (speed <= speedLimit) {

        alert("Your speed is Ok");

    } else if (speed >= speedLimit) {
        const demeritPoint = Math.floor((speed - speedLimit) / 5) 
        return alert( "points:"+" "+demeritPoint )
    
    }
}

//call the function to display the demerit points on the console log.     
numberOfDemeritPoints(85);

