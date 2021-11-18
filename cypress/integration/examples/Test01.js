/// <reference types="Cypress" />

describe('Test suit 01',()=>{
    it('test case 01', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(3000);

        //get the visible elements on web page
        //:visible will check only visible elements on the page
        cy.get('.product:visible').should('have.length',4);

        //parent child chaining
        //find will check in the products class only it will not check whole page
        //.as is used for alias to assign locator to anyword any access it anywhere you want 
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').should('have.length',4);

        //eq is used for indexing in cypress and contains is used for assertions
        //contains will be applied only on second because of parent child chaining
        cy.get('@productsLocator').find('.product').eq(2).contains('ADD TO CART').click();

        //creating array and storing the products in array 
        let myarray=[];
        myarray=cy.get('@productsLocator').find('.product');
        myarray.each(($el, index, $list)=>{
            const products=$el.find('h4.product-name').text();
            cy.log(products)
        })
        
        
        //Doing the same with generic way
        //each is used in cypress to iterate trough an array
        cy.get('@productsLocator').find('.product').should('have.length',4)
        .each(($el, index, $list)=>{
            const vegName=$el.find('h4.product-name').text()
            //includes is used in js for sub string
            if(vegName.includes('Cashews')){
               $el.find('button').click()
            }else{
            
            }
        })

        cy.get('.brand').should('have.text','GREENKART')

        const logo=cy.get('.brand').then((logoText)=>{
            cy.log(logoText.text())
        
        })
       
        
    })
})