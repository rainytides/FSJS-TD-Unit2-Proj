/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const studentsPerPage = 9;
let currentPage = 1;

function showPage(page, studentData) {
  const start = (page - 1) * studentsPerPage;
  const end = page * studentsPerPage;
  const studentList = document.querySelector('.student-list');
  studentList.innerHTML = '';

  for (let i = start; i < end && i < studentData.length; i++) {
    const student = studentData[i];
    const studentItem = `
      <li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
          <h3>${student.name.first} ${student.name.last}</h3>
          <span class="email">${student.email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${student.registered.date}</span>
        </div>
      </li>
    `;
    studentList.innerHTML += studentItem;
  }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons*/

function addPagination(studentData) {
   const totalPages = Math.ceil(studentData.length / studentsPerPage);
   const pagination = document.querySelector('.pagination');
   pagination.innerHTML = '';
 
   for (let i = 1; i <= totalPages; i++) {
     const btn = document.createElement('button');
     btn.textContent = i;
     btn.addEventListener('click', function () {
       showPage(i, studentData);
       currentPage = i;
     });
     pagination.appendChild(btn);
   }
 }


 showPage(currentPage, data);
 addPagination(data);

 // Search functionality
 function searchStudents(inputVal, studentData) {
   const filteredStudents = studentData.filter(student => {
       const fullName = `${student.name.first} ${student.name.last}`.toLowerCase();
       return fullName.includes(inputVal.toLowerCase()) || student.email.toLowerCase().includes(inputVal.toLowerCase());
   });

   if (filteredStudents.length === 0) {
       const studentList = document.querySelector('.student-list');
       studentList.innerHTML = '<li>No students found...</li>';
   } else {
       showPage(1, filteredStudents);
       addPagination(filteredStudents);
   }
}

// Add event listeners for the search functionality
document.querySelector('.student-search button').addEventListener('click', function() {
   const inputVal = document.querySelector('.student-search input').value;
   searchStudents(inputVal, data);
});

document.querySelector('.student-search input').addEventListener('keyup', function() {
   const inputVal = document.querySelector('.student-search input').value;
   searchStudents(inputVal, data);
});

