import chapter1 from "./chapters/chapter1";
import chapter2 from "./chapters/chapter2";
import chapter3 from "./chapters/chapter3";  // Correct import name

const gameData = {
  home: {
    text: "Welcome to the Wrestling Adventure! Choose a chapter to begin.",
    options: [
      { text: "Chapter 1: Promo Night", next: "promoStart" },
      { text: "Chapter 2: Cage Match", next: "chapter2_start" },
      { text: "Chapter 3: The Medic", next: "chapter3_start" }
    ]
  },
  ...chapter1,
  ...chapter2,
  ...chapter3,  // Don't forget to spread chapter3 here
};

export default gameData;
