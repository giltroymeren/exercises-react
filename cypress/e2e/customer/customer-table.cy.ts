import { Customer } from "@/features";
import { useCustomersStore } from "@/stores/customers";
import { customerGenerator } from "@/test/data-generators";
import { APP_URL, getTestIdSelector } from "cypress/support/utils";

describe("Customer table", () => {
  const expectedCustomerCount = 5;
  const expectedCustomers = [...Array(expectedCustomerCount)].map(
    customerGenerator
  );

  beforeEach(() => {
    useCustomersStore.setState(
      { customers: expectedCustomers, fetched: true },
      true
    );

    cy.visit(APP_URL);
  });

  it("contains all existing customers", () => {
    expectedCustomers.map((customer: Customer) => {
      cy.contains("td", customer.name)
        .parent()
        .within(() => {
          cy.contains(customer.email);
          cy.contains(customer.phone);
          cy.contains(customer.company);
          cy.get(getTestIdSelector("button-update")).should("exist");
          cy.get(getTestIdSelector("button-delete")).should("exist");
        });
    });
  });

  it("shows empty state if all customers are deleted", () => {
    expectedCustomers.map((customer: Customer) => {
      cy.contains("td", customer.name)
        .parent()
        .within(() => cy.get(getTestIdSelector("button-delete")).click());

      cy.get(getTestIdSelector("modal")).contains("button", "Delete").click();
    });

    cy.get(getTestIdSelector("table-customers"))
      .find(getTestIdSelector("table-customers-empty"))
      .should("exist");
  });
});
