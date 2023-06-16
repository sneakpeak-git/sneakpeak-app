/* eslint-disable cypress/no-unnecessary-waiting */
//all test wait at the end to create a more legible video
const host = "http://localhost:5000";
const waitPeriod = 2000;
const shortWaitPeriod = 1100;

describe("Basic interaction tests", () => {
  it("visits the homepage", () => {
    cy.visit(host);
    cy.get(".logoTitle").should("exist");
    cy.wait(waitPeriod);
  });
  it("visits the all sneakers page", () => {
    cy.visit(`${host}/sneakers`);
    cy.get(".listContainer")
      .should("be.visible")
      .find(".itemContainer")
      .should("have.length.greaterThan", 0);
    cy.wait(waitPeriod);
  });
  it("visits the first sneaker page", () => {
    cy.visit(`${host}/sneakers`);
    cy.get(".listContainer")
      .should("be.visible")
      .find(".itemContainer")
      .first()
      .click();
    cy.get(".sneakerName").should("be.visible");
    cy.wait(waitPeriod);
  });
});

describe("404 handling tests", () => {
  it("visits a non-existent page and checks if the app handles it correctly", () => {
    cy.visit(`${host}/nonexistent`);
    cy.get("#404text").should("be.visible");
    cy.wait(shortWaitPeriod);
  });
  it("requests a non-existent sneaker and checks if the app handles it correctly", () => {
    cy.visit(`${host}/sneakers/0`);
    cy.get("#404sneaker").should("be.visible");
    cy.wait(shortWaitPeriod);
  });
});

describe("Logged in tests", () => {
  it("logs in and views profile", () => {
    cy.visit(`${host}/login`);
    cy.login("test@sneak.peak", "sptest");
    cy.wait(waitPeriod);
    cy.visit(`${host}/profile`);
    cy.get(".username").should("be.visible");
    cy.wait(waitPeriod);
  });
  it("logs in and tries to access /login", () => {
    cy.visit(host);
    cy.login("test@sneak.peak", "sptest");
    cy.wait(shortWaitPeriod);
    cy.visit(`${host}/login`);
    cy.url().should("eq", `${host}/profile`);
    cy.wait(waitPeriod);
  });
  it("logs in and logs out", () => {
    cy.visit(host);
    cy.login("test@sneak.peak", "sptest");
    cy.wait(shortWaitPeriod);
    cy.visit(`${host}/profile`);
    cy.wait(shortWaitPeriod);
    cy.get(".logout-link").click();
    cy.url().should("eq", `${host}/`);
    cy.wait(waitPeriod);
  });
});
