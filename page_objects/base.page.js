const basePage = {

    openUrl: page => {
      cy.visit(page);
    },
    
    searchFor: html_data => {
      cy.get('#menu-icon').click({force:true});
      cy.get('#s').invoke('removeAttr','type').type(html_data +'{enter}');
    },

    checkResults: (html_data) => {
      cy.get('#loops-wrapper').should('contain', html_data);
    },

    checkInexistentResultsOnTheList: () => {
      cy.get('#loops-wrapper').should('not.contain', 'Android Quick Start');
    },

    checkInexistentDataOnTheList: (html_data) => {
      cy.get('.page-title').should('contain', 'Search Results for: '+html_data);
      cy.get('#content > p').should('contain', 'Sorry, nothing found.');
    },

    clickOnShopButton: () => {
      cy.get('#menu-icon').click({force:true});
      cy.get('#menu-item-40 > a').as('closeBtn')
      cy.get('@closeBtn').click({ force: true });
    },

    checkMenuCategories: () => {
      cy.get('.product-categories').should('contain','HTML');
      cy.get('.cat-item-19').click({ force: true });
    },

    verifyTheContent: (text) => {
      cy.get('.post-163').should('contain', 'Thinking in HTML');
      cy.get('.post-163 > .button').click({force:true});
      cy.get('.product_meta').should('contain', 'Category: '+text);
    },
    
    clickOnMyAccountButton: () => {
      cy.get('#menu-icon').click({force:true});
      cy.get('#menu-item-50 > a').click({force:true});
    },

    createANewAccount: (email,password) => {
      cy.get('#reg_email').type(email);
      cy.get('#reg_password').type(password);
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click({force:true});
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','From your account dashboard you can view your recent orders, manage your shipping and billing addresses and edit your password and account details.')
    }
    
};

module.exports = basePage;

