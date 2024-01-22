import { useCustomersStore } from "@/stores/customers";
import { newCustomerGenerator } from "@/test/data-generators";
import {
  APP_URL,
  CustomerFieldNames,
  SELECTOR_BUTTON_SUBMIT,
  getCustomerProfileSelector,
  getNameSelector,
  getTestIdSelector,
} from "cypress/support/utils";

describe("Smoke Test", () => {
  beforeEach(() =>
    // Force empty store
    useCustomersStore.setState({ customers: [], fetched: true }, true)
  );

  it("should successfully create, edit and remove customers", () => {
    cy.visit(APP_URL);

    // Table
    cy.get(getTestIdSelector("element-spinner")).should("exist");
    cy.get(getTestIdSelector("section-table")).should("exist");

    // Create
    cy.get(getTestIdSelector("container-body-title"))
      .find(getTestIdSelector("button-create"))
      .click();
    cy.get(getTestIdSelector("drawer"))
      .find(getTestIdSelector("form-create"))
      .should("exist");

    const expectedCustomer = newCustomerGenerator();

    cy.get(getNameSelector(CustomerFieldNames.name)).type(
      expectedCustomer.name
    );
    cy.get(getNameSelector(CustomerFieldNames.username)).type(
      expectedCustomer.username
    );
    cy.get(getNameSelector(CustomerFieldNames.email)).type(
      expectedCustomer.email
    );
    cy.get(getNameSelector(CustomerFieldNames.website)).type(
      expectedCustomer.website
    );
    cy.get(getNameSelector(CustomerFieldNames.phone)).type(
      expectedCustomer.phone
    );
    cy.get(getNameSelector(CustomerFieldNames.address)).type(
      expectedCustomer.address
    );
    cy.get(getNameSelector(CustomerFieldNames.company)).type(
      expectedCustomer.company
    );
    cy.get(SELECTOR_BUTTON_SUBMIT).click();

    const selectorCustomerTable = "table-customers";
    cy.get(getTestIdSelector(selectorCustomerTable)).contains(
      expectedCustomer.name
    );
    cy.get(getTestIdSelector(selectorCustomerTable)).contains(
      expectedCustomer.email
    );
    cy.get(getTestIdSelector(selectorCustomerTable)).contains(
      expectedCustomer.phone
    );
    cy.get(getTestIdSelector(selectorCustomerTable)).contains(
      expectedCustomer.company
    );

    // Update
    cy.contains("tr", expectedCustomer.name)
      .find(getTestIdSelector("button-update"))
      .click();
    cy.get(getTestIdSelector("drawer"))
      .find(getTestIdSelector("form-update"))
      .should("exist");

    const updatedCustomer = { ...expectedCustomer, name: "Foo Bar" };

    cy.get(getNameSelector(CustomerFieldNames.name))
      .clear()
      .type(updatedCustomer.name);
    cy.get(SELECTOR_BUTTON_SUBMIT).click();
    cy.get(getTestIdSelector(selectorCustomerTable)).contains(
      updatedCustomer.name
    );

    // View
    cy.contains("tr", updatedCustomer.name)
      .find(getTestIdSelector("table-customers-name"))
      .click();

    cy.get(getCustomerProfileSelector(CustomerFieldNames.name)).contains(
      updatedCustomer.name
    );
    cy.get(getTestIdSelector("container-profile"))
      .find(getTestIdSelector("container-profile-details"))
      .should("exist");

    cy.get(getTestIdSelector("button-home")).click();

    // Delete
    cy.get(getTestIdSelector("section-table")).should("exist");

    cy.contains("tr", updatedCustomer.name)
      .find(getTestIdSelector("button-delete"))
      .click();

    cy.get(getTestIdSelector("modal")).contains("button", "Delete").click();

    cy.get(getTestIdSelector(selectorCustomerTable))
      .contains(updatedCustomer.name)
      .should("not.exist");
  });
});
