import express from 'express';
import * as path from 'path';
import cors from 'cors';

const app = express();
const allowedOrigins = ['http://localhost:3001'];
app.use(
  cors({
    origin: allowedOrigins,
    optionsSuccessStatus: 200, // some legacy browsers require this option
  })
);
app.use(express.json());

let books = [
  {
    id: 1,
    image: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Baltagul.jpg',
    title: 'Baltagul',
    genre: 'Romanian Literature',
    author: 'Mihail Sadoveanu',
    description:
      '"Baltagul" is a social novel written by Mihail Sadoveanu and first published in book form in November 1930 by Editura Cartea Românească in Bucharest.',
  },
  {
    id: 2,
    image:
      'https://m.media-amazon.com/images/I/91WFb-PpoNL._AC_UL640_QL65_T2F_.jpg',
    title: 'The Pragmatic Programmer',
    author: 'David Thomas',
    genre: 'Programming',
    description:
      'The Pragmatic Programmer: Your Journey to Mastery, 20th Anniversary Edition (2nd Edition) (Pragmatic Programmers)',
  },
  {
    id: 3,
    image:
      'https://m.media-amazon.com/images/I/81HqVRRwp3L._AC_UL640_QL65_T2F_.jpg',
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    genre: 'Programming',
    description:
      'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming',
  },
  {
    id: 4,
    image:
      'https://m.media-amazon.com/images/I/81OvszBEdhL._AC_UL640_QL65_T2F_.jpg',
    title: 'Fluent Python',
    author: 'Luciano Ramalho',
    genre: 'Programming',
    description: 'Fluent Python: Clear, Concise, and Effective Programming',
  },
  {
    id: 5,
    image:
      'https://m.media-amazon.com/images/I/81QaVrv6p4L._AC_UL640_QL65_T2F_.jpg',
    title: 'Learning Go',
    author: 'Jon Bodner',
    genre: 'Programming',
    description:
      'Learning Go: An Idiomatic Approach to Real-World Go Programming',
  },
  {
    id: 6,
    image:
      'https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UL640_QL65_T2F_.jpg',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    genre: 'Programming',
    description: 'Clean Code: A Handbook of Agile Software Craftsmanship',
  },
];

app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

app.get('/book/:id', (req, res) => {
  const book = books.find((book) => book.id === parseInt(req.params.id));

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Add a new book
app.post('/book', (req, res) => {
  const book = { id: Date.now(), ...req.body };
  books.unshift(book);
  res.status(201).json(book);
});

// Update a book
app.put('/book/:id', (req, res) => {
  const index = books.findIndex((book) => book.id === parseInt(req.params.id));
  if (index >= 0) {
    books[index] = { ...books[index], ...req.body };
    res.json(books[index]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Delete a book
app.delete('/book/:id', (req, res) => {
  books = books.filter((book) => book.id !== parseInt(req.params.id));
  res.status(204).send();
});

const port = process.env.VITE_SERVER_PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
