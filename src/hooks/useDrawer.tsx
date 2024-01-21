import * as NiceModal from "@ebay/nice-modal-react";
import {
  SimpleDrawer,
  SimpleDrawerProps,
} from "@/components/Elements/SimpleDrawer";
import useRemoveModals from "./useRemoveModals";

const useDrawer = (config?: {
  persistOnMount: boolean;
}): NiceModal.NiceModalHandler<SimpleDrawerProps> => {
  const drawer = NiceModal.useModal(SimpleDrawer);

  useRemoveModals(drawer, config?.persistOnMount);

  return drawer;
};

export default useDrawer;
