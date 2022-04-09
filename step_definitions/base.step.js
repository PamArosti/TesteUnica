import { Then } from "cypress-cucumber-preprocessor/steps";
const basePage = require('../page_objects/base.page');

Then('I open the {string}', page => {
	basePage.openUrl(page);
});

Then('I will search for {string}', html_data => {
	basePage.searchFor(html_data);
});

Then('I check the results on the page {string}', (html_data) => {
	basePage.checkResults(html_data);
});

Then('I will check that android quick start should not be on the list', () => {
	basePage.checkInexistentResultsOnTheList();
});

Then('I check that the data is not exist on the page {string}', (text) => {
	basePage.checkInexistentDataOnTheList(text);
});

Then('I will click on shop button', () => {
	basePage.clickOnShopButton();
});

Then('I will check the menu categories', () => {
	basePage.checkMenuCategories();
});

Then('I will check that Thinking in HTML should be on the list and I will click on read more {string}', (text) => {
	basePage.verifyTheContent(text);
});

Then('I will click on my account button', () => {
	basePage.clickOnMyAccountButton();
});

Then('I will create a new account with {string} and {string}', (email, password) => {
	basePage.createANewAccount(email, password);
});

