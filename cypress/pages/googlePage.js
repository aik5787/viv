class GooglePage {
    get searchBar() {return cy.get('[name="q"]')}
    get searchResultLink() {return cy.get('[jsname="UWckNb"]')}
}
export default new GooglePage()
