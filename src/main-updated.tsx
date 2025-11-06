import { createRoot } from "react-dom/client";
import AppWithScroll from "./AppWithScroll.tsx";
import "./index.css";
import "./components/ScrollAnimations.css";

createRoot(document.getElementById("root")!).render(<AppWithScroll />);
