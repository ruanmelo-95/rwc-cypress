/// <reference types="cypress" />

import articles from '../support/pages/articles'
import Routes from '../support/routes'

context('Publicação', () => {
    
beforeEach(() => {
  Routes.init()
  
    // Preparação
    cy.backgroundLogin()
   articles.acessarFormularioDeNovaPublicacao()

});
   it('Criar uma nova publicação', () => {
        // Execução
articles.preencherFormulario()
articles.submeterPublicacao()


  // Verificação/ Validação

  articles.verificarSeAPublicacaoFoiCriadaComSucesso()


      
// AAA => Arrange Act Assert
// PAV => Preparação Ação e Verificação/Validação

 });
});