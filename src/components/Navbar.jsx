import FitbitIcon from "@mui/icons-material/Fitbit";
import MenuIcon from "@mui/icons-material/Menu";
import { grey } from "@mui/material/colors";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Drawer,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import { useState } from "react";
function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const styles = {
    navBtn: {
      color: grey[900],
      fontWeight: "bold",
    },
    navBtnDesktop: {
      display: {
        xs: "none",
        md: "initial",
      },
    },
    navBtnMobile: {
      display: {
        xs: "flex",
        md: "flex",
      },
      flexDirection: "column",
    },
    logoText: {
      display: { xs: "none", md: "initial" },
      flexGrow: 1,
    },
    logoTextMobile: {
      flexGrow: 1,
      maxHeight: "50px",
      textAlign: "center",
    },
    drawer: {
      zIndex: 900,
      display: { xs: "block", md: "none" },
    },
    drawerBox: {
      mt: "50px",
      width: "240px",
      height: "100%",
    },
  };
  return (
    <>
      <AppBar>
        <Toolbar sx={{ background: "#fefefe" }}>
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            size="large"
            color="primary"
            onClick={() => {
              handleDrawer();
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton size="large" color="primary">
            <FitbitIcon />
          </IconButton>
          <Typography variant="h5" color="primary" sx={styles.logoText}>
            Survey App
          </Typography>
          <Stack direction={"row"} spacing={1}>
            <Box sx={styles.navBtnDesktop}>
              <Button href="/about" sx={styles.navBtn}>
                ABOUT US
              </Button>
              <Button href="/features" sx={styles.navBtn}>
                FEATURES
              </Button>
              <Button href="services" sx={styles.navBtn}>
                SERVICES
              </Button>
              <Button href="howitworks" sx={styles.navBtn}>
                HOW IT WORKS
              </Button>
              <Button href="blog" sx={styles.navBtn}>
                BLOG
              </Button>
              <Button href="help" sx={styles.navBtn}>
                HELP
              </Button>
            </Box>
            <Button
              href="signup"
              sx={{
                "&:hover": { backgroundColor: "primary.main", color: "white" },
              }}
              variant="outlined"
              color="primary"
            >
              Sign up
            </Button>
            <Button href="donate" variant="contained" color="primary">
              Donate
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={styles.drawer}
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={styles.drawerBox}>
          <Stack sx={styles.drawerBox} spacing={1}>
            <Typography variant="h5" color="primary" sx={styles.logoTextMobile}>
              Survey App
            </Typography>
            <Box sx={styles.navBtnMobile}>
              <Button sx={styles.navBtn}>ABOUT US</Button>
              <Button sx={styles.navBtn}>FEATURES</Button>
              <Button sx={styles.navBtn}>SERVICES</Button>
              <Button sx={styles.navBtn}>HOW IT WORKS</Button>
              <Button sx={styles.navBtn}>BLOG</Button>
              <Button sx={styles.navBtn}>HELP</Button>
            </Box>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
