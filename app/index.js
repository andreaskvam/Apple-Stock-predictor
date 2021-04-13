const express = require('express');
const app = express();
const db = require('./db');
const cors = require("cors");
const bodyParser = require("body-parser");

// Dont know might delete
const { spawn } = require('child_process');
const pyProg = spawn('python', ['./machineScript.py']);

app.use(cors());

app.get('/', (req, res) => {
  res.send("ok")
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let openPrice;
let highPrice;
let lowPrice;
let vol;

app.post ('/api/data', (req, res) => {
  console.log("yolo")
  openPrice = req.body.openPrice 
  highPrice = req.body.highPrice
  lowPrice = req.body.lowPrice
  vol = req.body.vol
  res.send("POST ok")
});

app.get('/api/py', (req, res) => {
  const { spawn } = require('child_process');
  const pyProg = spawn('python', ['./machineScript.py', openPrice, highPrice, lowPrice, vol]);

  pyProg.stdout.on('data', function(data) {
    console.log(data.toString());
    res.write(data);
    res.end()
  });
});

app.get('/api/svr', (req, res) => {
  const { spawn } = require('child_process');
  const pyProg = spawn('python', ['./machineScript2.py']);

  pyProg.stdout.on('data', function(data) {
    console.log(data.toString());
    res.write(data);
    res.end()
  });
});

app.get('/api/aaplClose', (req, res) => {
  const { spawn } = require('child_process');
  const pyProg = spawn('python', ['./aaplScraper.py']);

  pyProg.stdout.on('data', function(data) {
    console.log(data.toString());
    res.write(data);
    res.end()
  });
});

app.listen(5501, () => console.log('Application listening on port 5501!'))

module.exports = app