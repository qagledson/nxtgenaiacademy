/// <reference types="cypress"/>

import MouseeventPage from '../pages/MouseeventPage.cy';
import '../support/index'

describe('Funcionalidade - Interagir com Mouse Event', () => {
    const mouseeventPage = new MouseeventPage()

    //Hooks beforeEach - é executado antes de cada teste
    beforeEach(() => {
        cy.visit('mouseevent/')
    });

     //Hooks beforeEach - é executado antes de cada teste
     afterEach(() => {
        cy.screenshot()
    });

    it('Exibir tooltip ao passar o mouse sobre o campo de texto', () => {
        mouseeventPage.verificarMensagem()        
    });

    it('Realizar um double click no botão "Double Click Me"', () => {
        mouseeventPage.doubleClick()
    });

    it('Realizar apenas um click no botão "Double Click Me"', () => {
        mouseeventPage.oneClick()
    });

    it('Exibir menu de contexto ao clicar com o botão direito no botão "Right Click Me"', () => {
        mouseeventPage.clickMouseBotaoDireito()
    });

    it('Clicar com o botão esquerdo do mouse no botão "Right Click Me"', () => {
        mouseeventPage.clickBotaoEsquerdo()
    });
   
    it('Mover o card "Drag Me" para o campo "Drop Here"', () => {
        mouseeventPage.arrastarCardDragMe()
    });

    it('Mover o card "Drag Me" para o campo de texto', () => {
        mouseeventPage.arrastarParaQualquerLugar()
    });

    });