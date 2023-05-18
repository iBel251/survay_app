import { Button, Typography, Stack, Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import commonStyles from "../styles/commonStyles";
import Image from "../../assets/signup.png";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

function Signup() {
  const styles = {};
  return (
    <Box sx={commonStyles.rootContainer}>
      <Typography
        color="title.blue"
        variant="h3"
        sx={{ textAlign: "center", py: "60px" }}
      >
        Sign in or create an account
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box
          pl={{ xs: 0, md: 4 }}
          sx={{ width: { xs: "100%", md: "50%" }, height: 500 }}
        >
          <div
            style={{
              backgroundImage: `url(${Image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top left",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </Box>

        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Typography variant="h5" mb="20px">
            Global KoboToolbox Server
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <Button href="register" variant="contained">
              Create an account
            </Button>
            <Button href="login" variant="outlined">
              Sign in
            </Button>
          </Stack>
          <Typography mb={2} mt={4}>
            Most people use our global KoboToolbox server. It is free for all to
            use to collect data for an unlimited number of projects.
          </Typography>
          <Typography>
            Our free community plan includes unlimited projects and unlimited
            data collectors / collaborators. You can collect up to 10,000
            submissions per month and store up to 5GB in media attachments.
          </Typography>
          <Stack direction={"row"} my={3}>
            <Link href="#" color="error">
              Learn more about our user support and upgrade options
            </Link>
            <EastIcon sx={{ fontSize: "20px", marginLeft: "5px" }} />
          </Stack>
          <Typography>
            If you work for a humanitarian organization, or your organization
            has its own KoboToolbox server, see the sign in instructions below
            for specialized KoboToolbox servers.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default Signup;
