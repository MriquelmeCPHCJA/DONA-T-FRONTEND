const reducer = (globalState, action) => {
  switch (action.type) {
    case "OBTENER_PRODUCTOS":
      return { ...globalState, products: action.payload };
    case "OBTENER_PRODUCTO_POR_ID":
      return { ...globalState, singleProduct: action.payload };
    default:
      return globalState;
  }
};

export default reducer;