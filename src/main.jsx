import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faPhone,
  faClock,
  faHeadset,
  faBuilding,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

// Add icons to the library
library.add(faEnvelope, faPhone, faClock, faHeadset, faBuilding, faUserTie);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
