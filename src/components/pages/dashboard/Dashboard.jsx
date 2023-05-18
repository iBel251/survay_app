import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FitbitOutlined } from "@mui/icons-material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DraftsIcon from "@mui/icons-material/Drafts";
import ArchiveIcon from "@mui/icons-material/Archive";
import { Stack } from "@mui/system";
import { Avatar, Button } from "@mui/material";
import AddQuestions from "./AddQuestions";
import { Link, Outlet, Route, Routes } from "react-router-dom";

const drawerWidth = 250;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const styles = {
    sidebarLeft: {
      backgroundColor: "#F3F4F6",
      width: "60px",
    },
    btnSidebar: {
      justifyContent: "left",
      color: "#282828",
      flexGrow: 1,
    },
    counters: {
      width: 24,
      height: 24,
      margin: "auto",
      fontSize: 14,
      mr: 1,
    },
  };
  const drawer = (
    <Stack direction={"row"} height="100%">
      <Stack sx={styles.sidebarLeft}>
        <Toolbar />
        <IconButton>
          <AssignmentIcon sx={{ mt: "15px", mx: "auto" }} />
        </IconButton>
      </Stack>
      <Box width={1} alignContent="left">
        <Toolbar />
        <Divider />
        <Stack flexGrow={1} spacing={1} mt={1} p={1}>
          <Button variant="contained" href="/dashboard/add">
            NEW
          </Button>
          <Stack direction={"row"}>
            <Button
              sx={styles.btnSidebar}
              startIcon={<RocketLaunchIcon />}
              variant="text"
            >
              Deployed
            </Button>
            <Avatar sx={styles.counters}>0</Avatar>
          </Stack>
          <Stack direction={"row"}>
            <Button
              sx={styles.btnSidebar}
              startIcon={<DraftsIcon />}
              variant="text"
            >
              Draft
            </Button>
            <Avatar sx={styles.counters}>0</Avatar>
          </Stack>
          <Stack direction={"row"}>
            <Button
              sx={styles.btnSidebar}
              startIcon={<ArchiveIcon />}
              variant="text"
            >
              Archived
            </Button>
            <Avatar sx={styles.counters}>0</Avatar>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          ml: { sm: `${drawerWidth}px` },
          zIndex: 3000,
          backgroundColor: "#333847",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <FitbitOutlined />
          <Typography variant="h6" noWrap component="div">
            Survey App
          </Typography>
          <Stack direction={"row"}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "Search" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}

export default Dashboard;
