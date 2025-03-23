import { Button, Typography, Dialog, DialogContent } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";

function SuccessPayment() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(true); // Estado para controlar la apertura del modal
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProductData() {
      try {
        const backendURL = import.meta.env.VITE_BACKEND_URL;
        const response = await axios.get(
          `${backendURL}/payment/checkout-session/${sessionId}`
        );
        setProductData(response.data.line_items.data[0]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchProductData();
  }, [sessionId]);

  const handleClose = () => {
    setOpen(false);
    navigate("/donar"); // Redirige al catálogo al cerrar el modal
  };

  const formatPriceCLP = (price) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogContent
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        {loading && (
          <Typography variant="h6">Cargando datos del pago...</Typography>
        )}
        {error && (
          <Typography variant="h6" color="error">
            Error: {error}
          </Typography>
        )}
        {!loading && !error && productData && (
          <>
            <Typography variant="h4" align="center" color="success">
              Donación Exitosa
            </Typography>
            <Typography variant="h6" align="center">
              Donaste: {productData.description}
            </Typography>
            <Typography variant="h5" align="center">
              Cantidad: {productData.quantity}
            </Typography>
            <Typography variant="h5" align="center">
              Equivalente a: {formatPriceCLP(productData.amount_total)}
            </Typography>
            <Typography variant="h5" align="center" color="success">
              Gracias por tu Donación
            </Typography>
            <Button variant="outlined" color="success" onClick={handleClose}>
              Volver al Catálogo
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default SuccessPayment;
