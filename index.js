// index.js

const fs = require('fs');

class BookCatalog {
  constructor() {
    this.books = [];
  }

  loadBooks() {
    try {
      const data = fs.readFileSync('books.json', 'utf8');
      this.books = JSON.parse(data);
      console.log('Books loaded successfully.');
    } catch (err) {
      console.error('Error loading books:', err);
    }
  }

  saveBooks() {
    try {
      const data = JSON.stringify(this.books, null, 2);
      fs.writeFileSync('books.json', data);
      console.log('Books saved successfully.');
    } catch (err) {
      console.error('Error saving books:', err);
    }
  }

  addBook(book) {
    this.books.push(book);
    this.saveBooks();
  }

  displayBooks() {
    console.log('Books:');
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.title} by ${book.author}`);
      console.log(`   Genre: ${book.genre}`);
      console.log(`   Pages: ${book.pages}`);
      console.log('-------------------------------------');
    });
  }
}

const bookCatalog = new BookCatalog();
bookCatalog.loadBooks();
bookCatalog.displayBooks();

// Example: Add a new book
const newBook = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Fiction',
  pages: 281
};
bookCatalog.addBook(newBook);
