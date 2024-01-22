import { Customer } from "@/features";
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

const TEXT_BUTTON_UPDATE = "Update Customer";

describe("Customer update", () => {
  const expectedCustomer = customerGenerator();

  beforeEach(() => {
    useCustomersStore.setState(
      { customers: [expectedCustomer], fetched: true },
      true
    );

    cy.visit(APP_URL);

    cy.contains("tr", expectedCustomer.name)
      .find(getTestIdSelector("button-update"))
      .click();
    cy.get(getTestIdSelector("drawer"))
      .find(getTestIdSelector("form-update"))
      .should("exist");
  });

  afterEach(() => {
    cy.get(getTestIdSelector("drawer")).should("not.exist");
  });

  it("renders form drawer with complete fields", () => {
    cy.get(getNameSelector(CustomerFieldNames.name)).should(
      "have.value",
      expectedCustomer.name
    );
    cy.get(getNameSelector(CustomerFieldNames.username)).should(
      "have.value",
      expectedCustomer.username
    );
    cy.get(getNameSelector(CustomerFieldNames.email)).should(
      "have.value",
      expectedCustomer.email
    );
    cy.get(getNameSelector(CustomerFieldNames.website)).should(
      "have.value",
      expectedCustomer.website
    );
    cy.get(getNameSelector(CustomerFieldNames.phone)).should(
      "have.value",
      expectedCustomer.phone
    );
    cy.get(getNameSelector(CustomerFieldNames.address)).should(
      "have.value",
      expectedCustomer.address
    );
    cy.get(getNameSelector(CustomerFieldNames.company)).should(
      "have.value",
      expectedCustomer.company
    );

    cy.get(SELECTOR_BUTTON_SUBMIT).contains(TEXT_BUTTON_UPDATE);

    cy.get(getTestIdSelector("button-cancel")).click();
  });

  it("updates a customer and reflects new data in app", () => {
    const updatedCustomer: Customer = {
      ...expectedCustomer,
      name: "New Name",
      email: "newname@email.com",
      phone: "123 456 7890",
      company: "New Company Name",
    };

    // Form
    cy.get(getNameSelector(CustomerFieldNames.name))
      .should("have.value", expectedCustomer.name)
      .clear()
      .type(updatedCustomer.name);
    cy.get(getNameSelector(CustomerFieldNames.email))
      .should("have.value", expectedCustomer.email)
      .clear()
      .type(updatedCustomer.email);
    cy.get(getNameSelector(CustomerFieldNames.phone))
      .should("have.value", expectedCustomer.phone)
      .clear()
      .type(updatedCustomer.phone);
    cy.get(getNameSelector(CustomerFieldNames.company))
      .should("have.value", expectedCustomer.company)
      .clear()
      .type(updatedCustomer.company);

    cy.get(SELECTOR_BUTTON_SUBMIT).contains(TEXT_BUTTON_UPDATE);

    cy.get(getTestIdSelector("button-submit")).click();

    // Table
    const selectorCustomerTable = "table-customers";
    cy.get(getTestIdSelector(selectorCustomerTable)).contains(
      updatedCustomer.name
    );
    cy.get(getTestIdSelector(selectorCustomerTable)).contains(
      updatedCustomer.email
    );
    cy.get(getTestIdSelector(selectorCustomerTable)).contains(
      updatedCustomer.phone
    );
    cy.get(getTestIdSelector(selectorCustomerTable)).contains(
      updatedCustomer.company
    );

    // Profile
    cy.contains("tr", updatedCustomer.name)
      .find(getTestIdSelector("table-customers-name"))
      .click();

    const selectorCustomerProfile = "container-profile";
    cy.get(getCustomerProfileSelector(CustomerFieldNames.id)).contains(
      updatedCustomer.id
    );
    cy.get(getCustomerProfileSelector(CustomerFieldNames.name)).contains(
      updatedCustomer.name
    );
    cy.get(getCustomerProfileSelector(CustomerFieldNames.email)).contains(
      updatedCustomer.email
    );
    cy.get(getCustomerProfileSelector(CustomerFieldNames.address)).contains(
      updatedCustomer.address
    );
    cy.get(getCustomerProfileSelector(CustomerFieldNames.phone)).contains(
      updatedCustomer.phone
    );
    cy.get(getCustomerProfileSelector(CustomerFieldNames.website)).contains(
      updatedCustomer.website
    );
    cy.get(getCustomerProfileSelector(CustomerFieldNames.company)).contains(
      updatedCustomer.company
    );

    cy.get(getTestIdSelector("button-home")).click();
  });
});
