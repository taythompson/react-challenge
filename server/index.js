const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})




const port = 3000;
app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
