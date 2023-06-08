const fs = require('fs');

// Create new text files
fs.writeFile('file1.txt', 'File 1 content', (err) => {
  if (err) {
    console.error('Error creating file1.txt:', err);
  } else {
    console.log('file1.txt created.');
  }
});

fs.writeFile('file2.txt', 'File 2 content', (err) => {
  if (err) {
    console.error('Error creating file2.txt:', err);
  } else {
    console.log('file2.txt created.');
  }
});

fs.writeFile('file3.txt', 'File 3 content', (err) => {
  if (err) {
    console.error('Error creating file3.txt:', err);
  } else {
    console.log('file3.txt created.');
  }
});


// Array of files to process
const files = ['file1.txt', 'file2.txt', 'file3.txt'];
// const files = [];

// Process a single file
function processFile(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file ${filename}: ${err}`);
            return;
        }

        console.log(`Processing file ${filename}`);

        // After processing, check if there are more files to process
        if (files.length > 0) {
            const nextFile = files.shift();
            processFile(nextFile);
        } else {
            console.log('All files processed.');
        }
    });
}

// Start processing the files
if (files.length > 0) {
    const firstFile = files.shift();
    processFile(firstFile);
} else {
    console.log('No files to process.');
}
