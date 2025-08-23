import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { setupStore } from "./store/index.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";

const store = setupStore();

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
);
