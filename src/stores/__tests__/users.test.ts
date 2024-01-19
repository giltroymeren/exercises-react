import { act, renderHook } from "@testing-library/react";
import { useUsersStore } from "../users";
import { User } from "../../features/users/types";
import { userGenerator } from "../../test/data-generators";

test("should be able to add users", () => {
  const { result } = renderHook(() => useUsersStore());

  expect(result.current.users.length).toBe(0);

  act(() => {
    result.current.add(userGenerator());
  });

  expect(result.current.users.length).toBe(1);
});
