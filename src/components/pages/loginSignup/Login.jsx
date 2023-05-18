import { Box, Stack } from "@mui/system";
import commonStyles from "../../styles/commonStyles";
import Image from "../../../assets/background.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FitbitIcon from "@mui/icons-material/Fitbit";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../../../context/UserAuthContext";
import { ButtonGroup } from "@mui/material";
import Home from "../Home";

function Register() {
  const navigate = useNavigate();
  const { login } = useUserAuth();

  const [inputs, setInputs] = useState({
    email: "",
    pwd: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs.email, inputs.pwd);
      navigate("/dashboard");
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
      top: "100px",
      left: "50%",
      transform: "translatex(-50%)",
      borderRadius: "5px",
      p: "30px",
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
            <Button variant="contained" href="register" sx={styles.navBtn}>
              Signup
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
        <Stack sx={styles.formContainer} spacing={3}>
          <Stack direction={"row"} spacing={2} textAlign="center">
            <FitbitIcon size="large" />
            <Typography variant="h5" color="primary">
              Survey App
            </Typography>
          </Stack>
          {/* Form section */}
          <form onSubmit={handleSubmit}>
            <Stack spacing={1}>
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
              <TextField
                sx={styles.inputField}
                value={inputs.pwd}
                onChange={handleChange}
                name="pwd"
                id="pwd"
                label="Password"
                variant="outlined"
                type="password"
                required
              />

              <Button type="submit" variant="contained">
                LOGIN
              </Button>
            </Stack>
          </form>
          <ButtonGroup variant="text">
            <Button>Terms of Service</Button>
            <Button>Privacy Policy</Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </>
  );
}

export default Register;
