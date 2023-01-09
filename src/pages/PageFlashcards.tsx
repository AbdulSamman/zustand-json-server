import { useStore } from "../store";

export const PageFlashcards = () => {
  const store = useStore((state) => state);

  return (
    <div className="pageFlashcards">
      <p>
        We are currently learning these {store.flashcards.length} flashcards:
      </p>

      <div className="flashcards">
        {store.flashcards.map((flashcard: any) => {
          return (
            <div className="flashcard" key={flashcard.id}>
              <div
                className="front"
                onClick={() => store.handleToggleFlashcard(flashcard)}
              >
                {flashcard.front}
              </div>
              {flashcard.isOpen && <div className="back">{flashcard.back}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};
