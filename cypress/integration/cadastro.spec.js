/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro'

let Chance = require('chance')
let chance = new Chance()

context('Casdastro', () => {
    it('Cadastrar um novo usuário', () => {
        cadastro.acessoRegistro()
        cadastro.preenchimentoDoFormularioDeRegistro()
        cadastro.submeterCadastro()
       

    });
});