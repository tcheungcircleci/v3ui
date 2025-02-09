import { generatePath } from 'react-router-dom';

it('creates new account with first deposit of SNX', () => {
  cy.on('window:before:load', (win) => {
    win.sessionStorage.TERMS_CONDITIONS_ACCEPTED = 'true';
  });

  cy.connectWallet().then(({ address }) => {
    cy.task('setEthBalance', { address, balance: 100 });
    cy.task('getSnx', { address, amount: 100 });
  });

  cy.viewport(1000, 800);

  const path = generatePath('/deposit/:collateralSymbol/:poolId', {
    poolId: '1',
    collateralSymbol: 'SNX',
  });
  cy.visit(`/#${path}`);

  cy.get('[data-testid="deposit amount input"]').type(`20`);

  cy.get('[data-testid="deposit collateral"]').should('be.enabled').click();

  cy.get('[data-testid="deposit modal"]')
    .should('include.text', 'Approve SNX transfer')
    .and('include.text', 'Delegate SNX')
    .and('include.text', 'This will deposit and delegate 20 SNX to Spartan Council Pool.');

  cy.get('[data-testid="deposit confirm button"]').should('include.text', 'Start').click();

  cy.get('[data-testid="deposit confirm button"]')
    .should('include.text', 'Processing...')
    .and('be.disabled');

  cy.get('[data-testid="deposit confirm button"]')
    .should('include.text', 'Done')
    .and('be.enabled')
    .click();

  cy.get('[data-testid="deposit modal"]').should('not.exist');

  cy.get('[data-testid="current account id"]').then((element) => {
    const accountId = element.attr('data-account-id');
    cy.wrap(accountId).as('accountId');
  });

  cy.get('@accountId').then((accountId) => {
    cy.url().should('include', `accountId=${accountId}`);
  });

  cy.get('[data-action="borrow"][data-active="true"]').should('include.text', 'Borrow');

  cy.location('hash').should('include', 'positions');
});
