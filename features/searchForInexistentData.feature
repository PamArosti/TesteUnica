Feature: Search for a inexistent data

      Scenario Outline: Search for a specific data
            Given I open the "/"
            When I will search for "<SearchFor>"
            Then I check that the data is not exist on the page "<SearchFor>"

            Examples:
                  | SearchFor        |
                  | itemNãoExistente |
                  | XPTO             |
                  | ThinkL           |

    