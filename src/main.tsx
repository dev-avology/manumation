import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext";
import { PopupProvider } from "./context/PopupContext";
import "./index.css";

const script = document.createElement("script");
script.src = "https://link.msgsndr.com/js/form_embed.js";
script.type = "text/javascript";
document.body.appendChild(script);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <PopupProvider>
        <App />
      </PopupProvider>
    </ThemeProvider>
  </StrictMode>
);
