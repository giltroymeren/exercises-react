import { Customer } from "@/features";
import { useCustomersStore } from "@/stores/customers";
import { newCustomerGenerator } from "@/test/data-generators";
import {
  APP_URL,
  CustomerFieldNames,
  SELECTOR_BUTTON_SUBMIT,
  getFieldErrorMessage,
  getNameSelector,
  getTestIdSelector,
} from "cypress/support/utils";

const TEXT_BUTTON_CREATE = "Create Customer";

describe("Customer creation", () => {
  beforeEach(() => {
    useCustomersStore.setState({ customers: [], fetched: true }, true);

    cy.visit(APP_URL);

    cy.get(getTestIdSelector("button-create")).click();

    cy.get(getTestIdSelector("drawer"))
      .find(getTestIdSelector("form-create"))
      .should("exist");
  });

  afterEach(() => {
    cy.get(getTestIdSelector("drawer")).should("not.exist");
  });

  it("renders form drawer with complete fields", () => {
    cy.get(getNameSelector(CustomerFieldNames.name)).should("exist");
    cy.get(getNameSelector(CustomerFieldNames.username)).should("exist");
    cy.get(getNameSelector(CustomerFieldNames.email)).should("exist");
    cy.get(getNameSelector(CustomerFieldNames.website)).should("exist");
    cy.get(getNameSelector(CustomerFieldNames.phone)).should("exist");
    cy.get(getNameSelector(CustomerFieldNames.address)).should("exist");
    cy.get(getNameSelector(CustomerFieldNames.company)).should("exist");

    cy.get(SELECTOR_BUTTON_SUBMIT).should("be.disabled");
    cy.get(SELECTOR_BUTTON_SUBMIT).contains(TEXT_BUTTON_CREATE);

    cy.get(getTestIdSelector("button-cancel")).click();
  });

  it("validates fields and does not allow submit if a field is invalid", () => {
    const expectedCustomer = newCustomerGenerator();

    cy.get(getNameSelector(CustomerFieldNames.name))
      .type(expectedCustomer.name)
      .clear();
    cy.contains(getFieldErrorMessage(CustomerFieldNames.name));

    cy.get(getNameSelector(CustomerFieldNames.username))
      .type(expectedCustomer.username)
      .clear();
    cy.contains(getFieldErrorMessage(CustomerFieldNames.username));

    cy.get(getNameSelector(CustomerFieldNames.email))
      .type(expectedCustomer.email)
      .clear();
    cy.contains(getFieldErrorMessage(CustomerFieldNames.email));

    cy.get(getNameSelector(CustomerFieldNames.website))
      .type(expectedCustomer.website)
      .clear();
    cy.contains(getFieldErrorMessage(CustomerFieldNames.website));

    cy.get(getNameSelector(CustomerFieldNames.phone))
      .type(expectedCustomer.phone)
      .clear();
    cy.contains(getFieldErrorMessage(CustomerFieldNames.phone));

    cy.get(getNameSelector(CustomerFieldNames.address))
      .type(expectedCustomer.address)
      .clear();
    cy.contains(getFieldErrorMessage(CustomerFieldNames.address));

    cy.get(getNameSelector(CustomerFieldNames.company))
      .type(expectedCustomer.company)
      .clear();
    cy.contains(getFieldErrorMessage(CustomerFieldNames.company));

    cy.get(SELECTOR_BUTTON_SUBMIT).should("be.disabled");
    cy.get(SELECTOR_BUTTON_SUBMIT).contains(TEXT_BUTTON_CREATE);

    cy.get(getTestIdSelector("button-cancel")).click();
  });

  it("creates a customer if all fields are valid successfully", () => {
    useCustomersStore.setState({ customers: [], fetched: true }, true);

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

    cy.get(SELECTOR_BUTTON_SUBMIT).should("not.be.disabled");
    cy.get(SELECTOR_BUTTON_SUBMIT).click();

    cy.window()
      .its("Storage")
      .invoke("getState")
      .its("customers[0]")
      .then((actualCustomer: Customer) => {
        const { id, ...actualCustomerWithoutId } = actualCustomer;
        expect(actualCustomerWithoutId).to.deep.equal(expectedCustomer);
      });
  });
});
