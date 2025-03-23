import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import BasicModal from "./ModalContact";
import { useLocation } from "react-router-dom";

const Contact = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = useLocation().state || {};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <Box
      marginTop="7rem"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        backgroundColor: "#f5f5f5",
        padding: "2rem",
      }}
    >
      <Typography variant="h3" component="h2" color="success" gutterBottom>
        Contáctanos
      </Typography>
      <Typography variant="body1" component="p" textAlign="center">
        Si tienes alguna duda, comentario o sugerencia, no dudes en
        contactarnos.
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        marginTop="3.5rem"
        gap="2rem"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding="2rem"
          borderRadius="1rem"
          boxShadow={3}
          backgroundColor="#fff"
          flex="1"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.4350046306286!2d-70.60455962341418!3d-33.516074000877396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d0665ed75805%3A0xfafe2da1e9de3a7a!2sAv.%20Vicu%C3%B1a%20Mackenna%20Ote.%206640%2C%20La%20Florida%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1742646144862!5m2!1ses!2scl"
            width="100%"
            height="300px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Box>
            <Typography variant="h4">Información de contacto</Typography>
            <Typography variant="body1">
              <strong>Dirección:</strong> Av. Vicuña Mackenna Oriente 6640, La
              Florida, Región Metropolitana
            </Typography>
            <Typography variant="body1">
              <strong>Teléfono:</strong> +56 9 1234 5678
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding="2rem"
          backgroundColor="#fff"
          borderRadius="1rem"
          boxShadow={3}
          flex="1"
        >
          <Typography variant="h4" color="success" gutterBottom>
            Formulario de Contacto
          </Typography>
          <FormControl fullWidth>
            <TextField
              label="Nombre Completo"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              label="Email"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <FormLabel htmlFor="message">Mensaje</FormLabel>
            <TextareaAutosize
              minRows={4}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ width: "100%", marginTop: "1rem", padding: "0.5rem" }}
            />
            <BasicModal
              open={isModalOpen}
              onClose={handleCloseModal}
              name={formData.name}
              email={formData.email}
              message={formData.message}
            />
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
