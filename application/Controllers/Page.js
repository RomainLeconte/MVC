class Page {
	home(req, res) {
		if (req.xhr) {
			res.render("index", {
				User: req.session.User ? req.session.User : false
			});
		} else {
			res.render("master/main", {
				page: 'index',
				User: req.session.User ? req.session.User : false
			});
		}
	}
	error(req, res) {
		if (req.xhr) {
			res.render("404", {
				User: req.session.User ? req.session.User : false
			});
		} else {
			res.render("master/main", {
				page: '404',
				User: req.session.User ? req.session.User : false
			});
		}
	}
	login(req, res) {
		if (req.xhr) {
			res.render("login", {
				User: req.session.User ? req.session.User : false
			});
		} else {
			res.render("master/main", {
				page: 'login',
				User: req.session.User ? req.session.User : false
			});
		}
	}
	register(req, res) {
		if (req.xhr) {
			res.render("register", {
				User: req.session.User ? req.session.User : false
			});
		} else {
			res.render("master/main", {
				page: 'register',
				User: req.session.User ? req.session.User : false
			});
		}
	}
	forget(req, res) {
		if (req.xhr) {
			res.render("forget", {
				User: req.session.User ? req.session.User : false
			});
		} else {
			res.render("master/main", {
				page: 'forget',
				User: req.session.User ? req.session.User : false
			});
		}
	}
	profil(req, res) {
		if (req.xhr) {
			res.render("profil", {
				User: req.session.User ? req.session.User : false
			});
		} else {
			res.render("master/main", {
				page: 'profil',
				User: req.session.User ? req.session.User : false
			});
		}
	}
	article(req, res) {
		if (req.xhr) {
			res.render("article", {
				User: req.session.User ? req.session.User : false
			});
		} else {
			res.render("master/main", {
				page: 'article',
				User: req.session.User ? req.session.User : false
			});
		}
	}
	newArticle(req, res) {
		if (req.xhr) {
			res.render("newArticle", {
				User: req.session.User ? req.session.User : false
			});
		} else {
			res.render("master/main", {
				page: 'newArticle',
				User: req.session.User ? req.session.User : false
			});
		}
	}
	editArticle(req, res) {
		if (req.xhr) {
			res.render("editArticle", {
				User: req.session.User ? req.session.User : false
			});
		} else {
			res.render("master/main", {
				page: 'editArticle',
				User: req.session.User ? req.session.User : false
			});
		}
	}
	logout(req, res) {
		req.session.destroy();
		res.redirect('/');
	}
}


module.exports = new Page();