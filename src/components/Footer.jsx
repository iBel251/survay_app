import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import React from "react";

function Footer() {
  const styles = {
    footerContainer: {
      width: "100%",
      height: "100px",
      backgroundColor: "gray",
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
    },
  };
  return (
    <Paper
      sx={styles.footerContainer}
      component="footer"
      square
      variant="outlined"
    >
      <Typography>footer</Typography>
    </Paper>
  );
}

export default Footer;
