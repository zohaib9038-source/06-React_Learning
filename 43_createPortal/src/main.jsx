import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
/* React Portal ka use hum tab karte hain jab humein kisi component, jaise ke modal, ko uske parent DOM element se bahar render karna ho, lekin React component tree ke saath uska connection maintain rakhna ho.

For example, agar humne ek modal ko parent div ke andar render kiya hai aur us parent par `overflow: hidden` apply hai, to modal ka woh part jo parent ki boundaries se bahar ja raha hoga, clip ho sakta hai.

Is problem ko solve karne ke liye React humein `createPortal()` provide karta hai, jo `react-dom` se import hota hai. Iski help se hum modal ko `document.body` jaise kisi doosre DOM node mein render kar sakte hain, jis se woh parent ke `overflow: hidden` se affect nahi hota.

**In short:** React Portal ki help se hum modals, tooltips aur popups ko parent DOM hierarchy se bahar render kar sakte hain, while React ka state management aur event handling maintain rehti hai. */
createRoot(document.getElementById('root')).render(
    <App />

)
