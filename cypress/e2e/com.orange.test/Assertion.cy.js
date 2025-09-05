describe('assertion testcases',()=>{

it('assertion should and',()=>{




    cy.visit("https://the-internet.herokuapp.com/?utm_source=chatgpt.com");

    cy.get(':nth-child(1) > a').click();
    cy.xpath("//h3[text()='A/B Test Variation 1']").should('be.visible','A/B Test Variation 1')


})
it('add/remove elemnet',()=>{
  cy.visit("https://the-internet.herokuapp.com/?utm_source=chatgpt.com");

  cy.xpath("//a[text()='Add/Remove Elements']").click();
  cy.get('button').click();
  

    
})

it('have lenght usage',()=>{
  cy.visit("https://the-internet.herokuapp.com/?utm_source=chatgpt.com");

 cy.xpath('//li').should('have.length','44');
  

    
})



})