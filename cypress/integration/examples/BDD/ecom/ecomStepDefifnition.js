/// <reference types="Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/pageObjects/HomePage";
import ProductsPage from "../../../../support/pageObjects/ProductsPage";
import CartPage from "../../../../support/pageObjects/CartPage";
import AddressPage from "../../../../support/pageObjects/AddressPage";
const homePage = new HomePage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();
const addressPage = new AddressPage();
let name;

Given("I navigate to Ecommerce website", () => {
  cy.visit(Cypress.env("url") + "/angularpractice/");
});

When("I add items to cart", function () {
  homePage.getShopLink().click();
  this.data.products.forEach((productName) => {
    cy.selectProduct(productName);
  });
  productsPage.checkOutButton().click();
});

And("I validate the toatal price", () => {
  let sum = 0;
  cy.get("tr td:nth-child(4) strong")
    .each((el, list, index) => {
      const actualAmount = el.text();
      let res = actualAmount.split(" ");
      res = res[1].trim();
      sum = Number(sum) + Number(res);
    })
    .then(() => {
      cy.log(sum);
    });

  cy.get('td[class="text-right"]').then((el) => {
    const totalAmount = el.text();
    let total = totalAmount.split(" ");
    total = total[1].trim();
    expect(Number(sum)).to.equal(Number(total));
  });
});

Then("Select the scountry and verify the message", () => {
  cartPage.checkOutButton().click();
  addressPage.typeCountryAndPurchase();
  addressPage.validateMessage(".alert", "Success");
});

When("I fill the form details", function (dataTable) {
  name = dataTable.rawTable[1][0];
  homePage.getEditText().type(dataTable.rawTable[1][0]);
  homePage.getGender().select(dataTable.rawTable[1][1]);
});
And("Validate the forms behaviour", function () {
  homePage.getTwoWayDataBinding().should("have.value", name);
  cy.get('input[name="name"]:nth-child(2)').should(
    "have.attr",
    "minlength",
    "2"
  );
  homePage.getDisabledCheckbox().should("be.disabled");
});
Then("Select the shop page", () => {
  homePage.getShopLink().click();
});