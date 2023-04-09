import App from "./App";
import { createRoot } from "react-dom/client";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

refreshOnUpdate("pages/content");

const root = document.createElement("div");
root.id = "chrome-extension-wpane-content-view-root";
document.body.append(root);

createRoot(root).render(<App />);
