import verificationData from "../../fixtures/vefificationData.json";
import homePage from "../../pages/homePage.js";

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC:0002 Should successfully load the Home Page title and URL",{ tags: '@smoke' }, () => {
    cy.title().should("eq", verificationData.homePageTitle);
    cy.url().should("include", verificationData.expectedUrl);
  });

  it("TC:0003 Should successfully load animation JSON file", () => {
    cy.intercept("GET", verificationData.animationRequestUrl).as("animationRequest");

    cy.visit("/");

    cy.wait("@animationRequest").then((interception) => {
      const body = interception.response.body;
      expect(body.v).to.equal(verificationData.animationV);
      expect(body.fr).to.equal(verificationData.animationFr);
      expect(body.ip).to.equal(verificationData.animationIp);
      expect(body.op).to.equal(verificationData.animationOp);
      expect(body.layers.length).to.be.greaterThan(1);
    });
  });

  it("TC:0004 Should Hero Text (part 1) be displayed after scroll", () => {
    homePage.text1.should("have.css", "opacity", "0");
    cy.scrollTo("0%", "25%");
    homePage.text1.should("have.css", "opacity", "1");
  });
  
});
