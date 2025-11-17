import { BookEntry } from "./bookEntry";

export function BookList({ books: books, toggleTodo, deleteBook }) {
  return (
    <ul className="list">
      {books.length === 0 && "Nothing logged yet!"}
      {books.map((book) => {
        return (
          <BookEntry
            {...book}
            key={book.id}
            toggleTodo={toggleTodo}
            deleteBook={deleteBook}
          />
        );
      })}
    </ul>
  );
}
