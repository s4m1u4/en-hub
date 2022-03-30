import React, { FC } from "react";
import { HeaderNavigation } from "./components/HeaderNavigation";
import { HeaderMenu } from "./components/HeaderMenu";

import { AppBar, Container, Toolbar } from "@mui/material";

export const Header: FC = () => {
  return (
    <AppBar position="sticky" sx={{ width: "100%" }} color="secondary">
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
