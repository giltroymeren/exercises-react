import React from "react";
import CustomerDelete from "./CustomerDelete";
import NiceModal from "@ebay/nice-modal-react";
import { useCustomersStore } from "@/stores/customers";
import { customerGenerator } from "@/test/data-generators";
import { getTestIdSelector } from "../../../../cypress/support/utils";
import { BrowserRouter } from "react-router-dom";
import { Customer } from "../types";

describe("CustomerDelete", () => {
  const expectedCustomer = customerGenerator();

  beforeEach(() => {
    useCustomersStore.setState(
      { customers: [expectedCustomer], fetched: true },
      true
    );

    cy.mount(
      <BrowserRouter>
        <NiceModal.Provider>
          <CustomerDelete
            id={expectedCustomer.id}
            name={expectedCustomer.name}
          />
        </NiceModal.Provider>
      </BrowserRouter>
    );

    cy.get(getTestIdSelector("button-delete")).click();
    cy.get(getTestIdSelector("modal")).should("exist");
    cy.contains("Delete Customer");
    cy.contains(
      `Are you sure you want to delete Customer "${expectedCustomer.name}"?`
    );
  });

  it("does not delete customer when cancel button is clicked", () => {
    cy.get(getTestIdSelector("button-modal-cancel")).click();

    cy.window()
      .its("Storage")
      .invoke("getState")
      .its("customers[0]")
      .then((actualCustomer: Customer) => {
        const { id: actualId, ...actualCustomerWithoutId } = actualCustomer;
        const { id: expectedId, ...expectedCustomerWithoutId } =
          expectedCustomer;
        expect(actualCustomerWithoutId).to.deep.equal(
          expectedCustomerWithoutId
        );
      });
  });
});
