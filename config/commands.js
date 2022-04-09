import addContext from 'mochawesome/addContext';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
    failureThreshold: 0.0,
    failureThresholdType: 'percent',
    customDiffConfig: { threshold: 0.0 },
    capture: 'viewport',
});

Cypress.Commands.add("setResolution", (size) => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
    } else {
        cy.viewport(size);
    }
});

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});

Cypress.on('test:after:run', (test, runnable) => {
	if (test.state == 'failed') {
		cy.wait(500);
		addContext({ test }, `./screenshots/${runnable.parent.title} -- ${test.title} (failed).png`);
	}
});

Cypress.Commands.add('forceVisit', baseUrl => {
    cy.get('body').then(body$ => {
      const appWindow = body$[0].ownerDocument.defaultView;
      const appIframe = appWindow.parent.document.querySelector('iframe');
  
      // We return a promise here because we don't want to
      // continue from this command until the new page is
      // loaded.  
      return new Promise(resolve => {
        appIframe.onload = () => resolve();
        appWindow.location = baseUrl;
      });
    });
  });