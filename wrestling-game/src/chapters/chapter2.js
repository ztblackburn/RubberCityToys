const chapter2 = {
  chapter2_start: {
    text: "Chapter 2: You step into the steel cage. The crowd roars. Tonight, you fight for the championship.",
    options: [
      { text: "Climb the cage", next: "climbStart" },
      { text: "Charge your opponent", next: "chargeOpponent" }
    ]
  },
  climbStart: {
    text: "You start climbing the cage. Your opponent rushes toward you!",
    options: [
      { text: "Leap off with a flying kick", next: "flyingKick" },
      { text: "Keep climbing", next: "draggedDown" }
    ]
  },
  chargeOpponent: {
    text: "You slam into your opponent with a powerful clothesline! They're stunned.",
    options: [
      { text: "Go for a pin", next: "earlyPin" },
      { text: "Climb the cage now", next: "climbClear" }
    ]
  },
  flyingKick: {
    text: "You soar through the air and land a brutal kick. The crowd goes wild!",
    options: [
      { text: "Climb the cage again", next: "climbClear" },
      { text: "Go for the pin", next: "pinVictory" }
    ]
  },
  draggedDown: {
    text: "Your opponent grabs your leg and slams you down. Ouch!",
    options: [
      { text: "Recover quickly", next: "chargeOpponent" },
      { text: "Play dead", next: "surpriseRollup" }
    ]
  },
  earlyPin: {
    text: "It's too early. They kick out at two!",
    options: [
      { text: "Put them in a submission hold", next: "submissionHold" }
    ]
  },
  climbClear: {
    text: "You have a clear shot. You're halfway up!",
    options: [
      { text: "Climb faster", next: "pinVictory" },
      { text: "Taunt the crowd", next: "tauntFail" }
    ]
  },
  submissionHold: {
    text: "They tap! But in a cage match, you must escape the cage to win.",
    options: [
      { text: "Climb the cage", next: "climbClear" }
    ]
  },
  surpriseRollup: {
    text: "1... 2... 3! You win with a surprise roll-up! The crowd erupts!",
    options: [
      { text: "Advance to Chapter 3", next: "chapter3_start" }
    ]
  },
  pinVictory: {
    text: "You slam them with your finisher! 1... 2... 3! You're the new champion!",
    options: [
      { text: "Advance to Chapter 3", next: "chapter3_start" }
    ]
  },
  tauntFail: {
    text: "You taunt too long and they yank you off the cage. You're knocked out. Game over.",
    options: [
      { text: "Retry Chapter 2", next: "chapter2_start" }
    ]
  }
};

export default chapter2;
