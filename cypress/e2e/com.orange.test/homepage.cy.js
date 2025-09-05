describe('homepage assertion',()=>{

it('homepage assertion',()=>{


    cy.url().should('include', '/web');
cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();


cy.xpath('//div[@class="oxd-input-group__label-wrapper"]/following::input[@class="oxd-input oxd-input--active"]').type("vrushal sagane");












})






})