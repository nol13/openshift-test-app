var express  = require('express');
var app = express();

app.get('/', function(req,res){
    res.send("rebatebus rulez");
});

app.listen(process.env.PORT || 8080);
