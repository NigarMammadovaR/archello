import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Products from "./pages/Products";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
      </Routes>
   
    
    </div>
  );
}

export default App;


