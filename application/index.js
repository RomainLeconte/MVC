let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let session = require('express-session');

global.JSONfn = require("json-fn");

app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.set("views", __dirname + "/Views/");
app.use(express.static('public'));
app.use(session({
	secret: 'monsupermdp'
}));

let controllers = {
	page: require(__dirname + '/Controllers/Page.js'),
	user: require(__dirname + '/Controllers/User.js'),
	article: require(__dirname + '/Controllers/Article.js')
}

app.get('/', controllers.page.home);
app.get('/login', controllers.page.login);
app.get('/register', controllers.page.register);
app.get('/profil', controllers.page.profil);
app.get('/logout', controllers.page.logout);
app.get('/new-article', controllers.page.newArticle);
app.get('/edit-article', controllers.page.editArticle);
app.get('/admin-article', controllers.page.article);

app.post('/user/login', controllers.user.login);
app.post('/user/register', controllers.user.register);
app.put('/user/update', controllers.user.update);
app.get('/user/forget', controllers.user.forget);
app.put('/user/forget', controllers.user.forget);

app.get('/article/', controllers.article.find);
app.get('/article/:id', controllers.article.findByID);
app.post('/article/', controllers.article.create);
app.put('/article/', controllers.article.update);
app.delete('/article/:id', controllers.article.delete);

app.get('*', controllers.page.error);

app.listen(1337);