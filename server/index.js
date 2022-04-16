const cors = require('cors');
const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../public'));
app.use(express.json());

// I (Andrew) have to use cors with all of my apps, my computer has issues without it.
// If it breaks anything for you, lmk and we can figure out how to make it work for all of us
app.use(cors());



const port = 3000;

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening on port ${port}`);
});