import React from "react";
import CustomerCreate from "./CustomerCreate";
import NiceModal from "@ebay/nice-modal-react";
import {
  CustomerFieldNames,
  SELECTOR_BUTTON_SUBMIT,
  getFieldErrorMessage,
  getNameSelector,
  getTestIdSelector,
} from "../../../../cypress/support/utils";
import { newCustomerGenerator } from "@/test/data-generators";
import { useCustomersStore } from "@/stores/customers";
import { Customer } from "../types";

const TEXT_BUTTON_CREATE = "Create Customer";

describe("CustomerCreate", () => {
  beforeEach(() => {
    cy.mount(
      <NiceModal.Provider>
        <CustomerCreate />
      </NiceModal.Provider>
    );

    cy.get(getTestIdSelector("button-create")).click();

    cy.get(getTestIdSelector("drawer"))
      .find(getTestIdSelector("form-create"))
      .should("exist");
  });

  afterEach(() => {
    cy.get(getTestIdSelector("drawer")).should("not.exist");
  });

  it("renders with complete fields a drawer", () => {
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
    const newCustomer = newCustomerGenerator();

    cy.get(getNameSelector(CustomerFieldNames.name))
      .type(newCustomer.name)
      .clear();
    cy.contains(getFieldErrorMessage(CustomerFieldNames.name));

    cy.get(getNameSelector(CustomerFieldNames.username))
      .type(newCustomer.username)
      .clear();
    cy.contains(getFieldErrorMessage(CustomerFieldNames.username));

    cy.get(getNameSelector(CustomerFieldNames.email))
      .type(newCustomer.email)
      .clear();
    cy.contains(getFieldErrorMessage(CustomerFieldNames.email));

    cy.get(getNameSelector(CustomerFieldNames.website))
      .type(newCustomer.website)
      .clear();
    cy.contains(getFieldErrorMessage(CustomerFieldNames.website));

    cy.get(getNameSelector(CustomerFieldNames.phone))
      .type(newCustomer.phone)
      .clear();
    cy.contains(getFieldErrorMessage(CustomerFieldNames.phone));

    cy.get(getNameSelector(CustomerFieldNames.address))
      .type(newCustomer.address)
      .clear();
    cy.contains(getFieldErrorMessage(CustomerFieldNames.address));

    cy.get(getNameSelector(CustomerFieldNames.company))
      .type(newCustomer.company)
      .clear();
    cy.contains(getFieldErrorMessage(CustomerFieldNames.company));

    cy.get(SELECTOR_BUTTON_SUBMIT).should("be.disabled");
    cy.get(SELECTOR_BUTTON_SUBMIT).contains(TEXT_BUTTON_CREATE);

    cy.get(getTestIdSelector("button-cancel")).click();
  });

  it("creates a customer if all fields are valid", () => {
    useCustomersStore.setState({ customers: [], fetched: true }, true);

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

    cy.get(SELECTOR_BUTTON_SUBMIT).should("not.be.disabled");
    cy.get(SELECTOR_BUTTON_SUBMIT).click();

    cy.window()
      .its("Storage")
      .invoke("getState")
      .its("customers[0]")
      .then((actualCustomer: Customer) => {
        const { id, ...actualCustomerWithoutId } = actualCustomer;
        expect(actualCustomerWithoutId).to.deep.equal(newCustomer);
      });
  });
});
