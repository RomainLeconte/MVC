let UserModel = require('../Models/User.js');

class User {
	login(req, res) {
		let data = req.body;
		if (data.email && data.password) {
			UserModel.find({
				email: data.email,
				password: data.password
			}, function (err, users) {
				if (!err && users.length === 1) {
					req.session.User = users[0];
					res.send(JSONfn.stringify({
						data: users[0],
						success: function (response) {
							location.href = '/';
						}
					}));
				} else {
					res.send(JSONfn.stringify({
						error: function (response) {
							console.log("Utilisateur non trouver");
						}
					}));
				}
			});
		} else {
			res.send(JSONfn.stringify({
				error: function (response) {
					console.log("Merci de remplire tous les champs");
				}
			}));
		}
	}
	register(req, res) {
		let data = req.body;
		if (data.email && data.password && data.nom && data.prenom) {

			UserModel.find({
				email: data.email
			}, function (err, users) {
				if (!err && users.length === 0) {
					let newUser = new UserModel(data);
					newUser.save();
					req.session.User = data;
					res.send(JSONfn.stringify({
						success: function (response) {
							console.log("Votre inscription a été effectuer");
							location.href = '/';
						}
					}));

				} else {
					res.send(JSONfn.stringify({
						error: function (response) {
							console.log("L'utilisateur existe déjà en base");
						}
					}));
				}
			});

		} else {
			res.send(JSONfn.stringify({
				error: function (response) {
					console.log("Merci de remplir tous les champs");
				}
			}));
		}
	}

	update(req, res) {
		let data = req.body;
		if (data.email && data.nom && data.prenom) {
			if (data.email !== req.session.User.email || data.email == req.session.User.email) {
				req.session.User.email = data.email;
				console.log('mail actualise');
			} else {
				console.log('mail fail');
			}
			if (data.nom !== req.session.User.nom || data.nom == req.session.User.nom) {
				req.session.User.nom = data.nom;
				console.log('nom actualise');
			} else {
				console.log('nom fail');
			}
			if (data.prenom !== req.session.User.prenom || data.prenom == req.session.User.prenom) {
				req.session.User.prenom = data.prenom;
				console.log('prenom actualise');
			} else {
				console.log('prenom fail');
			}

			if (data.oldPassword === req.session.User.password && data.oldPassword !== data.newPassword ) {
				req.session.User.password = data.newPassword;
				console.log('pass actualise');
			} else {
				console.log('Erreur dans le pass');
			}

			UserModel.findOneAndUpdate({
				_id: req.session.User._id
			}, req.session.User, function (err) {
				if (!err) {
					res.send(JSONfn.stringify({
						success: function (response) {
							console.log("Mise a jour terminer");
						}
					}));
				}
			});
		} else {
			console.log('Une erreur est survenu');
		}
	}

	forget(req, res) {
		let data = req.body;
		if (data.email && data.nom && data.prenom) {
			if (data.email == req.session.User.email) {
				console.log('mail existe');
			} else {
				console.log('mail fail');
			}
			if (data.nom == req.session.User.nom) {
				console.log('nom existe');
			} else {
				console.log('nom fail');
			}
			if (data.prenom == req.session.User.prenom) {
				console.log('prenom existe');
			} else {
				console.log('prenom fail');
			}

			if (data.email == req.session.User.email && data.nom == req.session.User.nom && data.prenom == req.session.User.prenom) {
				console.log(req.session.User.password);
			} else {
				console.log('Erreur dans le pass');
			}

			UserModel.findOneAndUpdate({
				_id: req.session.User._id
			}, req.session.User, function (err) {
				if (!err) {
					res.send(JSONfn.stringify({
						success: function (response) {
							console.log("Mise a jour terminer");
						}
					}));
				}
			});
		} else {
			console.log('Une erreur est survenu');
		}
	}


}

module.exports = new User();