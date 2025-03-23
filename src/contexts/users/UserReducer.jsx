const UserReducer = (globalState, action) => {
  switch (action.type) {
    case "LOGIN_EXITOSO":
    case "REGISTRO_EXITOSO":
      localStorage.setItem("token", action.payload);
      return {
        ...globalState,
        authStatus: true,
      };
    case "OBTENER_USUARIO":
      return {
        ...globalState,
        authStatus: true,
        user: action.payload,
      };
    case "CERRAR_SESION":
      localStorage.removeItem("token");
      return {
        ...globalState,
        user: null,
        cart: [],
        sessionURL: null,
        authStatus: null,
        msg: action.payload,
        loading: false,
      };
    case "OBTENER_CART":
      return {
        ...globalState,
        cart: action.payload,
      };
    default:
      return globalState;
  }
};

export default UserReducer;
