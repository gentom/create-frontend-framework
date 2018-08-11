const div = (strings, ...args) => console.log(strings, args);

const firstName = "Marvin";
const lastName = "Frachet";

div`Hello ${firstName} ${lastName} !`;