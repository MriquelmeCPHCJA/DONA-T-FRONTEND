import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/users/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Paper, Grid } from "@mui/material";

const img_logo = "http://fmcegestion.cl/donat/logo.webp";

const Login = () => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const { loginUser, verifyingToken, authStatus } = userCtx;
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    verifyingToken();
    if (authStatus) {
      navigate("/donar");
    }
  }, [authStatus]);

  if (authStatus) return null;

  const handleChange = (evt) => {
    setData({
      ...data,
      [evt.target.name]: evt.target.value,
    });
  };

  const sendDate = (e) => {
    e.preventDefault();
    loginUser(data);
  };

  return (
    <Box
      minHeight={"89vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
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
                Iniciar Sesión
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={sendDate}
            >
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
              <Box display="flex" justifyContent="space-between" marginTop={2}>
                <Button type="submit" variant="contained" color="success">
                  Login
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
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Login;
