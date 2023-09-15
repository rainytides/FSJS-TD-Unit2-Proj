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
Function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const studentItem = document.createElement('li');
         studentItem.className = 'student-item cf';
         studentList.appendChild(studentItem);
         const studentDetails = document.createElement('div');
         studentDetails.className = 'student-details';
         studentItem.appendChild(studentDetails);
         const studentImage = document.createElement('img');
         studentImage.className = 'avatar';
         studentImage.src = list[i].picture.large;
         studentImage.alt = 'Profile Picture';
         studentDetails.appendChild(studentImage);
         const studentName = document.createElement('h3');
         studentName.textContent = `${list[i].name.first} ${list[i].name.last}`;
         studentDetails.appendChild(studentName);
         const studentEmail = document.createElement('span');
         studentEmail.className = 'email';
         studentEmail.textContent = list[i].email;
         studentDetails.appendChild(studentEmail);
         const joinedDetails = document.createElement('div');
         joinedDetails.className = 'joined-details';
         studentItem.appendChild(joinedDetails);
         const joinedDate = document.createElement('span');
         joinedDate.className = 'date';
         joinedDate.textContent = `Joined ${list[i].registered.date}`;
         joinedDetails.appendChild(joinedDate);
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function 


// Call functions
