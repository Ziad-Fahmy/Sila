import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import FooterRoute from "./Routing/FooterRout";
import HomePage from "./Routing/HomePage";
import PaymentDetailsPage from "./Routing/PaymentDetailsPage";



function App() {
  return (


    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path = "/paymentDetails" element ={<PaymentDetailsPage />} />
      </Routes>

      <FooterRoute />
    </div>
  );
}

export default App;
