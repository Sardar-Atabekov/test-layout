import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Main from "./page/main/main";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
