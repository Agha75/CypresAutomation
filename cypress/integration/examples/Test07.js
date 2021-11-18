/// <reference types="Cypress" />

describe('Grab value of Attribute',()=>{
    it('test case 01', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        cy.get('#opentab').then((el)=>{
            const secondDomain=el.prop('href')
            cy.log(secondDomain);
            cy.visit(secondDomain)
        })
    })
})