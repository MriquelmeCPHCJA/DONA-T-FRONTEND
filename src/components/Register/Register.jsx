import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../../contexts/users/UserContext";
import { Box, TextField, Button, Typography, Paper, Grid } from "@mui/material";

const img_logo = "http://fmcegestion.cl/donat/logo.webp";

const Register = () => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const { registerUser } = userCtx;
  const [data, setData] = useState({
    nameUser: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    if (name.startsWith("nameUser.")) {
      const field = name.split(".")[1];
      setData((prevData) => ({
        ...prevData,
        nameUser: {
          ...prevData.nameUser,
          [field]: value,
        },
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const sendData = (evt) => {
    evt.preventDefault();

    if (data.password !== data["confirm-password"]) {
      return setErrorMsg("Las contraseñas no coinciden");
    }
    registerUser(data);
    navigate("/login");
  };

  return (
    <Box
      minHeight={"89vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={5}
    >
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, width: "100%" }}>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12} marginBottom={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <img src={img_logo} alt="logo" width="80" />
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                color="primary"
              >
                Registro de Usuario
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={sendData}
            >
              <TextField
                required
                fullWidth
                margin="normal"
                label="Nombre"
                name="nameUser.firstName"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                label="Apellido"
                name="nameUser.lastName"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                label="E-mail"
                name="email"
                type="email"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                label="Contraseña"
                name="password"
                type="password"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                label="Confirma Contraseña"
                name="confirm-password"
                type="password"
                variant="outlined"
                onChange={handleChange}
              />
              <Box display="flex" justifyContent="space-between" marginTop={2}>
                <Button type="submit" variant="contained" color="success">
                  Registrar
                </Button>
                <Button
                  component={Link}
                  to="/"
                  variant="outlined"
                  color="error"
                >
                  Cancelar
                </Button>
              </Box>
              <Box marginTop={2}>
                <Typography color="error" align="center">
                  {errorMsg}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Register;
