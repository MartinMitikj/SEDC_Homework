class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullastName = function () {
      console.log(`Person's Full name is: ${this.firstName} ${this.lastName}`);
    }
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, academyName, studentId) {
    super(firstName, lastName, age);
    this.academyName = academyName;
    this.studentId = studentId;
    this.whichAcademy = function () {
      console.log(`The student ${firstName} is studying in the ${this.academyName} `);

    }

  }
}
let student1 = (new Student(`Mario`, `Gulicovski`, 23, `Qinshift`, 5321));
let student2 = (new Student(`Andrej`, `Jankovic`, 19, `SEDC`, 4322));
console.log(student1);
console.log(student2);
student1.whichAcademy()


class DesignStudent extends Student {
  constructor(firstName, lastName, age, academyName, studentId, studentOfTheMonth) {
    super(firstName, lastName, age, academyName, studentId)
    this.studentOfTheMonth = studentOfTheMonth
    this.attendAdobeExam = function () {
      console.log(`The student ${firstName} ${lastName} is doing an adobe exam!`);
    }
  }
}
let firstDesignStudnet = (new DesignStudent(`Nikola`, `Rapet`, 21, `SEDC`, 22588, true))
console.log(firstDesignStudnet);


class CodeStudent extends Student {
  constructor(firstName, lastName, age, academyName, studentId, hasIndividualProject, hasGroupProject) {
    super(firstName, lastName, age, academyName, studentId)
    this.hasIndividualProject = hasIndividualProject
    this.hasGroupProject = hasGroupProject
    this.doProject = function (type) {
      if (type === "individual") {
        console.log(`The Studnet ${firstName} ${lastName} is working on a ${type} project`)
        this.hasIndividualProject = true
      }
      else if (type === "group") {
        console.log(`The Studnet ${firstName} ${lastName} is working on a ${type} project`)
        this.hasGroupProject = true;

      }
      else { console.log("error"); }
    }
  }
}

let firstCodeStudent = new CodeStudent(`Ivan`, `Apostolovski`, 24, `SEAVUS`, 2222, false, false)
console.log(firstCodeStudent);
console.log(firstCodeStudent.hasGroupProject)

firstCodeStudent.doProject("group")
console.log(firstCodeStudent.hasGroupProject)

class NetworkStudent extends Student {
  constructor(firstName, lastName, age, academyName, studentId, academyPart) {
    super(firstName, lastName, age, academyName, studentId)
    this.academyPart = academyPart
    this.attendCiscoExam = function () {
      console.log(`The student ${firstName} ${lastName} is doing a cisco exam!`)
    }
  }

}

let firstNetworkStudent = new NetworkStudent(`Martin`, `Mitic`, 19, `Lajsna`, 2211, 4)
console.log(firstNetworkStudent);
firstNetworkStudent.attendCiscoExam()