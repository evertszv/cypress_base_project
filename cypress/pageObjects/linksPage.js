import BasePage from "./basePage";

class LinksPage extends BasePage {
    static get url() {
        return '/links';
    }

    static get exampleElement() {
        return cy.get('exampleSelector');
    }

    static get createdLink() {
        return cy.get("#created");
	}
}

export default LinksPage;
