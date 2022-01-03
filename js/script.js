/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



// The showPage function creates and displays the page with 9 students' profiles

function showPage(list, page) {
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;
   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         let studentItem = `<li class="student-item cf">
         <div class="student-details">
         <img class="avatar" src="${data[i].picture.large}">
         <h3>${data[i].name.first} ${data[i].name.last}</h3>
         <span class="email">${data[i].email}</span>
         </div>
         <div class="joined-details">
         <span class="date">${data[i].registered.date}</span>
         </div>`
         studentList.insertAdjacentHTML('beforeend', studentItem);
      }
   }
} 
showPage(data, 1);

// The addPagination function creates and displays the number of pagination buttons

function addPagination(list) {
   let numOfPages = Math.ceil(list.length / 9);
  let linkList = document.querySelector('.link-list');
  
  linkList.innerHTML = '';
   for (let i = 1; i <= numOfPages; i++) {
      let button = `<li>
      <button type="button">${i}</button>
      </li>`;
      linkList.insertAdjacentHTML('beforeend', button);
   }

   let buttonActive = document.querySelector('button');
      buttonActive.className = 'active'

   // This code block creates an active class for the button clicked, while removing the active class for the button clicked prior 

   linkList.addEventListener('click', event => {
      if(event.target.tagName == 'BUTTON') {
         document.querySelector('.active').className = '';
         event.target.className = 'active';
         showPage(list, event.target.textContent);
      }
   });
}
addPagination(data);
