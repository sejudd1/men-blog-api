var express = require('express'),
    apiRouter = express.Router(),
    articlesController = require('../controllers/articles'),
    Article = require('../models/article');
apiRouter.route('/articles')
    .post(articlesController.create)
    .get(articlesController.index)   	
apiRouter.route('/articles/:article_id')
    .get(articlesController.show)
    .patch(articlesController.update)
    .delete(articlesController.destroy);
module.exports = apiRouter;