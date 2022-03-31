import React, { FC } from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import { HeaderNavigation, HeaderMenu } from "components/Header";

export const Header: FC = () => {
  return (
    <AppBar position="sticky" sx={{ width: "100%" }} color="default">
      <Container>
        <Toolbar
          sx={{
            padding: { xs: "0" },
            minHeight: { xs: "64px" },
            justifyContent: "space-between",
          }}
        >
          <HeaderNavigation />
          <HeaderMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
