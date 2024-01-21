import { useCustomersStore } from "@/stores/customers";
import { newCustomerGenerator } from "@/test/data-generators";
import {
  APP_URL,
  CustomerFieldNames,
  SELECTOR_BUTTON_SUBMIT,
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

    const newCustomer = newCustomerGenerator();

    cy.get(getNameSelector(CustomerFieldNames.name)).type(newCustomer.name);
    cy.get(getNameSelector(CustomerFieldNames.username)).type(
      newCustomer.username
    );
    cy.get(getNameSelector(CustomerFieldNames.email)).type(newCustomer.email);
    cy.get(getNameSelector(CustomerFieldNames.website)).type(
      newCustomer.website
    );
    cy.get(getNameSelector(CustomerFieldNames.phone)).type(newCustomer.phone);
    cy.get(getNameSelector(CustomerFieldNames.address)).type(
      newCustomer.address
    );
    cy.get(getNameSelector(CustomerFieldNames.company)).type(
      newCustomer.company
    );
    cy.get(SELECTOR_BUTTON_SUBMIT).click();

    const selectorCustomerTable = "table-customers";
    cy.get(getTestIdSelector(selectorCustomerTable)).contains(newCustomer.name);
    cy.get(getTestIdSelector(selectorCustomerTable)).contains(
      newCustomer.email
    );
    cy.get(getTestIdSelector(selectorCustomerTable)).contains(
      newCustomer.phone
    );
    cy.get(getTestIdSelector(selectorCustomerTable)).contains(
      newCustomer.company
    );

    // Update
    cy.contains("tr", newCustomer.name)
      .find(getTestIdSelector("button-update"))
      .click();
    cy.get(getTestIdSelector("drawer"))
      .find(getTestIdSelector("form-update"))
      .should("exist");

    const updatedCustomer = { ...newCustomer, name: "Foo Bar" };

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

    const selectorCustomerProfile = "container-profile";
    cy.get(getTestIdSelector(selectorCustomerProfile)).contains(
      updatedCustomer.name
    );
    cy.get(getTestIdSelector(selectorCustomerProfile))
      .find(getTestIdSelector(`${selectorCustomerProfile}-details`))
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
