import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const Reviews = () => {
  return (
    <Box
      bgcolor="#B2D980"
      sx={{
        display: "flex",
        padding: "1rem",
        gap: "2rem",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <Card
        sx={{
          backgroundColor: "#f0f0f0",
          maxWidth: "30%",
          height: "195px",
          display: { xs: "none", lg: "block" },
        }}
      >
        <Box display="flex" flexDirection="row">
          <CardMedia
            component="img"
            image="https://randomuser.me/api/portraits/women/4.jpg"
            sx={{
              borderRadius: "50%",
              width: 96,
              height: 96,
              margin: "auto",
              padding: "0.5rem",
            }}
            alt="María Gómez"
          />
          <CardContent>
            <Typography
              textAlign="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              María Gómez
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", textAlign: "justify" }}
            >
              "Donar fue una experiencia increíblemente gratificante. Sentir que
              con un pequeño gesto puedes ayudar a familias es algo que te llena
              el alma. Además, el sitio web de donación fue muy agradable y
              rápido, lo que hizo que todo fuera más fácil."
            </Typography>
            <Typography
              mt="1rem"
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
            >
              2012
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Card
        sx={{
          backgroundColor: "#f0f0f0",
          maxWidth: "30%",
          height: "195px",
          display: { xs: "none", lg: "block" },
        }}
      >
        <Box display="flex" flexDirection="row">
          <CardMedia
            component="img"
            image="https://randomuser.me/api/portraits/men/14.jpg"
            sx={{
              borderRadius: "50%",
              width: 96,
              height: 96,
              margin: "auto",
              padding: "0.5rem",
            }}
            alt="María Gómez"
          />
          <CardContent>
            <Typography
              textAlign="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              Juan Pérez
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", textAlign: "justify" }}
            >
              "Siempre había querido donar, pero nunca encontraba el momento.
              Finalmente, me decidí y no me arrepiento. Es un proceso rápido y
              sencillo, y saber que puede ayudar a alguien que lo necesita me
              motiva a seguir donando."
            </Typography>
            <Typography
              mt="1rem"
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
            >
              2012
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Card
        sx={{
          backgroundColor: "#f0f0f0",
          maxWidth: "30%",
          height: "195px",
          display: { xs: "none", lg: "block" },
        }}
      >
        <Box display="flex" flexDirection="row">
          <CardMedia
            component="img"
            image="https://randomuser.me/api/portraits/women/14.jpg"
            sx={{
              borderRadius: "50%",
              width: 96,
              height: 96,
              margin: "auto",
              padding: "0.5rem",
            }}
            alt="María Gómez"
          />
          <CardContent>
            <Typography
              textAlign="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              Ana Rodríguez
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", textAlign: "justify" }}
            >
              "Donar fue una experiencia valiosa. Me sentí muy bien al saber que
              mi aporte podría ayudar a personas afectadas por los incendios.
              ¡Recomiendo a todos que lo intenten!"
            </Typography>
            <Typography
              mt="1rem"
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
            >
              2012
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default Reviews;
