import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routes from "./routes/router.jsx";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/store/userSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
