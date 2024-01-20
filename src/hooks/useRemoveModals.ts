import { NiceModalHandler } from "@ebay/nice-modal-react";
import * as React from "react";

const useRemoveModals = (
  { remove }: NiceModalHandler,
  persistOnMount = false
) => {
  React.useEffect(
    () => () => {
      if (!persistOnMount) {
        return remove();
      }
      return;
    },
    [persistOnMount, remove]
  );
};

export default useRemoveModals;
