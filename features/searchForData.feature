Feature: Search for a specific data and check an inexistent item on the list

      Scenario Outline: Search for a specific data and check an inexistent item on the list
            Given I open the "/"
            When I will search for "<SearchFor>"
            And I check the results on the page "<SearchFor>"
            Then I will check that android quick start should not be on the list

            Examples:
                  | SearchFor               |
                  | HTML                    |
                  | HTML5 WebApp Develpment |
                  | Thinking in HTML        |
                  | HTML5 Forms             |
                  