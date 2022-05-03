import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Grid,
  IconButton,
  Typography,
  CardContent,
  CardActions,
} from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { grey } from "@mui/material/colors";

import { ISet } from "types";
import { useAppDispatch, useAppSelector } from "hooks";
import { deleteSet, getSets, resetState } from "store/reducers/dictionarySlice";
import { ModalDeleteSet } from "pages/Dictionary";

interface ISetsItem {
  set: ISet;
}

export const SetsItem: FC<ISetsItem> = ({ set }) => {
  const dispatch = useAppDispatch();
  const { words } = useAppSelector((state) => state.dictionary);

  const [openModalDeleteSet, setModalOpenDeleteSet] = useState<boolean>(false);

  const handleOpenModalDeleteSet = () => setModalOpenDeleteSet(true);
  const handleCloseModalDeleteSet = () => setModalOpenDeleteSet(false);

  const handleDeleteSet = async (setId: string | number) => {
    await dispatch(deleteSet(setId));
    await dispatch(getSets({}));
    handleCloseModalDeleteSet();
  };

  const wordCount = words.filter((word) => word.set === set.id).length;

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
          onClick={() => dispatch(resetState())}
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
            Word count: {set.id === "my" ? words.length : wordCount}
          </Typography>
        </CardContent>
        {!set.permanent && (
          <CardActions>
            <IconButton onClick={handleOpenModalDeleteSet}>
              <DeleteRoundedIcon sx={{ color: grey[500] }} />
            </IconButton>
            <ModalDeleteSet
              set={set}
              open={openModalDeleteSet}
              handleClose={handleCloseModalDeleteSet}
              handleDeleteSet={handleDeleteSet}
            />
          </CardActions>
        )}
      </Card>
    </Grid>
  );
};
