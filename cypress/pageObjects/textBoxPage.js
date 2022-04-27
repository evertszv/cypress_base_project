import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url () {
    return '/text-box';
  }

  static get exampleElement () {
    return cy.get('exampleSelector');
    }

    static get fullNameInput() {
        return cy.get('input#userName');
    }

    static get userEmailInput() {
        return cy.get('input#userEmail');
    }

    static get currentAdressInput() {
        return cy.get('textarea#currentAddress');
    }

    static get permanentAdressInput() {
        return cy.get('textarea#permanentAddress');
    }
    static get submitButton() {
        return cy.get('#submit');
    }
    static get nameParagraph() {
        return cy.get('p#name');
    }
    static get emailParagraph() {
        return cy.get('p#email');
    }
    static get currentAddressParagraph() {
        return cy.get('p#currentAddress');
    }
    static get permanentAddressParagraph() {
        return cy.get('p#permanentAddress');
    }
}

export default TextBoxPage;
