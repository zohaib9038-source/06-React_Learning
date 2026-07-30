import { createRoot } from "react-dom/client";
import App from "./app";
import "./css/style.css";
let root = createRoot(document.querySelector("#root"));
function RenderApp() {
  root.render(<App />);
}
export default RenderApp;
RenderApp();
