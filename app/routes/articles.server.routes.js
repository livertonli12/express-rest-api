var articles = require('../../app/controllers/article.server.controller');

module.exports = function(app){
    app.route('/api/articles')
        .get(articles.list)
        .post(articles.create);

    app.route('/api/articles/:articleId')
        .get(articles.read)
        .put(articles.update)
        .delete(articles.delete);

    app.param('articleId', articles.articleByID);
};
