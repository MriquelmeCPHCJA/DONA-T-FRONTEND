import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/users/UserContext";
import { Box, Button, Grid2, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import "../../assets/css/galery.css";

const Galery = () => {

  const userCtx = useContext(UserContext);
  const { verifyingToken, authStatus, user, dispatch } = userCtx;

  useEffect(() => {
    verifyingToken();
  }, [authStatus]);

  const manos = "http://fmcegestion.cl/donat/manos.webp";
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <Grid2
      sx={{
        display: { xs: "none", sm: "block" },
      }}
      className="galery"
    >
      <Box
        className="background"
        sx={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
        position="relative"
        color="white"
        gap="5rem"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: { sm: "95%", md: "40%" },
          }}
        >
          <Typography
            variant="h1"
            component="h2"
            textAlign="center"
            color="#F1CF2E"
            fontWeight="700"
            sx={{
              fontSize: { sm: "2rem", md: "4rem" },
            }}
          >
            Tu mano, su esperanza
          </Typography>
          <Typography
            variant="body1"
            component="p"
            textAlign="justify"
            color="white"
            sx={{
              fontSize: { sm: "1rem", md: "1.2rem" },
            }}
          >
            Nuestro sitio te permite comprar paquetes de ayuda para familias
            afectadas por desastres naturales. Elige el pack de productos que
            deseas donar y ayudemos a reconstruir juntos. ¡Cada paquete cuenta!
          </Typography>
          {authStatus ? (
            <>
              <Button
                component={Link}
                to="/donar"
                sx={{
                  mt: 2,
                  width: { xs: "20%", md: "30%" },
                  height: "50px",
                  fontSize: "1rem",
                  alignSelf: "center",
                }}
                variant="contained"
                color="success"
                size="large"
                endIcon={<SendIcon />}
              >
                Donar!!
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/registro"
                sx={{
                  mt: 2,
                  width: { xs: "20%", md: "30%" },
                  height: "50px",
                  fontSize: "1rem",
                  alignSelf: "center",
                }}
                variant="contained"
                color="success"
                size="large"
                endIcon={<SendIcon />}
              >
                Unete!!
              </Button>
              <Button
                component={Link}
                to="/login"
                sx={{
                  mt: 2,
                  width: { xs: "20%", md: "30%" },
                  height: "50px",
                  fontSize: "1rem",
                  alignSelf: "center",
                }}
                variant="contained"
                color="warning"
                size="large"
                endIcon={<SendIcon />}
              >
                Ingresa!!
              </Button>
            </>
          )}
        </Box>
        <Box
          sx={{
            display: { sm: "none", md: "flex" },
            flexDirection: "column",
            alignItems: "center",
            marginTop: "5rem",
            gap: "1rem",
            width: { sm: "95%", md: "40%" },
          }}
        >
          <img src={manos} width="65%" alt="manos" />
        </Box>
      </Box>
    </Grid2>
  );
};

export default Galery;
