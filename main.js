const collections = [];
// const Book = {
//   title: '',
//   author: '',
// };

// const firstBook = Book;
// firstBook.add('sasss', 'lorem ipsum');
// collections.push(firstBook);
// console.log(collections);

function addBook(title, author) {
  const book = {
    title, author,
  };
  collections.push(book);
}

function removeBook(title) {
  // eslint-disable-next-line array-callback-return, consistent-return
  collections.filter((book) => {
    if (book.title === title) {
      return book.title !== title;
    }
  });
}

addBook('asssa', 'jajaja');
addBook('book2', 'author2');
removeBook('asssa');
console.log(collections);
