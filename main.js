const collections = [];
const bookContainer = document.querySelector('.book-container');
const AddBookForm = document.querySelector('.book-form');

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');

function addBook(title, author) {
  const book = {
    title, author,
  };
  collections.push(book);
}


// [1,2,3,4,5,6,7,8,9,10]

function removeBook(index) {
  collections.splice(index, 1);
}

function render() {
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
      removeBook(index);
      render();
    });

  });
}

AddBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = bookTitle.value;
  const author = bookAuthor.value;
  addBook(title, author);
  bookTitle.value = '';
  bookAuthor.value = '';
  render();
})


// const removeButton = document.querySelector('.delete');
// removeButton.addEventListener('click', (e) => {
//   const index = e.target.dataset.remove;
//   removeBook(index);
//   console.log(index);
// })
