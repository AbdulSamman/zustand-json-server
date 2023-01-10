import create from "zustand";
import { useEffect } from "react";
import axios from "axios";
import { IBook, IFlashcard, IRawFlashcard } from "./interfaces";

const booksUrl = "https://edwardtanguay.vercel.app/share/techBooks.json";

const flashcardsUrl = "http://localhost:5556/flashcards";

const mockApiWaitSeconds = 3;

interface IStore {
  appTitle: string;
  books: IBook[];
  flashcards: IFlashcard[];
  loadBooks: () => void;
  loadFlashcards: () => void;
  handleToggleFlashcard: (flashcard: IFlashcard) => void;
}
export const useStore = create<IStore>(
  (set): IStore => ({
    appTitle: "Info Site",
    loadBooks: async () => {
      const rawBooks = (await axios.get(booksUrl)).data;
      const _books: IBook[] = [];
      rawBooks.forEach((rawBook: IBook) => {
        const book = {
          ...rawBook,
          language: rawBook.language === "" ? "English" : rawBook.language,
        };
        _books.push(book);
      });
      set((state) => {
        const _state = { ...state };
        _state.books = _books;
        return _state;
      });
    },
    loadFlashcards: async () => {
      const rawFlashcards = (await axios.get(flashcardsUrl)).data;

      const _flashcards: IFlashcard[] = [];
      rawFlashcards.forEach((rawFlashcard: IRawFlashcard) => {
        const flashcard = {
          ...rawFlashcard,
          isOpen: false,
        };
        _flashcards.push(flashcard);
      });
      set((state) => {
        const _state = { ...state };
        _state.flashcards = _flashcards;
        return _state;
      });
    },

    handleToggleFlashcard: (flashcard) => {
      set((state) => {
        const _state = { ...state, flashcard };
        _state.flashcard.isOpen = !_state.flashcard.isOpen;
        return _state;
      });
    },
    books: [],
    flashcards: [],
  })
);
export const LoadStore = () => {
  const store = useStore((state) => state);
  useEffect(() => {
    setTimeout(() => {
      store.loadBooks();
      store.loadFlashcards();
    }, mockApiWaitSeconds * 1000);
  }, []);
  return <></>;
};
