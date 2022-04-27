import BasePage from "./basePage";

class SelectablesPage extends BasePage {
    static get url() {
        return '/selectable';
    }

    static get exampleElement() {
        return cy.get('exampleSelector');
    }

    static get firstElement() {
        return cy.get('#verticalListContainer').children().first();
    }

    static get secondElement() {
        return cy.get('#verticalListContainer li').eq(1);
    }

    static get thirdElement() {
        return cy.get('#verticalListContainer li').eq(2);
    }

    static get fourthElement() {
        return cy.get('#verticalListContainer li').eq(3);
    }

    static get grid() {
        return cy.get('#demo-tab-grid');
    }

    static gridChosen(row, block) {
        return cy.get('#row'+row+' li').eq(block);
	}

}

export default SelectablesPage;


