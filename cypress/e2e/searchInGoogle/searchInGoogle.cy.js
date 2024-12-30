import googlePage from "../../pages/googlePage.js";
import searchQuery from "../../fixtures/searchQuery.json";

describe("Google Search Test", () => {
  before(() => {
    cy.errorHandler();
    cy.visit("https://www.google.com/");
  });

  it("TC:0001  Should find the company name in Google search results", () => {
    googlePage.searchBar.type(`${searchQuery.text}{enter}`);

    googlePage.searchResultLink
      .should("have.length.greaterThan", 1)
      .invoke("text")
      .then((text) => {
        expect(text.toLowerCase()).to.contain(searchQuery.text);
      });
  });
});
