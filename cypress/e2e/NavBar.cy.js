const toggleMenuSelector = '[data-testid="toggle-menu"]';
const expandedMenuSelector = '[data-testid="menu-base"]';

describe("NavBar", () => {
  it("visits the app root url", () => {
    cy.visit("/");
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
    cy.get(expandedMenuSelector).should("not.be.visible");
  });

  it("should render the expanded menu when the screen is bigger than or equals to 768x", () => {
    cy.viewport("ipad-mini"); // ipad-mini	768	1024
    cy.get(expandedMenuSelector).should("be.visible");
  });

  it("should render the expanded menu options when the screen is bigger than or equals to 768x", () => {
    cy.viewport("ipad-mini"); // ipad-mini	768	1024
    cy.get('[data-testid="menu-option-characters"]').should("be.visible");
    cy.get('[data-testid="menu-option-locations"]').should("be.visible");
    cy.get('[data-testid="menu-option-episodes"]').should("be.visible");
  });

  it("visits the Characters root url", () => {
    cy.get('[data-testid="menu-option-characters"]:visible').click();
    cy.contains("h1", "Characters");
  });

  it("visits the Locations root url", () => {
    cy.get('[data-testid="menu-option-locations"]:visible').click();
    cy.contains("h1", "Locations");
  });

  it("visits the Episodes root url", () => {
    cy.get('[data-testid="menu-option-episodes"]:visible').click();
    cy.contains("h1", "Episodes");
  });

  it("visits the Home root url", () => {
    cy.get('[data-testid="menu-option-home"]').click();
    cy.contains("h1", "Rick and morty");
    cy.contains("h2", "Vue 3 + Composition API");
  });
});
