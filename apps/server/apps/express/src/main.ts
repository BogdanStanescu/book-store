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
    genre: 'Action',
    author: 'Mihail Sadoveanu',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
  console.log('books', res.json(books));
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
app.post('/books', (req, res) => {
  const book = { id: Date.now(), ...req.body };
  books.push(book);
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
app.delete('/books/:id', (req, res) => {
  books = books.filter((book) => book.id !== parseInt(req.params.id));
  res.status(204).send();
});

const port = process.env.SERVER_PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
