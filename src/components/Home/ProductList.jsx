import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../../contexts/products/ProductContext";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  CircularProgress,
} from "@mui/material";

const ProductList = () => {
  const productCtx = useContext(ProductContext);
  const { products, loading, getProducts } = productCtx;

  useEffect(() => {
    getProducts();
  }, [getProducts]);

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
    <Box sx={{ padding: 4, marginTop: "5rem" }}>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
        {products.map((product) => (
          <Box
            key={product._id}
            sx={{
              width: { xs: "100%", sm: "50%", md: "33.33%", lg: "25%" },
              maxWidth: 385,
            }}
          >
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                sx={{ height: 200, backgroundSize: "cover" }}
                image={product.image}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  color="primary"
                >
                  {product.nameProduct}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.descriptionProduct.descCorta}
                </Typography>
                <Typography variant="h6" color="success" sx={{ marginTop: 1 }}>
                  {formatPriceCLP(product.priceProduct)}
                </Typography>
              </CardContent>
              <CardActions sx={{ padding: 2 }}>
                <Button
                  component={Link}
                  to={`/donar/${product._id}`}
                  variant="outlined"
                  fullWidth
                >
                  Más Información
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
