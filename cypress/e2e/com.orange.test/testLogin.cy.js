describe('Login Suite', () => {

  it('Login Testcase', () => {

  

    cy.fixture('credintial.json').then((data)=>{


    cy.loginOranageWebsite(data.username,data.password);

    })


    

    
  });

});