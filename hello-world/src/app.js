const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello world get!'));
app.post('/', (req, res) => res.send('Hello world post'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});