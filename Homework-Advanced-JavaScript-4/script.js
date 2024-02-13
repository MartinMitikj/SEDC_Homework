function Academy(name,start,end) {
    this.name = name;
    this.start = start;
    this.end = end;
    this.students = [];
    this.subjects = [];

    this.numberOfClasses = () => {this.subjects.length * 10};

    this.printStudents = () => {
        console.log(`Students: ${this.name}`);
        this.students.forEach(student => {
            console.log(student.firstName, student.lastName); 
        })
    }

    this.printSubjects = () => {
        console.log(`Subjects: ${this.name}`);
        this.subjects.forEach(subject => {
            console.log(subject.title);
        })
    }

}

function Subject(title,isElectiv,academy) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElectiv = isElectiv;
    this.academy = academy;
    this.students = [];

    this.overrideClasses = num => {
        if (num >= 3) {
            this.numberOfClasses = num
        } else {
            alert("Number of classes can't be smaller than 3");
        }
    }
}

function Student(firstName,lastName,age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;

    this.startAcademy = academy => {
        this.academy = academy;
        academy.students.push(this);
    }

    this.startSubject = subject => {
        if (!this.academy || !this.academy.subjects.includes(subject)) {
            console.log("Student is not enrolled in any academy or the subject does not exist in the academy");
            return;
        }
        if (this.currentSubject !== null) {
            this.completedSubjects.push(this.currentSubject);
        }
        this.currentSubject = subject;
        subject.students.push(this);
    };
}


const academy = new Academy('SEDC',new Date(2023,10,20), new Date(2024,10,20));
const student1 = new Student('Martin','Mitic',21);
const student2 = new Student('Andrej','Jakovic',19);
const subject1 = new Subject('JavaScript',true,academy);
const subject2 = new Subject('C#',false,academy);

academy.subjects.push(subject1,subject2);
student1.startAcademy(academy);
student2.startAcademy(academy);
student1.startSubject(subject1);
student2.startSubject(subject2);
academy.printStudents();
academy.printSubjects();