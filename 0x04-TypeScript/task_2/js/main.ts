// DirectorInterface 
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// TeacherInterface 
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Create a class Director that will implement DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return `Working from home`
    }

    getCoffeeBreak(): string {
        return `Getting a coffee break`;
    }


    workDirectorTasks(): string {
        return `Getting to director tasks`;
    }
}

// Create a class Teacher that will implement TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return `Cannot work from home`;
    }

    getCoffeeBreak(): string {
        return `Cannot have a break`;
    }

    workTeacherTasks(): string {
        return `Getting to work`;
    }
}

interface createEmployeeFuncIneterface {
    (salary: string | number): Director | Teacher;
}

const createEmployee: createEmployeeFuncIneterface = (salary) => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
console.log(createEmployee(200));
// expected: Teacher
console.log(createEmployee(1000));
// expected: Director
console.log(createEmployee('$500'));
// expected: Director


// Type predicate function isDirector
const isDirector = (employee: Teacher | Director): employee is Director => {
    // we temporarity see if employee is director to get the method workDirector Task
    // if true (i.e method exists and not undefined) it returns try else, it returns false
    return (employee as Director).workDirectorTasks !== undefined;
}

// Function executeWork
const executeWork = (employee: Teacher | Director): void => {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

//  String literal types
// define string literal type
type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => {
    if (todayClass === 'Math') {
        return `Teaching Math`;
    }
    if (todayClass === 'History') {
        return `Teaching History`;
    }
}

// TEST function
console.log(teachClass('Math')); // Expected: Teaching Math
console.log(teachClass('History')); // Expected: Teaching History
