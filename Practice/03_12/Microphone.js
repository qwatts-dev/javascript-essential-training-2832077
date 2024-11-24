/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Microphone {
  constructor(
    // Defines parameters:
    name,
    color,
    cost,
    polarity,
    capsule,
    maxSpl,
    dynRangeMin,
    dynRangeMax
  ) {
    // Define properties:
    this.name = name;
    this.color = color;
    this.cost = cost;
    this.polarity = polarity;
    this.capsule = capsule;
    this.maxSpl = maxSpl;
    this.dynRange = {
      min: dynRangeMin,
      max: dynRangeMax,
    };
  }
  // Add methods like normal functions:
  log() {
    console.log(`The ${this.name} object:`, this);
  }
}

export default Microphone;
