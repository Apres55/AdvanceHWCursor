const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

// 1 // 1 // 1 // 1 // 1 // 1 // 1 // 1 // 1 // 1 // 1 // 

function getSubjects(student) {
    const keys = Object.keys(student.subjects);
    return keys.map((subject) => subject[0].toUpperCase() 
        + subject.substring(1).toLowerCase().replace("_", " "));
}

console.log(getSubjects(students[0]));

// 2 //// 2 // // 2 // // 2 // // 2 // // 2 // // 2 // 

function getAverageMark(student) {
    const studentsMarks = Object.values(student.subjects);
    const totalMarks = studentsMarks.reduce((acc, key) => acc.concat(key));
    const avarageMark = (totalMarks.reduce((acc, key) => (acc + key)) / totalMarks.length).toFixed(2);
    return avarageMark; 
}

console.log(getAverageMark(students[0]));

// 3 // // 3 // // 3 // // 3 // // 3 // // 3 // // 3 // 

function getStudentInfo(student) {
    return Object.assign ({
        Course: student.course,
        Name: student.name,
        AvarageMark: getAverageMark(student)
    });
}

console.log(getStudentInfo(students[0]));

// 4 // // 4 // // 4 // // 4 // // 4 // // 4 // // 4 // 

function getStudentsNames(students) {
    const studentsNames = students.map((student) => student.name);
    return studentsNames.sort();
}

console.log(getStudentsNames(students));


// 5 // // 5 //// 5 //// 5 //// 5 //// 5 //// 5 //// 5 //

function getBestStudent(students) {
    return students.reduce((acc, student) => getAverageMark(acc) > getAverageMark(student) ? acc : student).name;
}

console.log(getBestStudent(students))

// 6 //// 6 //// 6 //// 6 //// 6 //// 6 //// 6 //// 6 //

function calculateWordLetters(test) {
    return test.toLowerCase().split(``)
    .reduce((acc, letter) => {
        if(acc[letter]){
            acc[letter]++;
        } else {
            acc[letter] = 1;
        }
        return acc;
    }, {});
}