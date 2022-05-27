import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  Grid,
  IconButton,
  Typography,
  CardContent,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { grey } from "@mui/material/colors";

import { useDeleteSetMutation } from "store/reducers/set/setApi";
import { useGetWordsQuery } from "store/reducers/word/wordApi";
import { ModalChangeSet, ModalDeleteSet } from "pages/Dictionary";
import { getUserId } from "helpers";
import { useActions } from "hooks";
import { ISet } from "types";

interface ISetsItem {
  set: ISet;
}

export const SetsItem: FC<ISetsItem> = ({ set }) => {
  const userId = getUserId();

  const { resetState } = useActions();
  const { data } = useGetWordsQuery({ userId });
  const [deleteSet] = useDeleteSetMutation();

  const [openModalDeleteSet, setModalOpenDeleteSet] = useState<boolean>(false);
  const [openModalChangeSet, setModalOpenChangeSet] = useState<boolean>(false);

  const handleOpenModalDeleteSet = () => setModalOpenDeleteSet(true);
  const handleCloseModalDeleteSet = () => setModalOpenDeleteSet(false);
  const handleOpenModalChangeSet = () => setModalOpenChangeSet(true);
  const handleCloseModalChangeSet = () => setModalOpenChangeSet(false);

  const handleDeleteSet = async (setId: string) => {
    await deleteSet(setId);
    handleCloseModalDeleteSet();
  };

  const wordCount = data?.words?.filter((word) => word.set === set.id).length;

  return (
    <Grid item xs={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CardContent
          component={Link}
          to={`/dictionary/sets/${set.id}`}
          onClick={() => resetState()}
          sx={{
            gap: "0.5rem",
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            color: "inherit",
          }}
        >
          <Typography variant="h6" component="p" sx={{ textAlign: "center" }}>
            {set.title}
          </Typography>
          <Typography variant="subtitle2">
            Word count: {set.id === "my" ? data?.words?.length : wordCount}
          </Typography>
        </CardContent>
        {!set.permanent && (
          <Box sx={{ display: "flex", flexDirection: "column", p: 1 }}>
            <IconButton onClick={handleOpenModalChangeSet}>
              <EditIcon sx={{ color: grey[500] }} />
            </IconButton>
            <ModalChangeSet
              set={set}
              open={openModalChangeSet}
              handleClose={handleCloseModalChangeSet}
            />
            <IconButton onClick={handleOpenModalDeleteSet}>
              <DeleteRoundedIcon sx={{ color: grey[500], margin: 0 }} />
            </IconButton>
            <ModalDeleteSet
              set={set}
              open={openModalDeleteSet}
              handleClose={handleCloseModalDeleteSet}
              handleDeleteSet={handleDeleteSet}
            />
          </Box>
        )}
      </Card>
    </Grid>
  );
};
