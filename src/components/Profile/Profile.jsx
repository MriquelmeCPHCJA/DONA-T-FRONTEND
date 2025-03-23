import { Box, Typography, Paper } from "@mui/material";
import React, { useContext, useEffect } from "react";
import UserContext from "../../contexts/users/UserContext";

const Profile = () => {
  const userCtx = useContext(UserContext);
  const { user, authStatus, verifyingToken } = userCtx;

  useEffect(() => {
    verifyingToken();
  }, [authStatus]);

  return (
    <Box
      p={5}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"89vh"}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: 600,
          width: "100%",
          borderRadius: 8,
          border: "1px solid #e0e0e0",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Perfil de Usuario
        </Typography>

        <Box display={"flex"} flexDirection={"column"} gap={3}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            padding={2}
            borderRadius={4}
            bgcolor={"#f5f5f5"}
          >
            <Typography variant="subtitle1" fontWeight="bold" color={"#1976d2"}>
              Nombre:
            </Typography>
            <Typography variant="body1">{user?.nameUser?.firstName}</Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            padding={2}
            borderRadius={4}
            bgcolor={"#f5f5f5"}
          >
            <Typography variant="subtitle1" fontWeight="bold" color={"#1976d2"}>
              Apellido:
            </Typography>
            <Typography variant="body1">{user?.nameUser?.lastName}</Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            padding={2}
            borderRadius={4}
            bgcolor={"#f5f5f5"}
          >
            <Typography variant="subtitle1" fontWeight="bold" color={"#1976d2"}>
              Correo:
            </Typography>
            <Typography variant="body1">{user?.email}</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
