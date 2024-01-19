import { renderHook } from "@testing-library/react";
import { useUsersStore } from "../users";
import { User } from "../../features/users/types";

test("should be able to add users", () => {
  const { result } = renderHook(() => useUsersStore());

  expect(result.current.users.length).toBe(0);
});
