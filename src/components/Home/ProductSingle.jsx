import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Typography,
  Paper,
  CircularProgress,
  Divider,
} from "@mui/material";
import ProductContext from "../../contexts/products/ProductContext";
import UserContext from "../../contexts/users/UserContext";

const ProductSingle = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const productCtx = useContext(ProductContext);
  const { singleProduct, loading, getProductById } = productCtx;
  const userCtx = useContext(UserContext);
  const { authStatus } = userCtx;

  useEffect(() => {
    if (id) {
      getProductById(id);
    }
  }, [id, getProductById]);

  const productToBack = {
    nameProduct: singleProduct?.nameProduct,
    priceProduct: singleProduct?.priceProduct,
    image: singleProduct?.image,
    descriptionProduct: singleProduct?.descriptionProduct,
    quantity: quantity,
  };

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSendToBack = async () => {
    try {
      const backendURL = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(
        `${backendURL}/payment/create-checkout-session`,
        productToBack
      );

      if (response.data && response.data.url) {
        window.location.href = response.data.url;
      } else {
        console.error("URL not found in response.");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const formatPriceCLP = (price) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"89vh"}
      >
        <CircularProgress color="success" size={"10rem"} />
      </Box>
    );
  }

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"89vh"}
      padding={4}
      marginTop={"5rem"}
    >
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 800, width: "100%" }}>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
          <Box flex={1}>
            <img
              src={singleProduct?.image}
              alt={singleProduct?.nameProduct}
              style={{ width: "100%", borderRadius: 16, objectFit: "cover" }}
            />
          </Box>
          <Box flex={1} display="flex" flexDirection="column" gap={2}>
            <Typography variant="h4" component="h2" fontWeight="bold">
              {singleProduct?.nameProduct}
            </Typography>
            <Typography variant="h5" color="primary">
              {formatPriceCLP(singleProduct?.priceProduct)}
            </Typography>
            <Divider />
            <Typography variant="body1" color="textSecondary">
              {singleProduct?.descriptionProduct?.descCorta}
            </Typography>
            <Box component="ul" paddingLeft={2}>
              {singleProduct?.descriptionProduct?.items?.map((item, index) => (
                <li key={index}>
                  <Typography variant="body2">{item}</Typography>
                </li>
              ))}
            </Box>
            <Divider />
            <Typography variant="body1" color="textSecondary">
              {singleProduct?.descriptionProduct?.descLarga}
            </Typography>
            {authStatus && (
              <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Button
                    onClick={handleDecrement}
                    variant="outlined"
                    size="small"
                    sx={{ minWidth: 40 }}
                  >
                    -
                  </Button>
                  <Typography variant="body1" sx={{ marginX: 2 }}>
                    {quantity}
                  </Typography>
                  <Button
                    onClick={handleIncrement}
                    variant="outlined"
                    size="small"
                    sx={{ minWidth: 40 }}
                  >
                    +
                  </Button>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Button
                    onClick={handleSendToBack}
                    variant="contained"
                    color="success"
                  >
                    Comprar
                  </Button>
                  <Button
                    component={Link}
                    to="/donar"
                    variant="outlined"
                    color="error"
                  >
                    Volver
                  </Button>
                </Box>
              </Box>
            )}
            {!authStatus && (
              <Box display="flex" justifyContent="space-between" marginTop={3}>
                <Button
                  component={Link}
                  to="/login"
                  variant="contained"
                  color="success"
                >
                  Iniciar sesión
                </Button>
                <Button component={Link} to="/registro" variant="outlined">
                  Registrarse
                </Button>
                <Button
                  component={Link}
                  to="/donar"
                  variant="outlined"
                  color="error"
                >
                  Volver
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProductSingle;
