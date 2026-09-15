import {createRoot} from "react-dom/client"
import App from "./App";
// useReducer is same as usestate but difernce is usestate use for simple logic whereas useReducer → useful when state logic is more complex or has multiple related actions.
let root=createRoot(document.querySelector("#root"));
root.render(<App/>);