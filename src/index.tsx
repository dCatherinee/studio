import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";

const container = document.getElementById("root");

if(!container){
  throw new Error("Контейнер root не найден. не удалось вмонтировать реакт приложение.");
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>
)