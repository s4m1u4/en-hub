import React, { ChangeEvent, FC, MouseEvent, useState } from "react";
import { useParams } from "react-router-dom";
import EmojiObjectsRoundedIcon from "@mui/icons-material/EmojiObjectsRounded";
import {
  Box,
  Button,
  Tooltip,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { green, grey, orange } from "@mui/material/colors";

import { useAppDispatch, useAppSelector } from "hooks";
import { ModalAddWord } from "pages/Dictionary";
import {
  setPage,
  getWords,
  setStateValue,
  setSearchValue,
} from "store/reducers/dictionarySlice";

export const Filters: FC = () => {
  const dispatch = useAppDispatch();
  const { setId } = useParams();
  const { searchValue, stateValue } = useAppSelector(
    (state) => state.dictionary
  );
  const [openModalAddWord, setModalOpenAddWord] = useState<boolean>(false);

  const handleOpenModalAddWord = () => setModalOpenAddWord(true);
  const handleCloseModalAddWord = () => setModalOpenAddWord(false);

  const handleAlignment = (
    event: MouseEvent<HTMLElement>,
    newStateValue: string
  ) => {
    if (newStateValue !== null) {
      dispatch(setPage(1));
      dispatch(
        getWords({
          setId,
          limit: 10,
          searchValue,
          stateValue: dispatch(setStateValue(newStateValue)).payload,
        })
      );
    }
  };

  const handleSearchWords = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPage(1));
    dispatch(
      getWords({
        setId,
        limit: 10,
        searchValue: dispatch(setSearchValue(event.target.value)).payload,
        stateValue,
      })
    );
  };

  return (
    <Box
      sx={{
        mb: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <TextField
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
      <Box>
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
