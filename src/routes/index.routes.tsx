import { Routes, Route } from "react-router-dom";

import Home from "../layouts/Home";
import Checkout from "../layouts/Checkout";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}
