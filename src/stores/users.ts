import { create } from "zustand";
import { NewUser, User } from "../features/users/types";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  users: User[];
  fetched: boolean;
};

type Actions = {
  setAll: (users: User[]) => void;
  getById: (id: number) => User | undefined;
  create: (user: NewUser) => void;
  remove: (id: number) => void;
  edit: (newUser: User) => void;
};

const initialState: State = {
  users: [],
  fetched: false,
};

export const useUsersStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      ...initialState,
      setAll: (users) => set({ users, fetched: true }),
      getById: (id) => get().users.find((user) => user.id === id) || undefined,
      create: (user) =>
        set((state) => ({
          users: [...state.users, { ...user, id: Date.now() }],
        })),
      remove: (id) =>
        set((state) => ({
          users: state.users.filter((user) => user.id !== id),
        })),
      edit: (newUser) =>
        set((state) => ({
          users: state.users.map((user) =>
            user.id === newUser.id ? { ...user, newUser } : user
          ),
        })),
    }),
    {
      name: "users-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
