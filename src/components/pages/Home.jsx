import { Button, Typography, Stack, Box } from "@mui/material";
import commonStyles from "../styles/commonStyles";

function Home() {
  return (
    <Box sx={commonStyles.rootContainer}>
      <Stack>
        <Typography>Home page</Typography>
      </Stack>
    </Box>
  );
}

export default Home;
