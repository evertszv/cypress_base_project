import CheckBoxPage from "../../pageObjects/checkBoxPage";
import TextBoxPage from "../../pageObjects/textBoxPage";
import RadioButtonsPage from "../../pageObjects/radioButtonsPage";
import WebTablesPage from "../../pageObjects/webTablesPage";
import ButtonsPage from "../../pageObjects/buttonsPage";
import LinksPage from "../../pageObjects/linksPage";
import SelectablesPage from "../../pageObjects/selectablesPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

      it("Filling in Text Boxes with fixtures", () => {
          cy.fixture('textBoxPageData').then(data => {
              // Add scenario stuff here
              TextBoxPage.fullNameInput.type(data.fullName);
              TextBoxPage.userEmailInput.type(data.email);
              TextBoxPage.currentAdressInput.type(data.currentAddress);
              TextBoxPage.permanentAdressInput.type(data.permanentAddress);
              TextBoxPage.submitButton.click();

              TextBoxPage.nameParagraph.should('be.visible').should('contain', data.fullName);
              TextBoxPage.emailParagraph.should('be.visible').should('contain', data.email);
              TextBoxPage.currentAddressParagraph.should('be.visible').should('contain', data.currentAddress);
              TextBoxPage.permanentAddressParagraph.should('be.visible').should('contain', data.permanentAddress);
          });
        
    }); 
  });
    context("Checkbox scenarios", () => {
        beforeEach(() => {
            CheckBoxPage.visit();
        });
        it("Clicking checkbox - Notes", () => {
            CheckBoxPage.expandAllButton.click();
            CheckBoxPage.checkboxListItems.contains("Notes").click();
            CheckBoxPage.checkboxListItems.contains("General").click();
            CheckBoxPage.selectedItemsArea.should("contain", "notes").should("contain", "general");
        });
        it("Clicking checkbox - Office", () => {
            CheckBoxPage.expandAllButton.click();
            CheckBoxPage.checkboxListItems.contains("Office").click();
            CheckBoxPage.selectedItemsArea
                .should("contain", "office")
                .should("contain", "public")
                .should("contain", "private")
                .should("contain", "classified")
                .should("contain", "general");
                
        });

    });
  
    context("Radio buttons scenarios", () => {
        beforeEach(() => {
            RadioButtonsPage.visit();
        });
        it("Click Radio buttons scenario", () => {
            RadioButtonsPage.yesRadioButton.click();
            RadioButtonsPage.resultsText.should("contain", "Yes");

            RadioButtonsPage.impressiveRadioButton.click();
            RadioButtonsPage.resultsText.should("contain", "Impressive");

            RadioButtonsPage.noRadioButton.should("be.disabled");
        });

    });
    context("Web tables scenarios", () => {
        beforeEach(() => {
            WebTablesPage.visit();
        });
        it("Web tables ADD scenario", () => {
            WebTablesPage.addButton.click();

            WebTablesPage.firstName.type('XXXXX');
            WebTablesPage.lastName.type('YYYYY');
            WebTablesPage.userEmail.type('aaa@bbb.com');
            WebTablesPage.userAge.type('42');
            WebTablesPage.salary.type('999999');
            WebTablesPage.department.type('Clensing');

            WebTablesPage.submitButton.click();

            WebTablesPage.allTable.should('contain', 'aaa@bbb.com');
            WebTablesPage.allTableRows.should('contain', 'aaa@bbb.com');
        });

        it("Web tables DELETE all records scenario", () => {
            WebTablesPage.deleteRow('cierra@example');
            WebTablesPage.deleteRow('alden@exam');
            WebTablesPage.deleteRow('kierra@exam');
            //WebTablesPage.deleteRow('aaa@bbb.com');
        });

    });

    context("Buttons scenarios", () => {
        beforeEach(() => {
            ButtonsPage.visit();
        });
        it("Click buttons scenario", () => {
            ButtonsPage.doubleClickButton.dblclick();
            ButtonsPage.doubleClickSuccessMsg.should(
                "contain",
                "You have done a double click"
            );

            ButtonsPage.rightClickButton.rightclick();
            ButtonsPage.rightClickSuccessMsg.should(
                "contain",
                "You have done a right click"
            );

            ButtonsPage.dynamicClickButton.click();
            ButtonsPage.dynamicClickSuccessMsg.should(
                "contain",
                "You have done a dynamic click"
            );

        });

    });

    context("Links scenarios", () => {
        beforeEach(() => {
            LinksPage.visit();
        });
        it("Click links scenario", () => {
            cy.intercept("GET", "created", { statusCode: 201}).as("getCreated");
            LinksPage.createdLink.click();
            cy.wait("@getCreated").then((data) => {
                expect(data.response.statusCode).to.eq(201)
            });

        });

    });

    context("Selectables scenarios", () => {
        beforeEach(() => {
            SelectablesPage.visit();
        });
        it("Selectables first scenario", () => {
            SelectablesPage.firstElement.click();
            SelectablesPage.thirdElement.click();

            SelectablesPage.firstElement.should('have.class', 'active');
            SelectablesPage.thirdElement.should('have.class', 'active');

            SelectablesPage.secondElement.should('not.have.class', 'active');
            SelectablesPage.fourthElement.should('not.have.class', 'active');

        });

        it.only("Selectables second(grid) scenario", () => {

            SelectablesPage.grid.click();

            SelectablesPage.gridChosen(1, 1).click();
            SelectablesPage.gridChosen(2, 0).click();
            SelectablesPage.gridChosen(2, 2).click();
            SelectablesPage.gridChosen(3, 1).click();

            SelectablesPage.gridChosen(1, 1).should('have.class', 'active');
            SelectablesPage.gridChosen(2, 0).should('have.class', 'active');
            SelectablesPage.gridChosen(2, 2).should('have.class', 'active');
            SelectablesPage.gridChosen(3, 1).should('have.class', 'active');

            SelectablesPage.gridChosen(1, 0).should('not.have.class', 'active');
            SelectablesPage.gridChosen(1, 2).should('not.have.class', 'active');
            SelectablesPage.gridChosen(2, 1).should('not.have.class', 'active');
            SelectablesPage.gridChosen(3, 0).should('not.have.class', 'active');
            SelectablesPage.gridChosen(3, 2).should('not.have.class', 'active');



        });

    });
});

