import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import Header from "./layouts/Header";
import Router from "./routes/index.routes";
import { Global } from "./theme/styles/global";

import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { ShoppingProvider } from "./context/Shopping/ShoppingContext";

import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function App() {
  return (
    <ShoppingProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <PrimeReactProvider>
            <div className="global-grid-layout">
              <Global />
              <Header />
              <Router />
              <ToastContainer />
            </div>
          </PrimeReactProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ShoppingProvider>
  );
}
