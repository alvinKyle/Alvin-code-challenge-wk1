

// created a function to calculate  the required credentials.
        function calculatedNetSalary() {
            let basicSalary = parseInt(prompt("Enter basic salary amount"));
            let benefits = parseInt(prompt("Enter total benefits amount"));

            const taxRate = 0.25
            const nhifRate = 0.03
            const nssfRate = 0.06

            const grossSalary = basicSalary + benefits;
            
            const tax = grossSalary * taxRate;
            const nhif = grossSalary * nhifRate;
            const nssf = grossSalary * nssfRate;

            const netSalary = grossSalary - (tax + nssf + nssf)
            return alert([
               `Netsalary : ${netSalary}`,
                `NHIF :${nhif}`,
                `Tax :${tax}`,
                `NSSF:${nssf}`,
                `Gross Salary :${grossSalary}`
            ]).join( ', ' );
        }
        //console logged to get the results of each variable

        (calculatedNetSalary());
        
        