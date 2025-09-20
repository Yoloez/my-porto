import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import AppWithScroll from "./AppWithScroll.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<AppWithScroll />);
