import "./App.scss";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { PageWelcome } from "./pages/PageWelcome";
import { PageFlashcards } from "./pages/PageFlashcards";
import { PageBooks } from "./pages/PageBooks";
import { Helmet } from "react-helmet";
import { useStore } from "./store";

function App() {
  const store = useStore((state) => state);
  return (
    <div className="App">
      <Helmet>
        <title>{store.appTitle}</title>
      </Helmet>
      <h1>Info Site</h1>

      <nav>
        <NavLink to="welcome">Welcome</NavLink>
        <NavLink to="books">Books</NavLink>
        <NavLink to="flashcards">Flashcards</NavLink>
      </nav>
      <Routes>
        <Route path="welcome" element={<PageWelcome />} />
        <Route path="books" element={<PageBooks />} />
        <Route path="flashcards" element={<PageFlashcards />} />
        <Route path="/" element={<Navigate to="welcome" replace />} />
      </Routes>
    </div>
  );
}

export default App;
