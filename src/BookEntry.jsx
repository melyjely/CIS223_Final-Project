export function BookEntry({ id, title, author, rating, date, deleteBook }) {
  return (
    <li>
      {/* Tutorial START */}
      &#x2714;
      <label>{title}</label>
      {/* Tutorial END */}
      <label> by {author}</label>
      <label>Finished: {date}</label>
      <label>
        Rating: <strong>{rating}</strong>/5
      </label>
      {/* date format changes when logged */}
      <button onClick={() => deleteBook(id)} className="btn btn-delete">
        &#x2715;
      </button>
    </li>
  );
}
