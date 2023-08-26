import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import Header from "./layouts/Header";
import Router from "./routes/index.routes";
import { Global } from "./theme/styles/global";

import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { ShoppingProvider } from "./context/Shopping/ShoppingContext";

export default function App() {
  return (
    <ShoppingProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className="global-grid-layout">
            <Global />
            <Header />
            <Router />
            <ToastContainer />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </ShoppingProvider>
  );
}
