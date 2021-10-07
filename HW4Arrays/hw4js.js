const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = function(student) {
    const pairs = [];
    const guys = [];
    const girls = [];
    for (student of students) {
        if (student.endsWith('а')) {
            girls.push(student);
        } else {
            guys.push(student);
        }
    };

    for (let i = 0; i < guys.length; i++) {
        pairs.push([guys[i]].concat([girls[i]]));
    }
        return pairs;
};

const pairs = getPairs(students);
console.log(pairs);

// 2 // 2// 2// 2// 2

function getThemes(pairs, themes) {
    const pairsWithSympol = pairs.map((item) => item.join(' та '));
    const themeForPair = pairsWithSympol.map((item, i) => [item, themes[i]]);
        return themeForPair;
};

const pairsWithThemes = getThemes(pairs, themes);
console.log(pairsWithThemes);

// 3// 3// 3// 3// 3// 3

function getGrade(students, marks) {
    const studentMark = [];
        for (let i = 0; i < students.length; i++) {
            studentMark.push([students[i]].concat([marks[i]]));
        }
    return studentMark;
}

const studentMark = getGrade(students, marks);
console.log(studentMark);

// 4 // 4 // 4 // 4 // 4 // 4 
function randomMark(min, max) {
    min = 1;
    max = 5;
    let random = (Math.random() * (max - min + 1)) + min;
        return Math.floor(random);
}

const markToPair = (pairsWithThemes) => {
    return pairsWithThemes.map((pairWithTheme, i) => {
        let gradeRandom = randomMark(1, 5);
            return [...pairsWithThemes[i], gradeRandom];
    })
}

const pairGrade = markToPair(pairsWithThemes);
console.log(pairGrade);






