const employees = [
    {
        name: 'Atticus',
        employeeNumber: '2405',
        annualSalary: '47000',
        reviewRating: 3
    },
    {
        name: 'Jem',
        employeeNumber: '62347',
        annualSalary: '63500',
        reviewRating: 4
    },
    {
        name: 'Scout',
        employeeNumber: '6243',
        annualSalary: '74750',
        reviewRating: 5
    },
    {
        name: 'Robert',
        employeeNumber: '26835',
        annualSalary: '66000',
        reviewRating: 1
    },
    {
        name: 'Mayella',
        employeeNumber: '89068',
        annualSalary: '35000',
        reviewRating: 1
    }
];






for (let i = 0; i < employees.length; i++) {
   console.log(test(employees[i]));
}

function test(person) {
    let newperson = {};
    //Check performance Rating
    if (person.reviewRating <= 2) {
        newperson.name = person.name,
            newperson.bonusPercentage = 0,
            newperson.totalCompensation = person.annualSalary,
            newperson.totalBonus = 0
        return newperson
    }
    //check employee ID
    else {if (person.employeeNumber<=9999){
            //this is a old employee.
            if (person.salary>65000){
                if (person.reviewRating == 3) {
                    newperson.name = person.name;
                        newperson.bonusPercentage = 8;
                        newperson.totalCompensation = person.annualSalary * 1.08;
                        newperson.totalBonus = .08 * person.annualSalary;
                    return newperson;
                }
                if (person.reviewRating == 4) {
                    newperson.name = person.name;
                        newperson.bonusPercentage = 10;
                        newperson.totalCompensation = person.annualSalary * 1.10;
                        newperson.totalBonus = .10 * person.annualSalary;
                    return newperson
                }
                if (person.reviewRating == 5) {
                    newperson.name = person.name;
                        newperson.bonusPercentage = 13;
                        newperson.totalCompensation = person.annualSalary * 1.13;
                        newperson.totalBonus = .13 * person.annualSalary;
                    return newperson
                }
            }

            else{
                if (person.reviewRating == 3) {
                    newperson.name = person.name;
                        newperson.bonusPercentage = 9;
                        newperson.totalCompensation = person.annualSalary * 1.09;
                        newperson.totalBonus = .09 * person.annualSalary;
                    return newperson
                }
                if (person.reviewRating == 4) {
                    newperson.name = person.name;
                        newperson.bonusPercentage = 11;
                        newperson.totalCompensation = person.annualSalary * 1.11;
                        newperson.totalBonus = .11 * person.annualSalary;
                    return newperson
                }
                if (person.reviewRating == 5) {
                    newperson.name = person.name;
                        newperson.bonusPercentage = 13;
                        newperson.totalCompensation = person.annualSalary * 1.13;
                        newperson.totalBonus = .13 * person.annualSalary;
                    return newperson
                }
            }
}
if(person.employeeNumber>9999){
                if (person.salary > 65000){
                     if (person.reviewRating == 3) {
                    newperson.name = person.name;
                        newperson.bonusPercentage = 3;
                        newperson.totalCompensation = person.annualSalary * 1.03;
                        newperson.totalBonus = .03 * person.annualSalary;
                    return newperson
                }
                if (person.reviewRating == 4) {
                    newperson.name = person.name;
                        newperson.bonusPercentage = 5;
                        newperson.totalCompensation = person.annualSalary * 1.05;
                        newperson.totalBonus = .05 * person.annualSalary;
                    return newperson
                }
                if (person.reviewRating == 5) {
                    newperson.name = person.name;
                        newperson.bonusPercentage = 9;
                        newperson.totalCompensation = person.annualSalary * 1.09;
                        newperson.totalBonus = .09 * person.annualSalary;
                    return newperson
                }
            }

                else {
                        if (person.reviewRating == 3) {
                        newperson.name = person.name;
                            newperson.bonusPercentage = 4;
                            newperson.totalCompensation = person.annualSalary * 1.04;
                            newperson.totalBonus = .04 * person.annualSalary;
                    return newperson
                    }
                    if (person.reviewRating == 4) {
                        newperson.name = person.name;
                            newperson.bonusPercentage = 6;
                            newperson.totalCompensation = person.annualSalary * 1.06;
                            newperson.totalBonus = .06 * person.annualSalary;
                    return newperson
                    }
                    if (person.reviewRating == 5) {
                        newperson.name = person.name;
                            newperson.bonusPercentage = 10;
                            newperson.totalCompensation = person.annualSalary * 1.10;
                            newperson.totalBonus = .10 * person.annualSalary;
                    return newperson
                    }

                     }



        }

    }
}
