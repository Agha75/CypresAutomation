class AddressPage{
    typeCountryAndPurchase(){
     cy.get('#country').type('pakistan')
     cy.get('.suggestions > ul > li > a').click()
     cy.get('#checkbox2').click({force: true})
     cy.get('input[type="submit"]').click()
     return this
    }

    validateMessage(locator,message){
        cy.get(locator).then((txt)=>{
            const actualText= txt.text()
            expect(actualText.includes(message)).to.be.true
        })
        return this
    }
}

export default AddressPage