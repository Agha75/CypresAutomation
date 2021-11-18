/// <reference types="Cypress" />

describe('Cross domain',()=>{
    it('test case 01', ()=>{
        cy.visit('http://www.qaclickacademy.com/');
        
        //cross domain request
        cy.get('ul li:nth-child(5)')
        cy.contains('Practice').click()
       //this can be done by setting chromewebsecurity:false in cypress.json file

    //    cy.get('ul li:nth-child(5)')
    //    cy.contains('Practice').invoke('removeAttr','href').click();
    })
})