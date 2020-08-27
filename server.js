var express = require('express');
	config = require('./server/configure');
	app = express(),
	mongoose = require('mongoose');

app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app = config(app);

mongoose.connect('DB URL',
	{ useNewUrlParser : true, useUnifiedTopology : true },
	(err) => {
		if(err) return console.error(err);
	}
);
mongoose.connection.on('open', function() {
	console.log('Mongoose connected.');
});
//app.get('/', function(req,res) {
//	res.send('Hello World');
//});

app.listen(app.get('port'), function() {
	console.log('Server up:' + app.get('port'));
});
