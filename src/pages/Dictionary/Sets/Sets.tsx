import React, { FC, useState } from "react";
import { Box, Button } from "@mui/material";

import { ModalAddSet } from "pages/Dictionary/ModalAddSet";
import { SetsList } from "pages/Dictionary/SetsList";

import { TextTitle } from "./Sets.styles";
import { ISet } from "types";

interface ISetsProps {
  sets: ISet[] | undefined;
}

export const Sets: FC<ISetsProps> = ({ sets }) => {
  const [openModalAddSet, setModalOpenAddSet] = useState<boolean>(false);

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
