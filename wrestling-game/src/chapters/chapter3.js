import variables from "../variables";

const chapter3 = {
    chapter3_start: {
      text: `${variables.medicArt}\n\nThe scene opens in a quaint, pastel-colored ambulance. Our medic, a fastidious fellow with perfectly coiffed hair and a propensity for meticulous notes, examines the weary champion.\n\n"Ah, Mr. Crusher," he says, adjusting his circular glasses, "You've given quite the performance. I must say, your resilience is remarkable."`,
      options: [
        { text: "Ask about your injuries", next: "injuryDetails" },
        { text: "Request a quirky anecdote", next: "quirkyAnecdote" }
      ]
    },
    injuryDetails: {
      text: `"Unfortunately," the medic says, his tone now grave yet measured, "you've sustained a severe concussion that requires immediate rest and observation. Additionally, your right wrist is fractured, and there’s significant swelling around your ribs. This isn’t something to take lightly—your recovery will be long and demanding."`,
      options: [
        { text: "Acknowledge the seriousness and ask about next steps", next: "nextSteps" },
        { text: "Remain stoic and ask for treatment plan", next: "treatmentPlan" }
      ]
    },
    nextSteps: {
      text: `"The first priority," the medic explains, "is rest and preventing further injury. We'll monitor you closely, and physical therapy will begin as soon as you're stable. The road ahead is tough, but you’ve shown resilience before."`,
      options: [
        { text: "Thank the medic and prepare to rest", next: "resting" }
      ]
    },
    treatmentPlan: {
      text: `The medic produces a carefully folded chart. "Pain management, immobilization, and gradual rehabilitation will define your recovery. It’s essential to listen to your body and proceed cautiously. No shortcuts to greatness."`,
      options: [
        { text: "Accept the plan and rest", next: "resting" }
      ]
    },
    quirkyAnecdote: {
      text: `The medic smiles subtly. "Did you know," he says, "that wrestlers in the 1960s used to recover by sipping chamomile tea whilst listening to classical jazz? Quite effective, though not scientifically proven."`,
      options: [
        { text: "Request chamomile tea", next: "resting" },
        { text: "Request modern medicine", next: "treatmentPlan" }
      ]
    },
    resting: {
      text: `The ambulance hums softly as you drift into a contemplative rest, the soft glow of the dashboard lights casting a serene ambiance. It is, after all, the calm after the storm.`,
      options: [
        { text: "End of Chapter 3 - Return to Home", next: "home" }
      ]
    },
    prescriptionVictory: {
      text: `The medic theatrically pulls out a small bottle labeled "Elixir of Champions" and hands it over. "Take this, and may your future matches be ever victorious," he intones solemnly.`,
      options: [
        { text: "End of Chapter 3 - Return to Home", next: "home" }
      ]
    }
  };
  
  export default chapter3;
  