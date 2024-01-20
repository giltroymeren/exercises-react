import * as React from "react";
import useRemoveModals from "./useRemoveModals";
import * as NiceModal from "@ebay/nice-modal-react";
import {
  SimpleDrawer,
  SimpleDrawerProps,
} from "../components/Elements/SimpleDrawer";

const useDrawer = (config?: {
  persistOnMount: boolean;
}): NiceModal.NiceModalHandler<SimpleDrawerProps> => {
  const drawer = NiceModal.useModal(SimpleDrawer);

  useRemoveModals(drawer, config?.persistOnMount);

  return drawer;
};

export default useDrawer;
