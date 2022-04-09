Feature: Verify the content on the menu list 

      Scenario Outline: Verify the content on the menu list 
            Given I open the "/"
            When I will click on shop button
            And I will check the menu categories
            Then I will check that Thinking in HTML should be on the list and I will click on read more "<CategoriesandTag>"

            Examples:
                  | CategoriesandTag |
                  | HTML             |
