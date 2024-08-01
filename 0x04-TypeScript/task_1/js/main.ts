interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any; // ability to add additional properties -> index signature
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3)

// extend interface
interface Directors extends Teacher {
    numberOfReports: number
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);


// function interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
// print teachers
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
}
console.log(printTeacher('Gabriel', 'Mason'));


// CLASSES
// class definition
// class StudentClass {
//     firstName: string;
//     lastName: string;
//     workOnHomework(): string;
//     displayName(): string;
// }

//  interface
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Interface for the constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// class and construction implements interface
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    workOnHomework(): string {
        // returns string: currently working
        return `Currently working`;
    }

    displayName(): string {
        // returns firstname of the student
        return this.firstName;
    }
}

// USAGE
const student: StudentClassInterface = new StudentClass('Alibaba', 'Gomez');
console.log(student.displayName()); // Output: Alibaba
console.log(student.workOnHomework()); // Output: Currently working
