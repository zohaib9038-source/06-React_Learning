import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
let root = createRoot(document.querySelector("#root"));
root.render(<App />);
//External vs module css
/*
 External css globaly hoti he for example mere pass 2 component hain Button 
 and second is basket me chata hu ke mere pass .test ke name se class he or 
 me wo class dono me use karna chata hu but button k background blue rahe or
 basket ka bg red by uisng same class test if hum external css ka use karta
 he to conflict ae ga or dono per same clas apply hogi but hum modules css
 ka use kar ke dono per different bg apply kar saqte hain bus ye hi main 
 difference he....
 External CSS is global, so the same class name can cause style 
 conflicts across components. CSS Modules make class names local
 to each component by generating unique class names, preventing conflicts and
  allowing different styles with the same class name.
*/
