import BasePage from "./basePage";

class CheckBoxPage extends BasePage {
    static get url() {
        return '/checkbox';
    }

    static get exampleElement() {
        return cy.get('exampleSelector');
    }

    static get expandAllButton() {
        return cy.get("button[aria-label='Expand all']");
    }

    static get checkboxListItems() {
        return cy.get("span.rct-text");
    }

    static get selectedItemsArea() {
        return cy.get("#result");
    }

}

export default CheckBoxPage;
