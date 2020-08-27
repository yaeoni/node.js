var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        path = require('path');

var CommentSchema = new Schema({
	image_id: {type: mongoose.Schema.Types.ObjectId},
	email: {type: String},
	name: {type: String},
	gravatar: {type: String},
	comment: {type: String},
	timestamp: {type:Date, 'default':Date.now}
});

CommentSchema.virtual('image').set(function(image){
	this._image = image;
}).get(function() {
	return this._image;
});

module.exports = mongoose.model('Comment', CommentSchema);
