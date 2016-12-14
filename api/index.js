const express = require('express');
const fs = require('mz/fs');
const co = require('co-express');

const app = express();
const port = 80;
const imagePath = 'images';
const jpgsOnly = file => file.match(/\.jpe?g$/);

app.use(express.static('build'));
app.use(express.static(imagePath));

app.get('/albums', co(function* albums(req, res) {
  const directories = yield fs.readdir(imagePath);
  res.send(directories);
}));

app.get('/feed', co(function* feed(req, res) {
  const urls = [];

  const directories = yield fs.readdir(imagePath);
  for (let i = 0; i < directories.length; i += 1) {
    const directory = directories[i];
    let files = yield fs.readdir(`${imagePath}/${directory}`);
    files = files.filter(jpgsOnly);
    files.forEach(file => urls.push(`${directory}/${file}`));
  }

  res.send(urls);
}));

app.get('/feed/:album', co(function* album(req, res) {
  const urls = [];

  let files = yield fs.readdir(`${imagePath}/${req.params.album}`);
  files = files.filter(jpgsOnly);
  files.forEach(file => urls.push(`${imageURL(req)}/${req.params.album}/${file}`));

  res.send(urls);
}));

app.listen(port);
