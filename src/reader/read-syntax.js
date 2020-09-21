function readSyntax(content) {
  const strings = content.split("\n");
  const resultingStrings = strings.map((string) => {
    return `handle(${string})`;
  });
  return resultingStrings;
}

module.exports = readSyntax;
