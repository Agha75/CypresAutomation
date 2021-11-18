/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Iframes',()=>{
    it('test case 01', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="#/mentorship"]').eq(0).click()
        cy.iframe().find('.pricing-title.text-white.ls-1').should('have.length',2)
       
    })
})