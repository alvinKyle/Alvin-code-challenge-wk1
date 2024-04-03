
//create a function that will desplay the output result on the console log.
        function calculatedGrade() {
            let marks = prompt("Enter your marks")
            if (marks > 100) {
                return alert("marks should be between 0 and 100")
            } else if (marks >= 79 && marks <= 100) {
                return alert("A");
            } else if (marks >= 60 && marks < 79) {
                return alert("B");
            } else if (marks >= 49 && marks < 60) {
                return alert("C");
            } else if (marks >= 40 && marks < 50) {
                return alert("D");
            } else {
                return alert("E");
            }
        }
        
//call the function to display the output.
        (calculatedGrade())







    


