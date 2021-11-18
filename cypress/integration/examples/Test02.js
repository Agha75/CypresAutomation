/// <reference types="Cypress" />

describe('Test suit 01',()=>{
    it('test case 01', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(3000);
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').should('have.length',4)
        .each(($el, index, $list)=>{
            const vegName=$el.find('h4.product-name').text()
            //includes is used in js for sub string
            if(vegName.includes('Cashews')){
               $el.find('button').click()
            }else{
            
            }
        })
        cy.get('.cart-icon > img').click();
        // cy.get('li.cart-item .product-info').find('.product-name:visible').should('have.length',1)
        // .each((productText,index,list)=>{
        //     const cartText=productText.find('.product-name').text()
        //     cy.log(cartText)
        // })

        let text1
        cy.get("div.product-info > p.product-name:visible").then(($elem) =>{
            text1=$elem.text()
       })

       cy.contains('PROCEED TO CHECKOUT').click();
       cy.wait(1000);
       cy.get("p.product-name:visible").then(($elemm) =>{
        let text2=$elemm.text()
        assert.equal(text1, text2, 'vals equal')
   })

       
        cy.contains('Place Order').click();
       
        
    })
})