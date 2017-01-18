const express = require('express');
const fs = require('mz/fs');
const co = require('co-express');
const sizeOf = require('image-size');
const recursive = require('recursive-readdir');
const path = require('path');

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

app.get('/feed', (req, res) => {
  recursive(imagePath, ['.DS_Store', '*_thumb.jpg'], (err, files) => {
    const images = files.map((file) => {
      const { height, width } = sizeOf(file);
      const URL = file.replace('images/', '');

      return {
        height,
        width,
        thumbURL: URL.replace('.jpg', '_thumb.jpg'),
        fullURL: URL,
      };
    });

    res.send(images.sort((a, b) => {
      if (a.thumbURL < b.thumbURL) {
        return 1;
      } else if (a.thumbURL > b.thumbURL) {
        return -1;
      }

      return 0;
    }));
  });
});

app.get('/feed/:album', co(function* album(req, res) {
  const urls = [];

  let files = yield fs.readdir(`${imagePath}/${req.params.album}`);
  files = files.filter(jpgsOnly);
  files.forEach(file => urls.push(`${req.params.album}/${file}`));

  res.send(urls);
}));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port);
