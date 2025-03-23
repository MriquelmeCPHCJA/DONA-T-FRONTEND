import { Button, Typography, Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CancelPayment = () => {
  const [open, setOpen] = useState(true); // Estado para controlar la apertura del modal
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate("/donar"); // Redirige al catálogo al cerrar el modal
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogContent
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography variant="h4" align="center" color="error">
          No te Preocupes
        </Typography>
        <Typography variant="h6" align="center">
          ¡¡Cuando Quieras!!
        </Typography>
        <Typography variant="h5" align="center">
          Puedes hacer una Donación
        </Typography>
        <Typography variant="h6" align="center">
          Te invitamos a seguir Revisando
        </Typography>
        <Typography variant="h5" align="center" color="success">
          Nuestro Catálogo
        </Typography>
        <Button
          variant="outlined"
          color="error"
          onClick={handleClose}
          sx={{ marginTop: 2 }}
        >
          Volver al Catálogo
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CancelPayment;
