let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

module.exports = mongoose.model('Article', {
    title: String,
    content: String,
    isDelete: Boolean,
});