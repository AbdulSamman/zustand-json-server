import { IBook } from "../interfaces";
import { useStore } from "../store";

export const PageBooks = () => {
  const store = useStore((state) => state);

  return (
    <div className="pageBooks">
      <p>We have these {store.books.length} books:</p>
      {store.books.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="books">
          {store.books.map((book: IBook) => {
            return (
              <div className="book" key={book.id}>
                <img
                  src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
                />
                <div className="info">
                  <div className="title">{book.title}</div>
                  <div className="description">{book.description}</div>
                  <div className="language">{book.language}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
