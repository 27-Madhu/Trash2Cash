import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx"; // Import a central App component
import { AuthProvider } from "./context/AuthContext"; // 👈 सही path

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider> {/* ✅ Wrap everything inside */}
        <App />
      </AuthProvider>
      
    </BrowserRouter>
  </StrictMode>
);
