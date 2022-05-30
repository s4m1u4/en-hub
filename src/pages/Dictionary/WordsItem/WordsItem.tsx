import React, { FC, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import {
  Box,
  Menu,
  Stack,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EmojiObjectsRoundedIcon from "@mui/icons-material/EmojiObjectsRounded";

import { ModalChangeWord, ModalDeleteWord } from "pages/Dictionary";
import {
  useChangeWordMutation,
  useDeleteWordMutation,
} from "store/reducers/word/wordApi";
import { handleIconStyles } from "helpers";
import { IChangeWordParams } from "store/types";
import { ISet, IWord } from "types";
import { useActions } from "hooks";

import { TextWord } from "./WordsItem.styles";

interface IWordsItem {
  word?: IWord | undefined;
  sets?: ISet[] | undefined;
}

export const WordsItem: FC<IWordsItem> = ({ word, sets }) => {
  const { setId } = useParams();
  const { resetState } = useActions();
  const [deleteWord] = useDeleteWordMutation();
  const [changeWord] = useChangeWordMutation();

  const [openModalDeleteWord, setModalOpenDeleteWord] =
    useState<boolean>(false);
  const [openModalChangeWord, setModalOpenChangeWord] =
    useState<boolean>(false);

  const handleOpenModalDeleteWord = () => setModalOpenDeleteWord(true);
  const handleCloseModalDeleteWord = () => setModalOpenDeleteWord(false);
  const handleOpenModalChangeWord = () => setModalOpenChangeWord(true);
  const handleCloseModalChangeWord = () => setModalOpenChangeWord(false);

  const handleDeleteWord = async (wordId: string | number | undefined) => {
    await deleteWord(wordId);
    handleCloseModalDeleteWord();
  };

  const handleChangeWord = async ({
    wordId,
    newState,
    originalWord,
    translationWord,
  }: IChangeWordParams) => {
    await changeWord({ wordId, newState, originalWord, translationWord });
  };

  const currentSet: ISet | undefined = sets?.find(
    (set) => set.id === word?.set
  );

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
        <span>{word?.originalWord}</span> - {word?.translationWord}
      </TextWord>
      <PopupState variant="popper">
        {(popupState) => (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {word?.set !== setId && (
              <Typography
                sx={{ color: blue[500], mr: 1 }}
                variant="body2"
                component={Link}
                to={`/dictionary/sets/${currentSet?.id}`}
                onClick={() => resetState()}
              >
                {currentSet?.title}
              </Typography>
            )}
            <IconButton onClick={handleOpenModalChangeWord}>
              <EditIcon sx={{ color: grey[500] }} />
            </IconButton>
            <ModalChangeWord
              word={word}
              sets={sets}
              open={openModalChangeWord}
              handleClose={handleCloseModalChangeWord}
            />
            <IconButton {...bindTrigger(popupState)}>
              <EmojiObjectsRoundedIcon sx={handleIconStyles(word?.stateWord)} />
            </IconButton>
            <IconButton onClick={handleOpenModalDeleteWord}>
              <DeleteRoundedIcon sx={{ color: grey[500] }} />
            </IconButton>
            <ModalDeleteWord
              word={word}
              open={openModalDeleteWord}
              handleClose={handleCloseModalDeleteWord}
              handleDeleteWord={handleDeleteWord}
            />
            <Menu {...bindMenu(popupState)}>
              {word?.stateWord !== "new" && (
                <MenuItem
                  onClick={() =>
                    handleChangeWord({ wordId: word?.id, newState: "new" })
                  }
                  dense
                >
                  Reset learning status
                </MenuItem>
              )}
              {word?.stateWord !== "learning" && (
                <MenuItem
                  onClick={() =>
                    handleChangeWord({ wordId: word?.id, newState: "learning" })
                  }
                  dense
                >
                  Move to learning words
                </MenuItem>
              )}
              {word?.stateWord !== "learned" && (
                <MenuItem
                  onClick={() =>
                    handleChangeWord({ wordId: word?.id, newState: "learned" })
                  }
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
