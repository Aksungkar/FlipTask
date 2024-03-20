/// <reference types ="cypress"/>

describe('My first Test,  cy.get()' , () => {
    it('Должен выполнить арифметическую операцию и валидировать результать', ()=>{
        const operand1: number = 5;
        const operand2: number = 7;

        const result: number = operand1 + operand2;

        expect(result).to.equal(12);
    })

    });


















  //   cy.get('#content > div:nth-child(2) > div.table_m > div').should('have.length.gt',0)
  //   cy.get('#content > div:nth-child(2) > div.table_m > div').then($products => {
  //     // Get the number of products
  //     const numProducts = $products.length;

  //     // Generate a random index within the range of available products
  //     const randomIndex = Math.floor(Math.random() * numProducts);

  //     // Select the random product using its index
  //     const randomProduct = $products.eq(randomIndex);

  //     // Get the product title
  //     const productTitle = randomProduct.find('.product-list-item__title').text();

  //     // Output the selected product title
  //     cy.log(`Selected Product: ${productTitle}`);

  //     // Click on the random product
  //     randomProduct.click();
  //     cy.get('#content > div:nth-child(2) > div.table_m > div > div:nth-child(1) > div > div.hiden > input').click()

  //   });
