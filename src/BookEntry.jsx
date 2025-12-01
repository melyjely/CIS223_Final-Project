// import { useState } from "react";

export function BookEntry({
  completed,
  id,
  title,
  author,
  // rating,
  // date,
  toggleRead,
  deleteBook,
}) {
  // const [date, setDate] = useState();
  return (
    <li>
      {/* Tutorial START */}
      <label className="check">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleRead(id, e.target.checked)}
        />
        {title}
      </label>
      {/* Tutorial END */}

      <label> by {author}</label>
      {/* <label> Rating: {rating}</label>
      <label> Finished on {date} </label> */}
      {/* date format changes when logged */}
      {/* <label>
        Date Finished:
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          id="date"
        />
        {date}
      </label> */}
      <button onClick={() => deleteBook(id)} className="btn btn-finish">
        I'm Finished
      </button>
    </li>
  );
}
