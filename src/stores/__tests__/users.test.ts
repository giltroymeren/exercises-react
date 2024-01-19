import { act, renderHook } from "@testing-library/react";
import { useUsersStore } from "../users";
import { User } from "../../features/users/types";

test("should be able to add users", () => {
  const { result } = renderHook(() => useUsersStore());

  expect(result.current.users.length).toBe(0);

  const newUser: User = {
    id: 100,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };

  act(() => {
    result.current.add(newUser);
  });

  expect(result.current.users.length).toBe(1);
});
