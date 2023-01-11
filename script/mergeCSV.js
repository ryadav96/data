const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const folder = "./PlayWithCSV";

const mergedData = {};

fs.readdir(folder, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  // Filter the list of files to only include CSV files
  const csvFiles = files.filter((file) => file.endsWith(".csv"));
  csvFiles.forEach((file) => {
    console.log(file);
    fs.createReadStream(path.join(folder, file))
      .pipe(csv())
      .on("data", (data) => {
        mergeData(mergedData, data);
        console.log("mergedData");
        const jsonData = JSON.stringify(mergedData, null, 2);
        // Write the JSON data to a file
        fs.writeFileSync("merged.json", jsonData);
      });
  });
//   console.log("mergedData");
//   const jsonData = JSON.stringify(mergedData, null, 2);

//   // Write the JSON data to a file
//   fs.writeFileSync("merged.json", jsonData);
});

// Merge the new data with the existing data, deduplicating columns as necessary
function mergeData(existingData, newData) {
  // Get the list of column names in the new data
  const newColumnNames = Object.keys(newData);

  // Iterate over each column in the new data
  newColumnNames.forEach((columnName) => {
    // If the column does not already exist in the existing data, add it
    if (!existingData.hasOwnProperty(columnName)) {
      existingData[columnName] = [];
    }

    // Add the data for the column to the existing data

    existingData[columnName].push(newData[columnName]);
  });
}
