const el = require('./elements').ELEMENTS

let Chance = require('chance')
let chance = new Chance()

class cadastro{
    acessoRegistro(){
     // acessa a tela de registro
     cy.visit('register')}

    preenchimentoDoFormularioDeRegistro(){
     // preenche o formulário de registro
     cy.get(el.inputName).type(chance.first() + chance.last())
     cy.get(el.inputEmail).type(chance.email())
     cy.get(el.inputPassword).type('12345678')}

     submeterCadastro(){
     // submeter cadastro
     cy.get('button.btn-primary').click()}

}


export default new cadastro();