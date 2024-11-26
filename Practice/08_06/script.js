/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const main = document.querySelector("main");

function test() {
  console.log(main);
}
test();

let inner = "<h1>Title Test</h1>";
const foo = function (inner) {
  main.innerHTML = inner;
};
foo(inner);

(() => {
  console.log("arrow function ran");
})();
