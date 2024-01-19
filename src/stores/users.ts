import { create } from "zustand";
import { User } from "../features/users/types";
import { useUsers } from "../features/users/api/getUsers";

type State = {
  users: User[];
  loading: boolean;
};

type Actions = {
  setAll: (users: User[]) => void;
  getById: (id: number) => User | undefined;
  add: (user: User) => void;
  delete: (id: number) => void;
  edit: (newUser: User) => void;
};

const initialState: State = {
  users: [],
  loading: false,
};

export const useUsersStore = create<State & Actions>((set, get) => ({
  ...initialState,
  setAll: (users) => set({ users }),
  getById: (id) => get().users.find((user) => user.id === id) || undefined,
  add: (user) =>
    set((state) => ({
      users: [...state.users, user],
    })),
  delete: (id) =>
    set((state) => ({ users: state.users.filter((user) => user.id !== id) })),
  edit: (newUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === newUser.id ? { ...user, newUser } : user
      ),
    })),
}));
