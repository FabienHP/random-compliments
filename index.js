const compliments = [
  "You're an awesome person!",
  "Your smile is contagious.",
  "You look great today!",
  "You're a smart cookie.",
  "I bet you make babies smile.",
  "You have impeccable manners.",
  "I like your style.",
  "You have the best laugh.",
  "I appreciate you.",
  "You are the most perfect you there is.",
  "You're an excellent friend.",
  "You're a gift to those around you."
];

function generateCompliment() {
  const index = Math.floor(Math.random() * compliments.length);
  return compliments[index];
}

module.exports = generateCompliment;
