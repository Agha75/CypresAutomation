/// <reference types="Cypress" />
describe('framework',()=>{
    it('test case 01', function(){
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{

          "name":"Syed Book",
          "isbn":"abcdef",
          "aisle":"757",
          "author":"Agha"
          }
          ).then(function(reponse){
            expect(reponse.body).to.have.property("Msg","successfully added")
            expect(reponse.status).to.eq(200)
          })
        
    })
})