import verificationData from "../fixtures/verificationData.json";

Cypress.Commands.add("errorHandler", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});

Cypress.Commands.add("animationRequest", () => {
  cy.request("GET", verificationData.animationRequestUrl).then((response) => {
    expect(response.status).to.eq(200)
  })
})


