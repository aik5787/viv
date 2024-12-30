import contactPage from "../../pages/contactPage.js"
import messageData from "../../fixtures/messageData.json"
import verificationData from "../../fixtures/verificationData.json";

describe ("Contact Page Tests", () => {
    beforeEach(() => {
        cy.visit('/contact-us')
    })

    it("TC:0005 Should load the Contact Page with correct title and URL", () => {
        cy.title().should("eq", verificationData.contactPageTitle);
        cy.url().should("include", verificationData.contactPageUrl);
      });

    it ('TC:0006 Should fill out and verify the message form', () => {
        contactPage.sendMessage(messageData.name,messageData.email,messageData.message)

        contactPage.emailInput.should('have.value', messageData.email)
    })

})