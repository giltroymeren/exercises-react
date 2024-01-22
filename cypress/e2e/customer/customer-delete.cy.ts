import { Customer } from "@/features";
import { useCustomersStore } from "@/stores/customers";
import { customerGenerator } from "@/test/data-generators";
import { APP_URL, getTestIdSelector } from "cypress/support/utils";

describe("Customer deletion", () => {
  const expectedCustomer = customerGenerator();

  beforeEach(() => {
    useCustomersStore.setState(
      { customers: [expectedCustomer], fetched: true },
      true
    );

    cy.visit(APP_URL);

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

  it("deletes a customer successfully", () => {
    cy.get(getTestIdSelector("button-modal-delete")).click();

    cy.window()
      .its("Storage")
      .invoke("getState")
      .its("customers")
      .then((customers: Customer[]) => {
        expect(
          customers.every((customer) => customer.id !== expectedCustomer.id)
        ).to.be.true;
      });
  });
});
