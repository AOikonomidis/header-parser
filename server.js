const express = require('express');
const port = process.env.PORT || 3000;

let app = express();

app.get('/', (req, res) => {
    let ip = (req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress);

    let info = {
        'IP address': ip,
        'language': req.headers["accept-language"].split(',')[0],
        'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
    };
    res.send(info);
});

app.listen(port, () => console.log(`Started on port ${port}`));
