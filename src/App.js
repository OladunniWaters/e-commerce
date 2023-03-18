import Homepage from "./homepage/Homepage";
import Cart from "./pages/Cart";
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <div>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </HashRouter> 
    </div>
  );
}
export default App;


