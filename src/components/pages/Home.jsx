import { Button, Typography, Stack, Box } from "@mui/material";
import Navbar from "../Navbar";
import commonStyles from "../styles/commonStyles";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box sx={commonStyles.rootContainer}>
        <Stack>
          <Typography>Home page</Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
