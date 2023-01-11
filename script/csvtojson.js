const fs = require("fs");
const csv = require("csvtojson");

async function mergeCSV() {
  let jsonData = [];
  const files = fs.readdirSync("./PlayWithCSV/");
  for (const file of files) {
    if (file.endsWith(".csv")) {
      const csvData = await csv().fromFile(`./PlayWithCSV/${file}`);
      jsonData = jsonData.concat(csvData);
    }
  }
  const jsonString = JSON.stringify(jsonData);
  fs.writeFileSync("./merged.json", jsonString);
  console.log("Data Merged successfully check your folder for merged.json");
}

mergeCSV();
