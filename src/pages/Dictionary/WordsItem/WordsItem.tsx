import React, { FC, useState } from "react";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import { Box, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EmojiObjectsRoundedIcon from "@mui/icons-material/EmojiObjectsRounded";

import { ModalDeleteWord } from "pages/Dictionary/ModalDeleteWord";
import { useAppDispatch, useAppSelector } from "hooks";
import {
  getWords,
  deleteWord,
  changeStateWord,
} from "store/reducers/dictionarySlice";
import { handleIconStyles } from "helpers";
import { IWord } from "types";

import { TextWord } from "./WordsItem.styles";

interface IWordsItem {
  word: IWord;
}

export const WordsItem: FC<IWordsItem> = ({ word }) => {
  const dispatch = useAppDispatch();
  const { searchValue, stateValue } = useAppSelector(
    (state) => state.dictionary
  );
  const [openModalDeleteWord, setModalOpenDeleteWord] =
    useState<boolean>(false);

  const handleOpenModalDeleteWord = () => setModalOpenDeleteWord(true);
  const handleCloseModalDeleteWord = () => setModalOpenDeleteWord(false);

  const handleDeleteWord = async (wordId: string | number) => {
    await dispatch(deleteWord(wordId));
    await dispatch(getWords({ searchValue, stateValue }));
    handleCloseModalDeleteWord();
  };

  const handleSetStateWord = async (
    wordId: string | number,
    newState: string
  ) => {
    await dispatch(changeStateWord({ wordId, newState }));
    await dispatch(getWords({ searchValue, stateValue }));
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        py: 0.5,
        "&:not(:last-child)": { borderBottom: `1px solid ${grey[500]}` },
      }}
    >
      <TextWord>
        <span>{word.originalWord}</span> - {word.translationWord}
      </TextWord>
      <PopupState variant="popper">
        {(popupState) => (
          <Box>
            <IconButton {...bindTrigger(popupState)}>
              <EmojiObjectsRoundedIcon sx={handleIconStyles(word.stateWord)} />
            </IconButton>
            <IconButton onClick={handleOpenModalDeleteWord}>
              <DeleteRoundedIcon />
            </IconButton>
            <ModalDeleteWord
              word={word}
              open={openModalDeleteWord}
              handleClose={handleCloseModalDeleteWord}
              handleDeleteWord={handleDeleteWord}
            />
            <Menu {...bindMenu(popupState)}>
              {word.stateWord !== "new" && (
                <MenuItem
                  onClick={() => handleSetStateWord(word.id, "new")}
                  dense
                >
                  Reset learning status
                </MenuItem>
              )}
              {word.stateWord !== "learning" && (
                <MenuItem
                  onClick={() => handleSetStateWord(word.id, "learning")}
                  dense
                >
                  Move to learning words
                </MenuItem>
              )}
              {word.stateWord !== "learned" && (
                <MenuItem
                  onClick={() => handleSetStateWord(word.id, "learned")}
                  dense
                >
                  Move to learned words
                </MenuItem>
              )}
            </Menu>
          </Box>
        )}
      </PopupState>
    </Stack>
  );
};
