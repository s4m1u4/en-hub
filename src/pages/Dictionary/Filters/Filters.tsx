import React, { ChangeEvent, FC, MouseEvent, useState } from "react";
import {
  Box,
  Button,
  Tooltip,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import EmojiObjectsRoundedIcon from "@mui/icons-material/EmojiObjectsRounded";
import { green, grey, orange } from "@mui/material/colors";

import { useActions, useAppSelector } from "hooks";
import { ModalAddWord } from "pages/Dictionary";

export const Filters: FC = () => {
  const { setPage, setStateValue, setSearchValue } = useActions();

  const { stateValue } = useAppSelector((state) => state.word);

  const [openModalAddWord, setModalOpenAddWord] = useState<boolean>(false);

  const handleOpenModalAddWord = () => setModalOpenAddWord(true);
  const handleCloseModalAddWord = () => setModalOpenAddWord(false);

  const handleAlignment = async (
    event: MouseEvent<HTMLElement>,
    newStateValue: string
  ) => {
    if (newStateValue !== null) {
      setPage(1);
      setStateValue(newStateValue);
    }
  };

  const handleSearchWords = async (event: ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setSearchValue(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <TextField
          sx={{ width: 210 }}
          type="text"
          size="small"
          label="Search"
          onChange={handleSearchWords}
        />
        <Button
          color="primary"
          variant="contained"
          onClick={handleOpenModalAddWord}
        >
          Add word
        </Button>
        <ModalAddWord
          open={openModalAddWord}
          handleClose={handleCloseModalAddWord}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <ToggleButtonGroup
          exclusive
          size="small"
          value={stateValue}
          onChange={handleAlignment}
        >
          <ToggleButton value="">All</ToggleButton>
          <ToggleButton value="new">
            <Tooltip title="New words" placement="top" disableInteractive arrow>
              <EmojiObjectsRoundedIcon sx={{ color: grey[500] }} />
            </Tooltip>
          </ToggleButton>
          <ToggleButton value="learning">
            <Tooltip title="Learning" placement="top" disableInteractive arrow>
              <EmojiObjectsRoundedIcon sx={{ color: orange[500] }} />
            </Tooltip>
          </ToggleButton>
          <ToggleButton value="learned">
            <Tooltip title="Learned" placement="top" disableInteractive arrow>
              <EmojiObjectsRoundedIcon sx={{ color: green[500] }} />
            </Tooltip>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};
