import React, { FC, ReactNode } from "react";
import { Box, Modal } from "@mui/material";

import { BoxMain } from "./ModalComponent.styles";

interface ModalComponentProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const ModalComponent: FC<ModalComponentProps> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={BoxMain}>{children}</Box>
    </Modal>
  );
};
