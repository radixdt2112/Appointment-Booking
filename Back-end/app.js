const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
    res.send('Hello World!dsff');
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});