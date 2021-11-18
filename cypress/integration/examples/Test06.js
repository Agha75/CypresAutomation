/// <reference types="Cypress" />

describe('Hover and Invisible elements',()=>{
    it('test case 01', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        //Hover and click on visible elemnts using jquery function
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')


        //OR


        
        //click on invisible elements by cypress forcefully
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')
    })
})