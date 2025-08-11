import variables from "../variables";

const { wrestler1, wrestler2 } = variables;

const chapter1 = {
  promoStart: {
    text: `It's the night before the big cage match. The <strong>${wrestler1.name}</strong> stands in the ring, staring down the challenge.\n\n"Tomorrow, ${wrestler2.name}, you're going to regret stepping into the cage with me!"`,
    options: [
      { text: `Prepare for the fight`, next: "promoPrepare" },
      { text: `Trash talk ${wrestler2.name}`, next: "promoTrashTalk" }
    ]
  },
  promoPrepare: {
    text: `${wrestler1.ascii}\n\nThe ${wrestler1.name} hits the gym hard, training for the toughest match of their life.`,
    options: [
      { text: "Continue to Chapter 2", next: "chapter2_start" }
    ]
  },
  promoTrashTalk: {
    text: `"You're slow, weak, and no match for me, ${wrestler2.name}!" the crowd boos and cheers at the same time.`,
    options: [
      { text: "Continue to Chapter 2", next: "chapter2_start" }
    ]
  }
};

export default chapter1;
