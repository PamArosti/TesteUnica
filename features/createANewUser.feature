Feature: Make a register with a new user 

      Scenario Outline: Make a register with a new user 
            Given I open the "/"
            When I will click on my account button
            Then I will create a new account with "<EmailAdress>" and "<Password>"

            Examples:
                  | EmailAdress            | Password     |
                  | xpto17458@teste.com.br | xpto@YTS1235 |
                  | xpto12458@teste.com.br | xpto@YTS1235 |
                  | xpto15458@teste.com.br | xpto@YTS1235 |
                  | xpto19458@teste.com.br | xpto@YTS1235 |
                  | xpto11458@teste.com.br | xpto@YTS1235 |
                  | xpto16458@teste.com.br | xpto@YTS1235 |
                  | xpto10458@teste.com.br | xpto@YTS1235 |
                  | xpto13458@teste.com.br | xpto@YTS1235 |