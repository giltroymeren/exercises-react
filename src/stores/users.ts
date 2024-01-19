import { create } from "zustand";
import { User } from "../features/users/types";
import { useUsers } from "../features/users/api/getUsers";

type State = {
  users: User[];
  loading: boolean;
};

type Actions = {
  setAll: (users: User[]) => void;
  getAll: (state: State) => User[];
  // TODO getById, add, edit, delete
};

const initialState: State = {
  users: [],
  loading: false,
};

export const useUsersStore = create<State & Actions>((set) => ({
  ...initialState,
  setAll: (users) => set({ users }),
  getAll: (state: State) => state.users,
  reset: () => {
    set(initialState);
  },
}));
