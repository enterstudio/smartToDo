var express = require ('express');
var cors = require('cors');
var parser = require('body-parser');
var path = require('path');

module.exports = function (db){
var app = new express();

app.set('port', (process.env.PORT || 3000));

app.use('/static', express.static(path.join(__dirname, '/../tmp'), { maxAge: 86400000 }));

require('./routes/routeHelper.js')(app);
app.use(cors())
.use(parser.urlencoded({ extended: true}))
.use(parser.json());

require('./routes/users.server.routes.js')(app);
require('./routes/todos.server.routes.js')(app);

app.use(function(req, res, next) {
    if(req.url.match(/.+\/static/)){
        var url = req.url.match(/\/static.*/);
        res.redirect(url[0]);
    }else
        res.status(404).send('Sorry cant find that!');
});

  return app;
}
