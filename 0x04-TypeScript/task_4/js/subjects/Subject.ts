namespace Subjects {
    export class Subject {
        public teacher: Teacher;

        constructor() {
            this.teacher = {
                firstName: '',
                lastName: ''
            }; // default initialization
        }

        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}