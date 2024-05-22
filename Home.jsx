import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography textAlign="center" p={2} variant="h4" color="initial">
        DRS System
      </Typography>

      <Stack p={2} spacing={2}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate("/runout")}
        >
          RunOut
        </Button>
        <Button variant="contained" color="primary" size="large" onClick={()=> navigate('/lbw')} >
          LBW
        </Button>
      </Stack>
      <Footer/>
    </>
  );
};

export default Home;
