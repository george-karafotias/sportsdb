const express = require('express');
const app = express();

app.use(express.static('./dist/sportsdb'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/sportsdb/' }
    );
});

app.listen(process.env.PORT || 8080);