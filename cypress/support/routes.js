class Routes{

    as = {
        postArticles:'POSTArticles',
        getArticlesTitle:'GETArticlesTitle',
        getArticlesTitleComents:'GETArticlesTitleComents'

    }

    init(){
        cy.server()
        cy.route('POST', '**/api/articles').as(this.as.postArticles);
        cy.route('GET', '**/api/articles/**-Desafio-Title-**/comments').as(this.as.getArticlesTitle);
        cy.route('GET', '**/api/articles/**-Desafio-Title-**/comments').as(this.as.getArticlesTitleComents);
    }

}

export default new Routes();