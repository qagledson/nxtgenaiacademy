import 'cypress-drag-drop'

class MouseeventPage {
  
      verificarMensagem() {
        // Seletor do campo onde será verificada a mensagem
        const campoFirstName = 'input[title="Enter First Name"]';
      
        // Mensagem que deverá ser exibida
        const mensagemAguardada = 'Enter First Name';
      
        // Trigger para simular o evento mouseover
        cy.get(campoFirstName).trigger('mouseover');
        cy.get(campoFirstName).should('be.visible'); // Certifica-se de que o campo está visível
        cy.wait(4000)

        // Validando o texto do campo
        cy.get(campoFirstName).invoke('prop', 'title').should('eq', mensagemAguardada);

        //Validando a mensagem enviada pelo popover
        cy.get(campoFirstName).invoke('prop', 'validationMessage').should((text)=>{
          expect(mensagemAguardada) }) 
      }
      
      oneClick() {
        //Identifica o botão pelo ID e clica duas vezes sobre ele.
        cy.get('#dblclick').should('be.visible').click()
      
        //Tempo de espera para ver a mensagem após clicar no botão duas vezes
        cy.wait(2000)      
      }

      clickBotaoEsquerdo() {
        //Identifica o botão pelo ID e clica com o botão esquerdo.
        cy.get('#rightclick').click()
      
        //Tempo de espera
        cy.wait(2000)  
      }

      doubleClick() {
        //Identifica o botão pelo ID e clica duas vezes sobre ele.
        cy.get('#dblclick').should('be.visible').dblclick()
       
        //Tempo de espera para ver a mensagem após clicar no botão duas vezes
        cy.wait(2000) 
        
        //Valida através da mensagem se o botão foi clicado 2 vezes.
        cy.contains('p', "Double Click Action is Performed").should('be.visible')
      }

      clickMouseBotaoDireito() {
        // Identifica o botão pelo ID e utiliza o Trigger para simular o evento contextmenu (botão direito)
        cy.get('#rightclick').trigger('contextmenu');
        
        //Tempo de espera para ver as opções exibidas após o clique com o botão direito do mouse
        cy.wait(2000) 
        
        //Valida através da mensagem se o botão foi clicado 2 vezes.
        cy.contains('ul', "Registration Form Alert Popup Mouse Event").should('be.visible')
      }     
      
      arrastarCardDragMe(){
        // Objeto DataTransfer, que é usado para carregar dados durante operações de arrastar e soltar.
        const dataTransfer = new DataTransfer()
      
        // Seleciona o elemento que será arrastado (draggableElement) e dispara um evento 'dragstart'
        // O objeto de evento 'dragstart' inclui a propriedade 'dataTransfer' com o objeto criado anteriormente
        cy.get('#draggableElement')
          .trigger('dragstart', { dataTransfer })
      
        // Seleciona o elemento de destino onde o elemento será solto (droppableElement) e dispara um evento 'drop'
        // O objeto de evento 'drop' também inclui o 'dataTransfer' que é compartilhado entre os eventos de arrastar e soltar
        cy.get('#droppableElement')
          .trigger('drop', { dataTransfer })
        
          //Tempo de espera para ver o card no local transferido
        cy.wait(2000) 

        // Verifica se o card Drag Me está no local transferido
        cy.get('div[class="draggable"]').contains('Drag Me').should('be.visible')
    }
    
    arrastarParaQualquerLugar(){
      // Objeto DataTransfer, que é usado para carregar dados durante operações de arrastar e soltar.
      const dataTransfer = new DataTransfer()
    
      // Seleciona o elemento que será arrastado (draggableElement) e dispara um evento 'dragstart'
      // O objeto de evento 'dragstart' inclui a propriedade 'dataTransfer' com o objeto criado anteriormente
      cy.get('#draggableElement')
        .trigger('dragstart', { dataTransfer })
    
      // Seleciona o elemento de destino onde o elemento será solto (droppableElement) e dispara um evento 'drop'
      // O objeto de evento 'drop' também inclui o 'dataTransfer' que é compartilhado entre os eventos de arrastar e soltar
      cy.get('#textbox')
        .trigger('drop', { dataTransfer })
      
        //Tempo de espera para ver o card no local transferido
      cy.wait(2000) 

  }   

}

export default MouseeventPage;