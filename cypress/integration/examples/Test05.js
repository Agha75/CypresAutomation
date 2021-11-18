/// <reference types="Cypress" />

describe('Web Tables',()=>{
    it('test case 01', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        cy.get('tr td:nth-child(2)').each(($el,index,list)=>{
            const courseText=$el.text()
            if(courseText.includes('Python')){
                //next is used to grab the text of sibling element
                cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{
                   const coursePrice=price.text()
                   expect(coursePrice).to.equal('25')
                })
            }
        })
    })
})