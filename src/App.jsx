import React from "react";
import Restaurant from "./Components/Restaurant";
import Home from './Components/Home'
import Restramenu from "./Components/Restramenu";
import { BrowserRouter , Routes , Route } from 'react-router'

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
        <Route path="/city/delhi/:id" element={<Restramenu></Restramenu>}></Route>


      </Routes>
      </BrowserRouter>
     
        
    </div>
  );
}

export default App;