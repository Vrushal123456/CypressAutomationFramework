describe('dropdown scenario',()=>{

it.skip('bootstrap dropdown',()=>{
//bootstrap dropdow google page or wikipediya

cy.visit("https://www.wikipedia.org/");
cy.get('#searchInput').type('Sachin');


cy.get('common xpath of all element').each(($ele,index,$list)=>{

if($ele.text()=="Sachin Pilot"){

    cy.wrap($ele).click();

    
}
})


})
})
