import React, { FC, useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import { green } from "@mui/material/colors";

import { ModalAddSet } from "pages/Dictionary/ModalAddSet";
import { SetsList } from "pages/Dictionary/SetsList";
import { ISet } from "types";

import { TextTitle } from "./Sets.styles";

interface ISetsProps {
  sets: ISet[] | undefined;
  isLoading: boolean;
}

export const Sets: FC<ISetsProps> = ({ sets, isLoading }) => {
  const [openModalAddSet, setModalOpenAddSet] = useState<boolean>(false);

  const handleOpenModalAddSet = () => setModalOpenAddSet(true);
  const handleCloseModalAddSet = () => setModalOpenAddSet(false);

  return (
    <Box sx={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
      <TextTitle>Sets</TextTitle>
      {isLoading ? (
        <Box sx={{ py: 4, display: "flex", justifyContent: "center" }}>
          <CircularProgress sx={{ color: green[500] }} />
        </Box>
      ) : (
        <>
          <Button
            color="primary"
            variant="contained"
            sx={{ alignSelf: "flex-start" }}
            onClick={handleOpenModalAddSet}
          >
            Add new set
          </Button>
          <ModalAddSet
            open={openModalAddSet}
            handleClose={handleCloseModalAddSet}
          />
          <SetsList sets={sets} />
        </>
      )}
    </Box>
  );
};
