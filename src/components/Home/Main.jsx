import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";

const Main = () => {
  const familia = "http://fmcegestion.cl/donat/familia.webp";
  
  return (
    <>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          padding: { xs: "4rem 2rem 1rem 2rem", sm: "2rem" },
          bgcolor: "white",
          color: "#FF9500",
          textAlign: "center",
          fontSize: { xs: "1.5rem", md: "3rem" },
        }}
      >
        ¡Únete a nuestra comunidad de donantes y sé parte de la solución!
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        bgcolor="#f0f0f0"
        gap="0.5rem"
        sx={{
          flexWrap: { xs: "wrap", md: "nowrap" },
          p: 2,
          color: "text.primary",
        }}
      >
        <Typography
          variant="p"
          component="p"
          bgcolor="#97CAA1"
          color="text.primary"
          margin="auto"
          sx={{
            fontSize: { xs: "0.85rem", lg: "1.5rem" },
            maxWidth: { xs: "95%", md: "40%" },
            p: 2,
            borderRadius: 2,
          }}
        >
          Tus donaciones permitirán proporcionar alimentos, agua, kits de
          higiene y otros suministros esenciales a las familias afectadas.
          Recibirás informes detallados sobre cómo tus donaciones están ayudando
          a las personas afectadas.
        </Typography>
        <Box
          sx={{
            display: "flex",
            minWidth: { xs: "30%", md: "55%" },
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            image={familia}
            alt="familia"
            sx={{
              width: { xs: "65%", md: "80%" },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Main;
