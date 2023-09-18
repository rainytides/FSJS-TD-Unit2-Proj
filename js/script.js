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

const itemsPerPage = 9;

// Search bar HTML
const searchBarHTML = `
    <label for="search" class="student-search">
        <span>Search by name</span>
        <input id="search" placeholder="Search by name...">
        <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
    </label>
`;

// Insert the search bar into the header element
document.querySelector('.header').insertAdjacentHTML('beforeend', searchBarHTML);

function showPage(list, page) {
    const startIndex = (page * itemsPerPage) - itemsPerPage;
    const endIndex = page * itemsPerPage;
    const studentList = document.querySelector('.student-list');
    studentList.innerHTML = '';
    
    for (let i = 0; i < list.length; i++) {
        if (i >= startIndex && i < endIndex) {
            const student = list[i];
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
            studentList.insertAdjacentHTML('beforeend', studentItem);
        }
    }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons*/

function addPagination(list) {
   const totalPages = Math.ceil(list.length / itemsPerPage);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   
   if (list.length === 0) { // If no students are found, exit the function without adding pagination
      return;
  }


   for (let i = 1; i <= totalPages; i++) {
       const isActive = i === 1 ? 'active' : ''; // Setting the first button as active
        const btn = `
            <li>
                <button type="button" class="${isActive}">${i}</button>
            </li>
        `;
       linkList.insertAdjacentHTML('beforeend', btn);
   }
   
   /*if (totalPages > 0) {
       linkList.querySelector('button').className = 'active';
   } */

   // Event listener for pagination buttons
   linkList.addEventListener('click', (e) => {
       if (e.target.tagName === 'BUTTON') {
           const btn = e.target;
           const active = document.querySelector('.active');
           if (active) {
               active.classList.remove('active');
           }
           btn.className = 'active';
           showPage(list, parseInt(btn.textContent));
       }
   });
}

// Call the functions when the page loads
showPage(data, 1);
addPagination(data);

 // Search functionality
 function searchStudents(inputVal, studentData) {
    const filteredStudents = studentData.filter(student => {
        const fullName = `${student.name.first} ${student.name.last}`.toLowerCase();
        return fullName.includes(inputVal.toLowerCase()) || student.email.toLowerCase().includes(inputVal.toLowerCase());
    });
 
    const studentList = document.querySelector('.student-list');
    if (filteredStudents.length === 0) {
        studentList.innerHTML = '<li>No students found...</li>';
        document.querySelector('.link-list').innerHTML = ''; // Clear the pagination
    } else {
        showPage(filteredStudents, 1);  // Show the first page of the filtered results
        addPagination(filteredStudents);
    }
 }
 
 // Add event listener for the search functionality
 document.querySelector('.student-search input').addEventListener('keyup', function() {
    const inputVal = document.querySelector('.student-search input').value;
    searchStudents(inputVal, data);
 });
 
 // Event listener for the search button
 document.querySelector('.student-search button').addEventListener('click', function() {
    const inputVal = document.querySelector('.student-search input').value;
    searchStudents(inputVal, data);
 });
 
