import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




// const response = await fetch("https://school-restaurant-api.azurewebsites.net/restaurant/create", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Dos CaMatheo",
//     address: {
//       street: "Grev Turegatan 10",
//       zip: "114 46",
//       city: "Stockholm",
//     }
//   })
// })
// const data = await response.json();
// console.log(data);
