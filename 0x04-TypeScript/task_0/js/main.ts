// declare an interface for the object
interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};

// create two students
const student1 : Student = {
    firstName: 'Daniel',
    lastName: 'Joshua',
    age: 22,
    location: 'San Francisco'
};

const student2 : Student = {
    firstName: 'Caleb',
    lastName: 'Muller',
    age: 30,
    location: 'Los Angeles'
};

// create an array with the two students inside
const studentsList: Student[] = [student1, student2];

// with vanilla JS render a table for each elemetns in the array append a new row to the table 
const table = document.createElement('table');
const tableHeaderRow = document.createElement('tr');
const header1 = document.createElement('th');
header1.textContent = 'First Name';
const header2 = document.createElement('th');
header2.textContent = 'Location';
tableHeaderRow.appendChild(header1);
tableHeaderRow.appendChild(header2);
table.appendChild(tableHeaderRow);

// each row should contain first name of the student and the location
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

// Append the table to the body (or any other container)
document.body.appendChild(table);
