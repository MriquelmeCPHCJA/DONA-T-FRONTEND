import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Outlet,
} from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
// import CartState from "./contexts/cart/CartState";
import ProductState from "./contexts/products/ProductState";
import UserState from "./contexts/users/UserState";
// import Protected from "./components/Protected/Protected";
// import { AuthProvideer } from "./components/Auth/AuthProvideer";
import SuccessPayment from "./components/Payment/Success";
import CancelPayment from "./components/Payment/Cancel";
import Contact from "./components/Home/Contact";

function App() {
  return (
    // <CartState>
    <UserState>
      <ProductState>
        <Router>
          <Header />
          <Routes>
            {/* RUTAS PRIVADAS */}
            <Route path="/perfil" element={<Profile />} />
            {/* RUTAS DE AUTENTICACIÓN */}
            <Route path="/registro" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pago-exitoso" element={<SuccessPayment />} />
            <Route path="/pago-cancelado" element={<CancelPayment />} />
            {/* RUTAS PÚBLICAS */}
            <Route path="/contacto" element={<Contact />} />

            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </ProductState>
    </UserState>
    // </CartState>
  );
}

export default App;
