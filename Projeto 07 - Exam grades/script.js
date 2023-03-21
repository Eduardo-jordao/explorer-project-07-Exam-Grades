const students = [
    {
        name: "Luiz",
        TestOne: 9,
        TestTwo: 10,
        
    },
    {
        name: "Claudio",
        TestOne: 4,
        TestTwo: 2,
    },
    {
        name: "Amanda",
        TestOne: 10,
        TestTwo: 7,
    },
    {
        name: "Gabriela",
        TestOne: 9,
        TestTwo: 4,
    }
]

function average(TestOne, TestTwo){
    return ((Number(TestOne) + Number(TestTwo)) /  2).toFixed(1)
}

    
        function printStudentAverage(student) {
            if (average(student.TestOne, student.TestTwo) >= 7){
             return `
                    A média do(a) aluno(a) ${student.name} é ${average(student.TestOne, student.TestTwo)}
                    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
                `
           } else {
            return `
                A média do(a) aluno(a) ${student.name} é ${average(student.TestOne, student.TestTwo)}
                Não foi dessa vez, ${student.name}! Tente novamente!
            `
           }
           
        }
        

    
     
        for (let student of students) {
            let AverageMessage = printStudentAverage(student)
            alert(AverageMessage)
    }



    
    
    
  
  