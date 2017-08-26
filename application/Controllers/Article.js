let ArticleModel = require('../Models/Article.js');

class Article {

    find(req, res) {
        ArticleModel.find(function (err, articles) {
            if (!err) {
                res.json(articles);
            }
        });
    }

    findByID(req, res) {
        ArticleModel.findOne({
            _id: req.params.id
        }, function (err, article) {
            if (!err) {
                res.json(article);
            }
        });
    }

    create(req, res) {
        let data = req.body;
        if (data.title && data.content) {
            data.isDelete = false;
            let Article = new ArticleModel(data);
            Article.save(function (err) {
                res.json(!err ? true : false);
            });
        } else {
            res.json(false);
        }
    }

    update(req, res) {
        let data = req.body;
        if (data.id && data.title && data.content) {
            ArticleModel.findOneAndUpdate({
                _id: data.id,
                isDelete: false
            }, data, function (err) {
                res.json(!err ? true : false);
            });
        } else {
            res.json(false);
        }
    }

    delete(req, res) {
        if (req.params.id) {
            ArticleModel.findOneAndUpdate({
                _id: req.params.id,
                isDelete: false
            }, {
                isDelete: true
            }, data, function (err) {
                res.json(!err ? true : false);
            });
        } else {
            res.json(false);
        }
    }
}

module.exports = new Article();