import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(){
  return (
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

     </Routes>
     
     </BrowserRouter>
    
  )
}

export default App;