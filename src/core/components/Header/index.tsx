import React from "react";
import { Box, Grid } from "@material-ui/core";

export default function Header() {
  return (
    <header>
      <Box p={4}>
        <Grid container>
          <Grid item>
            <img src="/snappTextLogo.svg" />
          </Grid>
        </Grid>
      </Box>
    </header>
  );
}
