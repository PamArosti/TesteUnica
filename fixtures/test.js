Cypress.Commands.add('kcLogin', (username, password) => {
    const kcRoot = 'http://ca-016l.br.bosch.com';
    const kcRealm = 'RBLA';
    const kcClient = 'aa-wsbonus-authenticator';
    const kcRedirectUri = 'http://ca-016l.br.bosch.com';
    //const kcRoot = Cypress.env('KEYCLOAK_URL');
    const loginPageRequest = {
      followRedirect: true,
      method: 'POST',
      client_id: 'aa-wsbonus-authenticator',
      url: `${kcRoot}/auth/realms/${kcRealm}/protocol/openid-connect/auth`,

    };
    // Open the KC login page, fill in the form with username and password and submit.
    return cy.request(loginPageRequest)
      .then(submitLoginForm);
    ////////////
    function submitLoginForm(response) {
      const _el = document.createElement('html');
      _el.innerHTML = response.body;
      // This should be more strict depending on your login page template.
      const loginForm = _el.getElementsByTagName('form');
      const isAlreadyLoggedIn = !loginForm.length;
      if (isAlreadyLoggedIn) {
        return;
      }
      return cy.request({
        form: true,
        method: 'POST',
        url: loginForm[0].action,
        followRedirect: false,
        body: {
          username: username,
          password: password,
          grant_type: password        
        }
      });
    }
    // Copy-pasted code from KC javascript client. It probably doesn't need to be 
    // this complicated but I refused to spend time on figuring that out.
    function createUUID() {
      var s = [];
      var hexDigits = '0123456789abcdef';
      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = '4';
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
      s[8] = s[13] = s[18] = s[23] = '-';
      var uuid = s.join('');
      return uuid;
    }
  });

  Cypress.Commands.add('kcLogout', () => {
    const kcRoot = 'http://ca-016l.br.bosch.com';
    const kcRealm = 'RBLA';
    const kcRedirectUri = 'http://ca-016l.br.bosch.com';
    return cy.request({
      url: `${kcRoot}/auth/realms/${kcRealm}/protocol/openid-connect/logout`,
      qs: {
        redirect_uri: kcRedirectUri
      }
    });
  });
  
  describe('Dummy test', () => {
    beforeEach(() =>  {
      cy.kcLogin('batch-user', 'batch-user');
    });
    afterEach(() =>  {
      cy.kcLogout();
    });
    it('should render logged user name somewhere on the page', () =>  {
      cy.visit('/');
      cy.get('#login-test')
        .should('contain', 'testuser');
    });
  });

  Cypress.Commands.add('loginByKeycloak', () => {
    const username = 'workshop-bcs@wsportal.com';
    const password = 'Teste@1234';
    const client_id = 'aa-wsbonus-authenticator';
    const grant_type_value = 'password';
    const content_type = 'application/x-www-form-urlencoded';
    
    cy.request({
        method: 'POST',
        url: 'http://ca-016l.br.bosch.com/auth/realms/RBLA/protocol/openid-connect/token',
        form: true,
        body: {
            username,
            password,
            client_id,
            grant_type: grant_type_value,
            content_type: content_type,
            
        },
      })
    })
       
  describe('loginByKeycloak', function () {
    this.beforeEach(function () {
      cy.loginByKeycloak()
      console.log(loginByKeycloak)
    })
  })

  