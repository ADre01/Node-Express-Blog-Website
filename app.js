var express = require('express');
var http = require('http');
var app = express();
var routes = require('./routes');
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');




//Routes
http.createServer(app).listen(process.env.PORT || 3000, function(){
   console.log("Server is running on port 3000");
});


//home
app.get('/', routes.home);

//Single Movies
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

//Not Found Page
app.get('/*', routes.notFound);

app.get('/about', routes.about);
