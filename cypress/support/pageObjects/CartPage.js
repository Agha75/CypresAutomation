class CartPage{
    checkOutButton(){
        return cy.contains('Checkout ')
    }
}

export default CartPage