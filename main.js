const collections = JSON.parse(localStorage.getItem('collections')) || [];
const bookContainer = document.querySelector('.book-container');
const AddBookForm = document.querySelector('.book-form');

// document.addEventListener('DOMContentLoaded', getBooks);
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');

// function addBook(title, author) {
//   const book = {
//     title, author,
//   };
//   collections.push(book);
// }

// [1,2,3,4,5,6,7,8,9,10]

// function saveLocalBook(book) {
//   let collections;
//   if (localStorage.getItem('collections') === null) {
//     collections = [];
//   } else {
//     collections = JSON.parse(localStorage.getItem('collections'));
//   }
//   collections.push(book);
//   localStorage.setItem('collections', JSON.stringify(collections));
// }

function render() {
  let collections;
  if (localStorage.getItem('collections') === null) {
    collections = [];
  } else {
    collections = JSON.parse(localStorage.getItem('collections'));
  }
  bookContainer.innerHTML = '';
  collections.forEach((book, index) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.innerHTML = `
      <p>${book.title}</p>
      <p>${book.author}</p>
      <button data-remove=${index} class="delete">Remove</button>
      <hr>
    `;
    bookContainer.appendChild(bookElement);

    const deleteButton = bookElement.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      removeBook(index);
      // removeLocalBook();
    });
  });
}
function removeBook(index) {
  // console.log(collections);
  collections.splice(index, 1);
  localStorage.setItem('collections', JSON.stringify(collections));
  render();
}

AddBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // const title = bookTitle.value;
  // const author = bookAuthor.value;
  // addBook(title, author);
  const book = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };
  collections.push(book);
  localStorage.setItem('collections', JSON.stringify(collections));
  // saveLocalBook({ title, author });
  bookTitle.value = '';
  bookAuthor.value = '';
  // saveLocalBook();
  render();
});

// function getBooks() {
//   let collections;
//   if (localStorage.getItem('collections') === null) {
//     collections = [];
//   } else {
//     collections = JSON.parse(localStorage.getItem('collections'));
//   }
//   collections.forEach((book, index) => {
//     const bookElement = document.createElement('div');
//     bookElement.classList.add('book');
//     bookElement.innerHTML = `
//       <p>${book.title}</p>
//       <p>${book.author}</p>
//       <button data-remove=${index} class="delete">Remove</button>
//       <hr>
//     `;
//     bookContainer.appendChild(bookElement);

//     const deleteButton = bookElement.querySelector('.delete');
//     deleteButton.addEventListener('click', () => {
//       removeBook(index);
//       render();
//     });
//   });
// }

window.onload = render();