describe('My First Test', function () {
  it('Add Element to Dashboard', function () {
    cy.visit('https://singlespa-intermix-demo.netlify.app/analytics#');
    cy.wait(5000);
    cy.get(
      '.dashboard--MuiButtonBase-root:nth-child(4) .dashboard--MuiSvgIcon-root'
    ).click();
    cy.get('.dashboard--MuiSelect-select.dashboard--MuiSelect-select').click();
    cy.get('.dashboard--MuiButtonBase-root:nth-child(13)').click();
    cy.get(
      '.dashboard--MuiButtonBase-root:nth-child(2) > .dashboard--MuiButton-label'
    ).click();
    cy.contains('Orders Complete');
  });

  it('Visit Landing Page', function () {
    cy.visit('https://singlespa-intermix-demo.netlify.app');
    cy.wait(5000);
    cy.contains('Add Alert').click();
  });

  it('Visit all routes', function() {
    cy.visit('https://singlespa-intermix-demo.netlify.app/');
    cy.wait(5000);
    cy.contains('Logistics');
    cy.get('.intermix--MuiButtonBase-root:nth-child(3) > .intermix--MuiListItemIcon-root > .intermix--MuiSvgIcon-root').click();
    cy.wait(5000);
    cy.contains('Warehouse');
    cy.get('.intermix--MuiButtonBase-root:nth-child(4) > .intermix--MuiListItemIcon-root > .intermix--MuiSvgIcon-root').click();
    cy.contains('Orders');
    cy.contains('Manage Orders').click();
    cy.contains('You need to login to view this page');
  })
});
