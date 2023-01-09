import { useStore } from "../store";
import { NavLink } from "react-router-dom";

export const PageWelcome = () => {
  const store = useStore((state) => state);

  return (
    <>
      <div className="pageWelcome">
        <p>Welcome to this site.</p>
        {store.books.length === 0 ? (
          <p>Loading....</p>
        ) : (
          <p>
            In our club we are reading{" "}
            <NavLink to="/books">{store.books.length} books</NavLink> learning{" "}
            <NavLink to="/flashcards">
              {store.flashcards.length} flashcards
            </NavLink>
            .
          </p>
        )}
      </div>
    </>
  );
};
