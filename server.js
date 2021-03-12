var express = require('express');
var app = express();

app.use(express.static('./dist/pocket-post-frontend-prime'));
app.get('/*', function(req, res){
    res.sendFile('index.html', {root: 'dist/pocket-post-frontend-prime/'});
});
app.listen(process.env.PORT || 8080);
