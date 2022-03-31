//main server file for "npm run server-dev"
const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../public'));
app.use(express.json());



const port = 3000;

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening on port ${port}`);
})