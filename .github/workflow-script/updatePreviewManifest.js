import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "");

// Read the manifest.json file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  try {
    // Parse the JSON data
    const manifest = JSON.parse(data);

    // Find the dependency with module_name '@minecraft/server' and update its version
    if (manifest.dependencies) {
      manifest.dependencies.forEach((dependency) => {
        if (dependency.module_name === "@minecraft/server") {
          dependency.version = "1.18.0-beta";
        }
      });
    }

    // Convert the updated JSON object back to a string with formatted output
    const updatedData = JSON.stringify(manifest, null, "\t");

    // Write the updated JSON data back to the file
    fs.writeFile(filePath, updatedData, "utf8", (err) => {
      if (err) {
        console.error("Error writing the file:", err);
      } else {
        console.log("File updated successfully.");
      }
    });
  } catch (err) {
    console.error("Error parsing JSON:", err);
  }
});
