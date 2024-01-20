import { act, renderHook } from "@testing-library/react";
import { useUsersStore } from "../users";
import { newUserGenerator, userGenerator } from "../../test/data-generators";
import { NewUser } from "../../features/users";

const initialStoreState = useUsersStore.getState();

describe("UsersStore", () => {
  afterEach(() => act(() => useUsersStore.setState(initialStoreState)));

  test("should be able to add and delete a user", async () => {
    const { result } = renderHook(() => useUsersStore());
    const newUser = newUserGenerator();

    const userFromStore = await act(() => result.current.create(newUser));
    expect(result.current.getById(userFromStore.id)?.name).toBe(newUser.name);

    act(() => result.current.remove(userFromStore.id));
    expect(result.current.getById(userFromStore.id)).toBe(undefined);
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
        result.current.create(userGenerator());
      }
    });
    expect(result.current.users.length).toBe(COUNT_USERS);
  });

  test("should be able to edit an existing user", async () => {
    const { result } = renderHook(() => useUsersStore());
    const newUser = newUserGenerator();

    const userFromStore = await act(() => result.current.create(newUser));
    expect(result.current.getById(userFromStore.id)?.name).toBe(newUser.name);

    const TEST_NAME = "Test Name";
    userFromStore.name = TEST_NAME;
    act(() => result.current.edit(userFromStore));
    expect(result.current.getById(userFromStore.id)?.name).toBe(TEST_NAME);
  });
});
