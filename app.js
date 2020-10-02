const express = require('express');
const axios = require('axios');
const routes = require('./routes');

const port = 3000;

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
