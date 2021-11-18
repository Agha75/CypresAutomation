class HomePage{
    getEditText(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding(){
       return cy.get('input[name="name"]:nth-child(1)')
    }
    getGender(){
        return cy.get('select')
    }
    getShopLink(){
        return cy.get(':nth-child(2) > .nav-link')
    }
    getDisabledCheckbox(){
        return cy.get('input[value="option3"]')
    }
}
export default HomePage