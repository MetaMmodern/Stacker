import fs from "fs";

export default function fileOpener(path) {
  let fileContent = "";
  try {
    fs.readFile(path, (err, data) => {
      if (err) throw err;
      fileContent = data;
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    process.exit(666);
  }
  return fileContent;
}
