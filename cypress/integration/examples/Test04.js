/// <reference types="Cypress" />

describe('Alerts',()=>{
    it('test case 01', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click()

        //Validate alerts ok alerts
        cy.on('window:alert', (str)=>{
             //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        
        cy.get('[value="Confirm"]').click()

        //Validate alerts confirm alerts
        cy.on('window:confirm', (str1)=>{
            //Mocha
            expect(str1).to.equal('Hello , Are you sure you want to confirm?')
        })


        //Invoke is used to invoke function
        //removeAttr is jquery function it is used to remove attribuite from DOM of any element
        //Doing this just because to open link in same tab not in other tab because cypress does not allow child tabs
        cy.get('#opentab').invoke('removeAttr','target').click();

        //url validation
        cy.url().should('include','rahulshettyacademy')

        //go is used for browser actions
        cy.go('back')

        
        //url validation
        cy.url().should('include','AutomationPractice')



    })
})