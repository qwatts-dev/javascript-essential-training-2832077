/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Microphone from "./Microphone.js";

const sphereDlx = new Microphone(
  "Sphere DLX",
  "black",
  1500,
  "multi",
  "gold",
  40,
  300,
  17000
);
sphereDlx.log(); //use the built in log method in the Microphone Class.

const akg414 = new Microphone(
  "AKG 414",
  "dark grey",
  1200,
  "uni",
  "gold",
  40,
  600,
  20000
);
akg414.log(); //use the built in log method
