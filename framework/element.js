/*
const div = (strings, ...args) => console.log(strings, args);

const firstName = "Gento";
const lastName = "Morikawa";

div`Hello ${firstName} ${lastName} !`;
*/

/*
const div = (strings, ...args) =>
  strings.reduce(
    (acc, currentString, index) => acc + currentString + (args[index] || ""),
    ""
  );

const firstName = "Gento";
const lastName = "Morikawa";

const template = div`Hello ${firstName} ${lastName} !`;
console.log(template); // It prints `Hello Marvin Frachet !`
*/

const createElement = tagName => (strings, ...args) => ({
    type: tagName, // this will be useful for the next chapter
    template: strings.reduce(
      (acc, currentString, index) => acc + currentString + (args[index] || ""),
      ""
    )
  });
  
  const div = createElement("div");
  const p = createElement("p");
  
  const firstName = "Gento";
  const lastName = "Morikawa";
  
  //const template = div`Hello ${firstName} ${lastName} !`;
  const { template } = p`Hello ${firstName} ${lastName} !`;
  console.log(template);