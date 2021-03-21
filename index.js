const express = require('express');
const app = express();

app

.get('/', (req, res) => {
  res
  .set({
    'Content-Type': 'javascript; charset=utf-8'
  });
  require('fs').createReadStream('./index.js').pipe(res);
})

.use((req, res) => {
  res
  .status(404)
  .set({
    'Content-Type': 'text/html; charset=utf-8'
  })
  .send('<h1 style="aqua">Не найдено!</h1>');
})

.listen(process.env.PORT || 80);
