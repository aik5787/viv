import googlePage from "../../pages/googlePage.js";
import searchQuery from "../../fixtures/searchQuery.json";
import verificationData from "../../fixtures/vefificationData.json";

describe("Search in Google", () => {
  before(() => {
    cy.errorHandler();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://www.google.com/");
  });

  it("TC:0001 Should find the website in Google ", () => {
    googlePage.searchBar.type(`${searchQuery.text}{enter}`);

    googlePage.searchResultLink
      .should("have.length.greaterThan", 1)
      .invoke("text")
      .then((text) => {
        expect(text.toLowerCase()).to.contain(searchQuery.text);
      });
  });
});


