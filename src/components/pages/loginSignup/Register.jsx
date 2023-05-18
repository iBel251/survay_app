import { Box, Stack } from "@mui/system";
import commonStyles from "../../styles/commonStyles";
import Image from "../../../assets/background.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FitbitIcon from "@mui/icons-material/Fitbit";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../../../context/UserAuthContext";

function Register() {
  const navigate = useNavigate();
  const { signup } = useUserAuth();
  const [gender, setGender] = useState("");
  const [inputs, setInputs] = useState({
    fullname: "",
    organization: "",
    username: "",
    email: "",
    sector: "",
    country: "",
    pwd: "",
    repPwd: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(inputs.email, inputs.pwd);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  const styles = {
    navBtn: {
      fontWeight: "bold",
    },
    logoText: {
      flexGrow: 1,
    },
    rootContainer: {
      position: "relative",
      background: "#E6F4FF",
      height: "800px",
    },
    formContainer: {
      position: "absolute",
      backgroundColor: "#333847cc",
      color: "white",
      width: "65%",
      top: "100px",
      left: "50%",
      transform: "translatex(-50%)",
      borderRadius: "5px",
    },
    rightSide: {
      width: "40%",
      p: "25px",
    },
    leftSide: {
      pl: "25px",
    },
    inputField: {
      backgroundColor: "white",
      borderRadius: "5px",
    },
  };
  return (
    <>
      <AppBar>
        <Toolbar sx={{ background: "#fefefe" }}>
          <IconButton size="large" color="primary">
            <FitbitIcon />
          </IconButton>
          <Typography variant="h5" color="primary" sx={styles.logoText}>
            Survey App
          </Typography>
          <Stack direction={"row"} spacing={1}>
            <Button variant="outlined" href="/" sx={styles.navBtn}>
              Home
            </Button>
            <Button variant="contained" href="login" sx={styles.navBtn}>
              Login
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={styles.rootContainer}>
        <div
          style={{
            position: "absolute",
            backgroundColor: "black",
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left",
            width: "100%",
            height: "100%",
          }}
        ></div>
        <Stack sx={styles.formContainer} direction="row" spacing={3}>
          {/* Form section */}
          <Box sx={styles.leftSide} flexGrow={1}>
            <Typography variant="h5" my={3}>
              Create an account
            </Typography>
            <form onSubmit={handleSubmit}>
              <Stack spacing={1}>
                <Stack direction={"row"} spacing={1}>
                  <TextField
                    sx={styles.inputField}
                    value={inputs.fullname}
                    onChange={handleChange}
                    name="fullname"
                    id="fullname"
                    label="Fullname "
                    variant="outlined"
                    type="text"
                    required
                  />
                  <TextField
                    sx={styles.inputField}
                    value={inputs.organization}
                    onChange={handleChange}
                    name="organization"
                    id="organization"
                    label="Organization"
                    variant="outlined"
                    type="text"
                    required
                  />
                </Stack>
                <TextField
                  sx={styles.inputField}
                  value={inputs.username}
                  onChange={handleChange}
                  name="username"
                  id="username"
                  label="Username "
                  variant="outlined"
                  type="text"
                  required
                />
                <TextField
                  sx={styles.inputField}
                  value={inputs.email}
                  onChange={handleChange}
                  name="email"
                  id="email"
                  label="E-mail "
                  variant="outlined"
                  type="email"
                  required
                />
                <Stack direction={"row"} spacing={1}>
                  <TextField
                    sx={styles.inputField}
                    value={inputs.sector}
                    onChange={handleChange}
                    name="sector"
                    id="sector"
                    label="Sector "
                    variant="outlined"
                    type="text"
                    required
                  />
                  <TextField
                    sx={styles.inputField}
                    value={inputs.country}
                    onChange={handleChange}
                    name="country"
                    id="country"
                    label="Country "
                    variant="outlined"
                    type="text"
                    required
                  />
                </Stack>
                <FormControl sx={{ width: "100px" }}>
                  <InputLabel id="select-label">Gender</InputLabel>
                  <Select
                    labelId="select-label"
                    id="select-gender"
                    value={gender}
                    label="gender"
                    onChange={handleGender}
                    sx={styles.inputField}
                  >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  sx={styles.inputField}
                  value={inputs.pwd}
                  onChange={handleChange}
                  name="pwd"
                  id="pwd"
                  label="Password "
                  variant="outlined"
                  type="password"
                  required
                />
                <TextField
                  sx={styles.inputField}
                  value={inputs.repPwd}
                  onChange={handleChange}
                  name="repPwd"
                  id="repPwd"
                  label="Password confirmation "
                  variant="outlined"
                  type="password"
                  required
                />
                <Button type="submit" variant="contained">
                  CREATE ACCOUNT
                </Button>
              </Stack>
            </form>
          </Box>
          <Box sx={styles.rightSide}>
            <Stack direction={"row"} spacing={2}>
              <FitbitIcon size="large" />
              <Typography variant="h5" color="primary">
                Survey App
              </Typography>
            </Stack>
            <Typography my={2} variant="body2">
              KoboToolbox is an integrated set of tools for building forms and
              collecting interview responses. It is built for easy and reliable
              use in difficult field settings, such as humanitarian emergencies
              or post-conflict environments.
            </Typography>
            <Typography my={2} variant="body2">
              It is free to create an account and collect data, with no limits
              on the number of data collection projects. Users can collect up to
              10,000 form submissions with their projects per month and store up
              to 5GB of survey attachments collectively in their user account
              (photos, videos, audio recordings, PDF, etc.). If you require more
              submissions or storage, please contact us at info@kobotoolbox.org
              to arrange for a paid subscription.
            </Typography>
            <Typography my={2} variant="body2">
              If you are a organization providing humanitarian assistance,
              please use OCHA's KoboToolbox installation instead, which provides
              an unlimited number of submissions.
            </Typography>
            <Stack direction={"row"} spacing={2}>
              <ButtonGroup variant="text">
                <Button>Terms of Service</Button>
                <Button>Privacy Policy</Button>
              </ButtonGroup>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default Register;
