interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Kwame',
  lastName: 'Nkrumah',
  age: 62,
  location: 'Accra'
};

const student2: Student = {
  firstName: 'Jerry',
  lastName: 'Rawlings',
  age: 73,
  location: 'Accra'
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
table.border = '1';
table.style.borderCollapse = 'collapse';
table.style.marginTop = '20px';

const tableHead = document.createElement('thead');
const tableRow = document.createElement('tr');
const tableHeadFirstName = document.createElement('th');
const tableHeadLocation = document.createElement('th');

tableHeadFirstName.textContent = 'First Name';
tableHeadLocation.textContent = 'Location';

tableRow.appendChild(tableHeadFirstName);
tableRow.appendChild(tableHeadLocation);
tableHead.appendChild(tableRow);
table.appendChild(tableHead);

const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameField = document.createElement('td');
  nameField.textContent = student.firstName;

  const locationField = document.createElement('td');
  locationField.textContent = student.location;

  row.appendChild(nameField);
  row.appendChild(locationField);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
