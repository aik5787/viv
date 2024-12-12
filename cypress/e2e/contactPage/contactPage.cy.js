import contactPage from "../../pages/contactPage.js"
import messageData from "../../fixtures/messageData.json"
import verificationData from "../../fixtures/vefificationData.json";

describe ("Testing Contact Page", () => {
    beforeEach(() => {
        cy.visit('/contact-us')
    })

    it("TC:0005 Should successfully load the Contact Page title and URL", () => {
        cy.title().should("eq", verificationData.contactPageTitle);
        cy.url().should("include", verificationData.contactPageUrl);
      });

    it ('TC:0006 Should fill out the message form', () => {
        contactPage.sendMessage(messageData.name,messageData.email,messageData.message)

        contactPage.emailInput.should('have.value', messageData.email)
    })

})