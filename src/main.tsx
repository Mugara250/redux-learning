import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/user.ts";
import themeReducer from "./features/theme.ts";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

export type RootState = ReturnType<typeof store.getState>;