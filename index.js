const expander = require("./src/expander/expander");
const reader = require("./src/reader/reader");

function main() {
  try {
    const path = process.argv[2];
    if (!path) {
      console.error("No file was provided. Please, provide the path to the file in arguments.");
      return;
    }
    const evaluatable = reader(path);

    const result = expander(evaluatable);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

main();
