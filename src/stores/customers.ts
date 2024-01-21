import { Customer, NewCustomer } from "@/features/customers/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  customers: Customer[];
  fetched: boolean;
};

type Actions = {
  setAll: (customers: Customer[]) => void;
  getById: (id: number) => Customer | undefined;
  create: (customer: NewCustomer) => Customer;
  remove: (id: number) => void;
  edit: (newCustomer: Customer) => void;
};

const initialState: State = {
  customers: [],
  fetched: false,
};

export const useCustomersStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      ...initialState,
      setAll: (customers) => set({ customers, fetched: true }),
      getById: (id) =>
        get().customers.find((customer) => customer.id === id) || undefined,
      create: (customer) => {
        const newCustomer = { ...customer, id: Date.now() };
        set((state) => ({
          customers: [...state.customers, newCustomer],
        }));
        return newCustomer;
      },
      remove: (id) =>
        set((state) => ({
          customers: state.customers.filter((customer) => customer.id !== id),
        })),
      edit: (newCustomer) =>
        set((state) => ({
          customers: state.customers.map((customer) =>
            customer.id === newCustomer.id
              ? { ...customer, ...newCustomer }
              : customer
          ),
        })),
    }),
    {
      name: "storage-customers",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

/**
 * Enables access of the zustand store during testing
 * @author Gleb Bahmutov
 * @link https://glebbahmutov.com/blog/spok-redux/
 */
if (window.Cypress) {
  //@ts-ignore
  window.Storage = useCustomersStore;
}
