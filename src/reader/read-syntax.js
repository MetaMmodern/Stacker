function readSyntax(content) {
  const strings = content.split("\n");
  const resultingStrings = strings.map((string) => {
    return `handle("${string}")`;
  });
  resultingStrings.push("getResult()");
  return resultingStrings.join("\n");
}

module.exports = readSyntax;
