const toggleMenuSelector = '[data-testid="toggle-menu"]';
const largeMenuSelector = '[data-testid="large-menu"]';

describe("NavBar", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "You did it!");
  });

  it("renders the logo", () => {
    cy.get('[data-testid="logo"]').should("be.visible");
  });

  it("renders the collapsed menu when screen is smaller than 768px", () => {
    cy.viewport("iphone-3"); // iphone-3	320*480
    cy.get(toggleMenuSelector).should("be.visible");
  });

  it("should not render the collapsed menu when the screen is bigger than or equals to 768px", () => {
    cy.viewport("ipad-mini"); // ipad-mini	768	1024
    cy.get(toggleMenuSelector).should("not.be.visible");
  });

  it("should not render the expanded menu when the screen is smaller than 768x", () => {
    cy.viewport("iphone-3"); // iphone-3 320*480
    cy.get(largeMenuSelector).should("not.be.visible");
  });

  it("should render the expanded menu when the screen is bigger than or equals to 768x", () => {
    cy.viewport("ipad-mini"); // ipad-mini	768	1024
    cy.get(largeMenuSelector).should("be.visible");
  });

  it("should render the expanded menu options when the screen is bigger than or equals to 768x", () => {
    cy.viewport("ipad-mini"); // ipad-mini	768	1024
    cy.get('[data-testid="large-menu-option-characters"]').should("be.visible");
    cy.get('[data-testid="large-menu-option-locations"]').should("be.visible");
    cy.get('[data-testid="large-menu-option-episodes"]').should("be.visible");
  });
});
