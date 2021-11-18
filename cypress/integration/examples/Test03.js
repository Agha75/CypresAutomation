/// <reference types="Cypress" />

describe('Check boxes, Dropdowns and visible and not visible elements',()=>{
    it('test case 01', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //check single box
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
         //uncheck single box
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1');
         //check multiple box
        cy.get('input[type="checkbox"]').check(['option1','option3']).should('be.checked');
       
        
        //Static dropdowns
        cy.get('select').select('option2').should('have.value','option2')

        //Dynamic Dropdown
        cy.get('#autocomplete').type('Pa')
        cy.get('.ui-menu-item').find('.ui-menu-item-wrapper').each(($el,$index,$list)=>{
           // const countryText=$el.text();
            if($el.text() === 'Pakistan'){
                $el.click();
            }
        })
        cy.get('#autocomplete').should('have.value','Pakistan');


        //Validate visible and not visible elements
        cy.get('#displayed-text').should('be.visible','Pakistan');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible','Pakistan');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible','Pakistan');

        //For Radio button check and click both work
        cy.get('[value="radio2"]').check().should('be.checked');
    })
})