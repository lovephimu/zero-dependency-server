import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirName = path.dirname(fileURLToPath(import.meta.url)); // takes the URL of the current filepath and turns it into a filepath

// setting up a server

const server = http.createServer((req, res) => {
  const { url } = req; // object destructuring for url = req.url
  const filePath = path.join(dirName, 'public', url);

  // path.join() is a Node.js method that joins two or more parts of a file path together. In this case, path.join(dirName, 'public', url) joins the dirName variable (which contains the directory path of the current module), the string 'public', and the url variable (which contains the URL of the current request) together to form a file path.

  // Using path.join method is recommended over using string concatenation to build file paths because it ensures that the resulting path is platform-independent. Different operating systems use different path separators (e.g., / for Unix-based systems and \ for Windows), and manually concatenating file paths with string methods can lead to inconsistencies across platforms.

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('404 - File not found');
    } else {
      // Determine content type based on file extension
      const extname = path.extname(filePath);
      let contentType = 'text/plain';
      if (extname === '.html') {
        contentType = 'text/html';
      } else if (extname === '.css') {
        contentType = 'text/css';
      } else if (extname === '.jpg' || extname === '.jpeg') {
        contentType = 'image/jpeg';
      } else if (extname === '.png') {
        contentType = 'image/png';
      }

      // The Content-Type header specifies the media type of the data sent to the client. This is important because the client (e.g. web browser) uses this information to understand how to interpret the data received from the server.

      // For example, if the server sends an HTML document but specifies the Content-Type as text/plain, the web browser will not render the HTML content correctly, and the user may see the raw HTML code instead of a rendered webpage. By specifying the correct Content-Type, the client can properly display the content sent by the server.

      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(data);
    }
  });
});

const port = 3000;

server.listen(port, '0.0.0.0');

// listen locally:

// const port = 3000;

// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

// a listener for incoming requests
