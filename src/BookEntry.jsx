export function BookEntry({ id, title, author, rating, date, deleteBook }) {
  return (
    <li>
      &#x2714;
      <label>{title}</label>
      <label> by {author}</label>
      <label>
        {" "}
        finished on <strong>{date}</strong>{" "}
      </label>
      <label>
        {" "}
        Rating: <strong>{rating}</strong>/5
      </label>
      <button onClick={() => deleteBook(id)} className="btn btn-delete">
        &#x2715;
      </button>
    </li>
  );
}
