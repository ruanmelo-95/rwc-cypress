import { ELEMENTS } from './elements'

let Chance = require ('chance')
let chance = new Chance()

const el = require('./elements').ELEMENTS

import Routes from '../../routes'


class Articles {

acessarFormularioDeNovaPublicacao(){
    cy.get(el.linkNovaPublicacao).click()
}

    preencherFormulario(){
        // preencher o formulário do artigo
        cy.get(el.inputTitle).type(chance.word() + ' Desafio Title')
        cy.get(el.inputDescription).type('Cypress')
        cy.get(el.textAreaContent).type(chance.sentence())
        cy.get(el.inputTags).type('cypress')
    }
submeterPublicacao(){

    // submeter o artigo
        cy.get(el.buttonSubmit).click()

  
  }
verificarSeAPublicacaoFoiCriadaComSucesso(){

    cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
        expect(postArticlesResponse.status).to.eq(200)
    })
    
//   cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesResponse) => {
//         expect(getArticlesResponse.status).to.eq(200)
//     })

    cy.wait(`@${Routes.as.getArticlesTitleComents}`).then((getArticlesTitleComments) => {
        expect(getArticlesTitleComments.status).to.eq(200)
    })
}

}

export default new Articles();
