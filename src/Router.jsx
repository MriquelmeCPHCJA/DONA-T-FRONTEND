import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home/Home"
import ProductList from "./components/Home/ProductList";
import ProductSingle from "./components/Home/ProductSingle";
import {Nosotros} from "./components/About/About";
import {Mision} from "./components/Mision/Mision";


import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import SuccessPayment from "./components/Payment/Success";
import CancelPayment from "./components/Payment/Cancel";

import Auth from "./routes/Auth";
import Private from "./routes/Private";

import UserState from "./contexts/users/UserState";

import ProductState from "./contexts/products/ProductState";
import Contact from "./components/Home/Contact";

const Router = () => {
  return (
    <>
      <UserState>
        <ProductState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="donar" element= {<ProductList />} />
                <Route path="donar/:id" element={<ProductSingle />} />
                <Route path="nosotros" element={<Nosotros />} />
                <Route path="mision" element={<Mision />} />
                <Route path='registro' element={<Register />} />
                <Route path='login' element={<Login />} />
                <Route path="pago-exitoso" element={<SuccessPayment />} />
                <Route path="pago-cancelado" element={<CancelPayment />} />
                <Route path='contacto' element={<Contact />} />
                <Route path="perfil" element={<Private component={Profile} />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </ProductState>
      </UserState>
    </>
  );
};

export default Router;