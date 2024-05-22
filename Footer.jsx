import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
    

      <Divider variant="fullWidth" />
      <Stack
        paddingY={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        spacing={2}
        >
        <Typography variant="body1" color="initial">
          Made with ❤️ by Toufik ! <br />
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </Stack>
      
    </div>
  );
};

export default Footer;
