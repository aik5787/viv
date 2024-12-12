class ContactPage {
    get nameInput() {return cy.get('[data-name="Name"]')}
    get emailInput() {return cy.get('[data-name="Email"]')}
    get messagePlaceHolder() {return cy.get('[data-name="field"]')}
    get submitButton() {return cy.get('[value="Submit"]]')}

    sendMessage(name,email,message) {
        this.nameInput.type(name)
        this.emailInput.type(email)
        this.messagePlaceHolder.type(message)
    }
}
export default new ContactPage()