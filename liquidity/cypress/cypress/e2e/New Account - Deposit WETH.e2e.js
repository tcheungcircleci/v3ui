import { generatePath } from 'react-router-dom';

it.skip('creates new account with first deposit of WETH', () => {
  cy.on('window:before:load', (win) => {
    win.sessionStorage.TERMS_CONDITIONS_ACCEPTED = 'true';
  });
  cy.connectWallet().then(({ address, privateKey }) => {
    cy.task('setEthBalance', { address, balance: 100 });
    cy.task('wrapEth', { privateKey, amount: 0.1 });
  });

  cy.viewport(800, 800);

  const path = generatePath('/deposit/:collateralSymbol/:poolId', {
    poolId: '1',
    collateralSymbol: 'WETH',
  });
  cy.visit(`/#${path}`);

  // Use more collateral than we have weth to invoke wrapping
  cy.get('[data-testid="deposit amount input"]').type(`0.2`);

  cy.get('[data-testid="deposit collateral"]').should('be.enabled').click();

  cy.get('[data-testid="deposit modal"]')
    .should('include.text', 'Wrap')
    .and('include.text', 'Approve WETH transfer')
    .and('include.text', 'Deposit WETH');

  cy.get('[data-testid="deposit confirm button"]').should('include.text', 'Start').click();

  cy.get('[data-testid="deposit confirm button"]')
    .should('include.text', 'Processing...')
    .and('be.disabled');

  cy.get('[data-testid="deposit confirm button"]')
    .should('include.text', 'Done')
    .and('be.enabled')
    .click();

  cy.get('[data-testid="deposit modal"]').should('not.exist');

  cy.location('hash').should('include', 'accounts').and('include', 'positions');

  cy.get('[data-testid="current account id"]').then((element) => {
    const accountId = element.attr('data-account-id');
    cy.wrap(accountId).as('accountId');
  });

  cy.get('@accountId').then((accountId) => {
    cy.url().should('include', `?accountId=${accountId}`);
  });

  cy.get('[data-action="borrow"][data-active="true"]').should('include.text', 'Borrow');
});
