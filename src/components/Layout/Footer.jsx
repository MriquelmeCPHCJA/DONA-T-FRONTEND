import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import RedditIcon from "@mui/icons-material/Reddit";
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      backgroundColor="#3E792A"
      color="white"
      padding="10px"
      textAlign="center"
      sx={{
        fontSize: { xs: "0.75rem", sm: "1rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <Link to="#" style={{ color: "white" }}>
          <FacebookIcon fontSize="medium" />
        </Link>
        <Link to="#" style={{ color: "white" }}>
          <InstagramIcon fontSize="medium" />
        </Link>
        <Link to="#" style={{ color: "white" }}>
          <XIcon fontSize="medium" />
        </Link>
        <Link to="#" style={{ color: "white" }}>
          <RedditIcon fontSize="medium" />
        </Link>
      </Box>
      <Typography variant="p">
        2025 &copy; | Desarrollado por Marcelo Riquelme
      </Typography>
      <Typography variant="p">Uso para fines Educativos</Typography>
    </Box>
  );
};