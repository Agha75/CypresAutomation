/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductsPage from '../../support/pageObjects/ProductsPage'
import CartPage from '../../support/pageObjects/CartPage'
import AddressPage from '../../support/pageObjects/AddressPage'

describe('framework',()=>{
    before(()=>{
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })
    it('test case 01', function(){
        //create object for page class
        const homePage=new HomePage()
        const productsPage=new ProductsPage()
        const cartPage=new CartPage()
        const addressPage=new AddressPage()
        //cy.visit('https://rahulshettyacademy.com/angularpractice/');
        //Getting URL from cypress.json
        //cy.visit(Cypress.env('url'));
        //Use way is this way Domain will remain same and path will change vice versa
        cy.visit(Cypress.env('url') + "/angularpractice/")

        homePage.getEditText().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        //To check the vaidation on attribute
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        //To check element is disabled
        homePage.getDisabledCheckbox().should('be.disabled')
        homePage.getShopLink().click()

        //To avaoid calling function multiple time and sending parameter like below
        // cy.selectProduct('Nokia Edge')
        // cy.selectProduct('Blueberry')

        //we will put our data in array in fixture and then call it and then try for.each on that array
        this.data.products.forEach(productName => {
            cy.selectProduct(productName)
        })
        productsPage.checkOutButton().click()

        let sum=0;
        cy.get('tr td:nth-child(4) strong').each((el,list,index)=>{
            const actualAmount=el.text()
            let res=actualAmount.split(' ')
            res=res[1].trim()
            sum=Number(sum)+Number(res)
        }).then(()=>{
            cy.log(sum)
        })

        cy.get('td[class="text-right"]').then((el)=>{
            const totalAmount=el.text()
            let total=totalAmount.split(' ')
            total=total[1].trim()
            expect(Number(sum)).to.equal(Number(total))
        })

        cartPage.checkOutButton().click()
        addressPage.typeCountryAndPurchase()
        addressPage.validateMessage('.alert','Success')
        

    })
})