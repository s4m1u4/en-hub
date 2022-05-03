import React, { FC, useState } from "react";
import { Box, Button } from "@mui/material";

import { SetsList } from "pages/Dictionary/SetsList";
import { useAppSelector } from "hooks";

import { TextTitle } from "./Sets.styles";
import { ModalAddSet } from "pages/Dictionary/ModalAddSet";

export const Sets: FC = () => {
  const [openModalAddSet, setModalOpenAddSet] = useState<boolean>(false);
  const { sets } = useAppSelector((state) => state.dictionary);

  const handleOpenModalAddSet = () => setModalOpenAddSet(true);
  const handleCloseModalAddSet = () => setModalOpenAddSet(false);

  return (
    <Box
      sx={{
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <TextTitle>Sets</TextTitle>
      <Button
        color="primary"
        variant="contained"
        onClick={handleOpenModalAddSet}
      >
        Add new set
      </Button>
      <ModalAddSet
        open={openModalAddSet}
        handleClose={handleCloseModalAddSet}
      />
      <SetsList sets={sets} />
    </Box>
  );
};
