const request = require('request');
const fs = require('fs');

const URL = process.argv[2];
const fileToWrite = process.argv[3]

const requestAndWrite = function(URL, fileToWrite) {

  request(URL, (error, response, body) => {
    if (error) {
      console.log('fails to download: ', error, response.statusCode); // Print the error if one occurred
      return;
    } 

    fs.writeFile(fileToWrite, body, (err) => {
      if(err) {
          console.log("failed to write to path", fileToWrite)
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${fileToWrite}`);
    });
  });
 
};

if (!URL || !fileToWrite) {
  console.log("Missing input. Please add URL and file")
} else {
  requestAndWrite(URL, fileToWrite);
}


    
