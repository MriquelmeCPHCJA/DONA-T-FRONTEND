import React, { useReducer } from "react";
import axiosClient from "../../config/axios";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

const UserState = (props) => {
  const initialState = {
    user: {
      nameUser: {
        firstName: null,
        lastName: null,
      },
      email: null,
    },
    cart: [],
    authStatus: false,
    loading: true,
    sessionURL: null,
  };
  const [globalState, dispatch] = useReducer(UserReducer, initialState);
  const registerUser = async (formData) => {
    try {
      const res = await axiosClient.post("/users/register", formData);
    } catch (error) {
      console.log(error);
    }
  };
  const loginUser = async (formData) => {
    try {
      const res = await axiosClient.post("/users/login", formData);
      const token = res.data.token;
      dispatch({
        type: "LOGIN_EXITOSO",
        payload: token,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const verifyingToken = async () => {
    const token = localStorage.getItem("token");
    console.log("token en verificar que envia aal bakcend", token);
    if (token) {
      axiosClient.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      delete axiosClient.defaults.headers.common["Authorization"];
    }
    try {
      const res = await axiosClient.get("/users/verify-user");
      dispatch({
        type: "OBTENER_USUARIO",
        payload: res.data.user,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    dispatch({
      type: "CERRAR_SESION",
    });
  };
  const setLoading = (status) => {
    dispatch({
      type: "CHANGE_STATUS_LOADING",
      dispatch: status,
    });
  };
  return (
    <UserContext.Provider
      value={{
        user: globalState.user,
        authStatus: globalState.authStatus,
        loading: globalState.loading,
        sessionURL: globalState.sessionURL,
        registerUser,
        loginUser,
        verifyingToken,
        logout,
        setLoading,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
