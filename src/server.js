/*const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.js'));
 });

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });*/

/*const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/index.html'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 3000);*/