const express = require('express');
const connectDB = require('./config/db');
let cors = require('cors');
let bodyParser = require('body-parser');

// Express Route
const formRoute = require('./routes/form.routes');
//connecting Database
connectDB();

const app = express();
app.get('/', (req, res) => res.send('Api is Running '));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use('/forms', formRoute);

// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Connected to port ' + port);
});

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
