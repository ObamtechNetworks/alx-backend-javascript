;
// create two students
var student1 = {
    firstName: 'Daniel',
    lastName: 'Joshua',
    age: 22,
    location: 'San Francisco'
};
var student2 = {
    firstName: 'Caleb',
    lastName: 'Muller',
    age: 30,
    location: 'Los Angeles'
};
// create an array with the two students inside
var studentsList = [student1, student2];
// with vanilla JS render a table for each elemetns in the array append a new row to the table 
var table = document.createElement('table');
var tableHeaderRow = document.createElement('tr');
var header1 = document.createElement('th');
header1.textContent = 'First Name';
var header2 = document.createElement('th');
header2.textContent = 'Location';
tableHeaderRow.appendChild(header1);
tableHeaderRow.appendChild(header2);
table.appendChild(tableHeaderRow);
// each row should contain first name of the student and the location
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
// Append the table to the body (or any other container)
document.body.appendChild(table);
//# sourceMappingURL=main.js.map