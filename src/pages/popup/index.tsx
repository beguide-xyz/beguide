import React from "react";
import { createRoot } from "react-dom/client";
import "@pages/popup/index.css";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
refreshOnUpdate("pages/popup");
import { router } from "@pages/popup/Popup";
function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }
  const root = createRoot(appContainer);
  root.render(
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

init();
