class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.study = true;
    }

    getInfo() {
        return `Студент ${this.course}ого курсу ${this.university}, ${this.fullName}`;
    }

    get getMarks() {
        return this.marks;
    }

    set setNewMark(mark) {
        if (this.mark !== null) {
            this.marks.push(mark);
        } 
    }

    getAverageMarks() {
        return this.marks.reduce((a, b) => a + b) / this.marks.length;
    }

    dismiss() {
        this.study = false;
    }

    recover() {
        this.study = true;
    }
}

const dwane = new Student(`High School Psychology, city: Odessa`, `1`, `Dwane Johnson`, [5, 4, 5, 4]);

console.log(dwane);
console.log(dwane.getInfo());
console.log(dwane.marks);
dwane.setNewMark = 2;
console.log(dwane.getMarks);
console.log(dwane.getAverageMarks());
dwane.dismiss();
dwane.recover();

class BudgetStudent extends Student {
    constructor(university, course, fullName, marks, scholarship) {
        super(university, course, fullName, marks)
        this.scholarship = scholarship;
            setInterval(() => {
                console.log(this.getScholarship());
            }, 30000);
    }

    getScholarship() {
        if (!this.study) return "You are dismissed from university";
        if (this.mark !== null && this.getAverageMarks() >= 4) {
            return `Ви отримали ${this.scholarship} грн степендії`;
        } else {
            return "You have a low avarage mark for get the scholarship"
        }
    }
}

const chiko = new BudgetStudent(`High School Psychology, city: Odessa`, `1`, `Chiko Brunson`, [5, 4, 5, 4], 1400);

console.log(chiko);
console.log(chiko.getScholarship());
chiko.dismiss();
console.log(chiko.getScholarship());

