/*
const div = (strings, ...args) => console.log(strings, args);

const firstName = "Gento";
const lastName = "Morikawa";

div`Hello ${firstName} ${lastName} !`;
*/

const div = (strings, ...args) =>
  strings.reduce(
    (acc, currentString, index) => acc + currentString + (args[index] || ""),
    ""
  );

const firstName = "Gento";
const lastName = "Morikawa";

const template = div`Hello ${firstName} ${lastName} !`;
console.log(template); // It prints `Hello Marvin Frachet !`