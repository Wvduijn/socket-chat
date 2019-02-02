const path = require('path');
const express = require('express');

const clientPath = path.join(__dirname, '../client');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(clientPath));

app.listen(3000, () => {
    console.log(`server is up at port ${port}`);
})

