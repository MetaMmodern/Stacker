const fs = require("fs");
const path = require("path");

module.exports = function fileOpener(filePath) {
  let fileContent = "";
  try {
    fileContent = fs.readFileSync(path.resolve(filePath)).toString();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    process.exit(666);
  }
  return fileContent;
};
