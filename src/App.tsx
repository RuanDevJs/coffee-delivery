import { BrowserRouter } from "react-router-dom";

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
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </ShoppingProvider>
  );
}
