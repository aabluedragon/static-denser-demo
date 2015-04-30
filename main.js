var express = require('express'),
    staticDenser = require('static-denser'),
    app = express();

// Paths for static-denser and express.static middleware modules.
var fileSystemFolder = 'public',
    mappedDir = '/myapp';

// Chaining static-denser first, then express.static.
app.use(mappedDir, staticDenser(fileSystemFolder), express.static(fileSystemFolder));

app.listen(8080);
// Open "http://localhost:8080/myapp/index.html" in your browser.