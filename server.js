const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs')
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'video/mp4'
    })
    fs.createReadStream("./krótki filmik.mp4").pipe(res)
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
