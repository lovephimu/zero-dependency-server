# Zero Dependency Server

This exercise demonstrates of how to set up a local server with only the help of node.js. It also makes files in the ./public folder accessible with having to type the full address of a file in that folder.

## Start / Stop the Server

The server can be started by typing:

´´´
node index.js
´´´

...and stopped by hitting crtl+c

## Test Samples

There are four test file available for testing. They are located in the public folder but can be accessed by typing only:

´´´
http://localhost:3000/index.html
http://localhost:3000/index.css
http://localhost:3000/meme/1.jpg
http://localhost:3000/meme/index.htm
´´´

## General Methodes:

First file path are parsed - so that no matter which OS is being used the file path is turned into something readable for javaScript.

The user can just type addresses for files in the public folder because the script will add the ./public part to the submitted URL and redirect the user in the right directory.

Filepaths are checked for their endings so that the browser can properly display them by receiving infos about the files via content type headers.

## Issues

The code works locally but sadly it's a bit unclear of how it should be working on replit.

Setting the servers adress to 0.0.0.0 or localhost:3000 does not change anything. Script still works locally but behaves weird on replit.
