import BasePage from "./basePage";

class RadioButtonsPage extends BasePage {
    static get url() {
        return '/radio-button';
    }

    static get exampleElement() {
        return cy.get('exampleSelector');
    }

    static get yesRadioButton() {
        return cy.get("label[for='yesRadio']")
    }

    static get impressiveRadioButton() {
        return cy.get("label[for='impressiveRadio']")
    }

    static get noRadioButton() {
        return cy.get("#noRadio")
    }

    static get resultsText() {
        return cy.get(".text-success")
    }



}

export default RadioButtonsPage;
