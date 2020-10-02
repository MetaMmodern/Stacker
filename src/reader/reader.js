const openFile = require("./openFile");
const readSyntax = require("./read-syntax");

module.exports = function reader(filePath) {
  const fileContent = openFile(filePath);
  const evaluatableString = readSyntax(fileContent);
  return evaluatableString;
};
