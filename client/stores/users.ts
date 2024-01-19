import { create } from "zustand";
import { User } from "../features/users/types";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  users: User[];
};

type Actions = {
  setAll: (users: User[]) => void;
  getById: (id: number) => User | undefined;
  add: (user: User) => void;
  remove: (id: number) => void;
  edit: (newUser: User) => void;
};

const initialState: State = {
  users: [],
};

export const useUsersStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      ...initialState,
      setAll: (users) => set({ users }),
      getById: (id) => get().users.find((user) => user.id === id) || undefined,
      add: (user) =>
        set((state) => ({
          users: [...state.users, user],
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
      storage: createJSONStorage(() => localStorage),
    }
  )
);