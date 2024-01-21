import { act, renderHook } from "@testing-library/react";
import { useCustomersStore } from "../customers";
import {
  customerGenerator,
  newCustomerGenerator,
} from "@/test/data-generators";
/**
 * Prevents clash with cypress' own `expect`
 * @link https://github.com/cypress-io/cypress/issues/22059#issuecomment-1662037410
 */
import { expect } from "@jest/globals";

const initialStoreState = useCustomersStore.getState();

describe("CustomersStore", () => {
  afterEach(() => act(() => useCustomersStore.setState(initialStoreState)));

  test("should be able to add and delete a customer", async () => {
    const { result } = renderHook(() => useCustomersStore());
    const newCustomer = newCustomerGenerator();

    const customerFromStore = await act(() =>
      result.current.create(newCustomer)
    );
    expect(result.current.getById(customerFromStore.id)?.name).toBe(
      newCustomer.name
    );

    act(() => result.current.remove(customerFromStore.id));
    expect(result.current.getById(customerFromStore.id)).toBe(undefined);
  });

  test("should not find an invalid customer", () => {
    const { result } = renderHook(() => useCustomersStore());
    expect(result.current.getById(123456789)).toBe(undefined);
  });

  test("should be able to set and get customers", () => {
    const { result } = renderHook(() => useCustomersStore());
    expect(result.current.customers.length).toBe(0);

    const COUNT_CUSTOMERS = 10;
    const newCustomers = Array.from({ length: COUNT_CUSTOMERS }, () =>
      customerGenerator()
    );
    act(() => result.current.setAll(newCustomers));
    expect(result.current.customers.length).toBe(COUNT_CUSTOMERS);
    newCustomers.forEach((customer) => {
      const customerFromStore = result.current.getById(customer.id);
      expect(customer.name).toBe(customerFromStore?.name);
    });
  });

  test("should be able to add customers", () => {
    const { result } = renderHook(() => useCustomersStore());
    expect(result.current.customers.length).toBe(0);

    const COUNT_CUSTOMERS = 10;
    act(() => {
      for (let i = 0; i < COUNT_CUSTOMERS; i++) {
        result.current.create(customerGenerator());
      }
    });
    expect(result.current.customers.length).toBe(COUNT_CUSTOMERS);
  });

  test("should be able to edit an existing customer", async () => {
    const { result } = renderHook(() => useCustomersStore());
    const newCustomer = newCustomerGenerator();

    const customerFromStore = await act(() =>
      result.current.create(newCustomer)
    );
    expect(result.current.getById(customerFromStore.id)?.name).toBe(
      newCustomer.name
    );

    const TEST_NAME = "Test Name";
    customerFromStore.name = TEST_NAME;
    act(() => result.current.edit(customerFromStore));
    expect(result.current.getById(customerFromStore.id)?.name).toBe(TEST_NAME);
  });
});
