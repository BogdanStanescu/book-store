import BookCard from '../components/book-card/BookCard';
import BookList from '../components/book-list/BookList';
import Header from '../components/header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <BookList />
      {/* <BookCard
        image={'https://upload.wikimedia.org/wikipedia/en/d/d2/Baltagul.jpg'}
        title={'Baltagul'}
        genre={'Actiune'}
        author={'Mihail Sadoveanu'}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      /> */}
    </div>
  );
};

export default App;
