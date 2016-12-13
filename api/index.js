const express = require('express');
const fs = require('mz/fs');
const co = require('co-express');

const app = express();
const port = 3000;
const imagePath = 'images';
const baseURL = req => `${req.protocol}://${req.hostname}:${port}`;
const imageURL = req => `${baseURL(req)}/images`;
const jpgsOnly = file => file.match(/\.jpe?g$/);

app.use('/images', express.static(imagePath));

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
    files.forEach(file => urls.push(`${imageURL(req)}/${directory}/${file}`));
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

app.listen(3000);
