import { act, renderHook } from "@testing-library/react";
import { useUsersStore } from "../users";
import { User } from "../../features/users/types";
import { userGenerator } from "../../test/data-generators";

const initialStoreState = useUsersStore.getState();

describe("UsersStore", () => {
  afterEach(() => act(() => useUsersStore.setState(initialStoreState)));

  test("should be able to add a user", () => {
    const { result } = renderHook(() => useUsersStore());

    const newUser = userGenerator();
    act(() => {
      result.current.add(newUser);
    });

    expect(result.current.getById(newUser.id)?.name).toBe(newUser.name);
  });

  test("should not find an invalid user", () => {
    const { result } = renderHook(() => useUsersStore());
    expect(result.current.getById(123456789)).toBe(undefined);
  });

  test("should be able to set and get users", () => {
    const { result } = renderHook(() => useUsersStore());
    expect(result.current.users.length).toBe(0);

    const COUNT_USERS = 10;
    const newUsers = Array.from({ length: COUNT_USERS }, () => userGenerator());
    act(() => result.current.setAll(newUsers));

    expect(result.current.users.length).toBe(COUNT_USERS);
    newUsers.forEach((user) => {
      const userFromStore = result.current.getById(user.id);
      expect(user.name).toBe(userFromStore?.name);
    });
  });

  test("should be able to add users", () => {
    const { result } = renderHook(() => useUsersStore());
    expect(result.current.users.length).toBe(0);

    const COUNT_USERS = 10;
    act(() => {
      for (let i = 0; i < COUNT_USERS; i++) {
        result.current.add(userGenerator());
      }
    });

    expect(result.current.users.length).toBe(COUNT_USERS);
  });
});
