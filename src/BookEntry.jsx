export function BookEntry({ id, title, author, rating, date, deleteBook }) {
  return (
    <li>
      &#x2714;
      <dl>{title}</dl>
      <dl> by {author}</dl>
      <dl>Finished: {date}</dl>
      <dl>
        Rating: <strong>{rating}</strong>/5
      </dl>
      <button onClick={() => deleteBook(id)} className="btn btn-delete">
        &#x2715;
      </button>
    </li>
  );
}
