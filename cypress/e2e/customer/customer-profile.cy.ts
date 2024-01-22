import { useCustomersStore } from "@/stores/customers";
import { customerGenerator } from "@/test/data-generators";
import {
  APP_URL,
  CustomerFieldNames,
  SELECTOR_BUTTON_SUBMIT,
  getCustomerProfileSelector,
  getNameSelector,
  getTestIdSelector,
} from "cypress/support/utils";

describe("Customer profile", () => {
  const expectedCustomer = customerGenerator();

  beforeEach(() => {
    useCustomersStore.setState(
      { customers: [expectedCustomer], fetched: true },
      true
    );

    cy.visit(APP_URL);

    cy.contains("tr", expectedCustomer.name)
      .find(getTestIdSelector("table-customers-name"))
      .click();

    cy.get(getTestIdSelector("container-profile"))
      .find(getTestIdSelector("container-profile-details"))
      .should("exist");
  });

  it("shows details of the customer", () => {
    cy.get(getCustomerProfileSelector(CustomerFieldNames.id)).contains(
      expectedCustomer.id
    );
    cy.get(getCustomerProfileSelector(CustomerFieldNames.name)).contains(
      expectedCustomer.name
    );
    cy.get(getCustomerProfileSelector(CustomerFieldNames.email)).contains(
      expectedCustomer.email
    );
    cy.get(getCustomerProfileSelector(CustomerFieldNames.address)).contains(
      expectedCustomer.address
    );
    cy.get(getCustomerProfileSelector(CustomerFieldNames.phone)).contains(
      expectedCustomer.phone
    );
    cy.get(getCustomerProfileSelector(CustomerFieldNames.website)).contains(
      expectedCustomer.website
    );
    cy.get(getCustomerProfileSelector(CustomerFieldNames.company)).contains(
      expectedCustomer.company
    );

    cy.get(getTestIdSelector("button-home")).click();
  });

  it("updates customer successfully", () => {
    const updatedCustomer = { ...expectedCustomer, name: "New Name" };

    cy.get(getTestIdSelector("button-update")).click();
    cy.get(getNameSelector(CustomerFieldNames.name))
      .clear()
      .type(updatedCustomer.name);
    cy.get(SELECTOR_BUTTON_SUBMIT).click();

    cy.get(getCustomerProfileSelector(CustomerFieldNames.name)).contains(
      updatedCustomer.name
    );

    cy.get(getTestIdSelector("button-home")).click();
  });

  it("deletes customer successfully and goes back to home page", () => {
    cy.get(getTestIdSelector("button-delete")).click();

    cy.get(getTestIdSelector("modal")).contains("button", "Delete").click();

    cy.get(getTestIdSelector("table-customers"))
      .contains(expectedCustomer.name)
      .should("not.exist");
  });
});
