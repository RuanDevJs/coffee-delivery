import { Routes, Route } from "react-router-dom";

import Home from "../layouts/Home";
import Checkout from "../layouts/Checkout";
import Success from "../layouts/Success";
import Admin from "../layouts/Admin";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
