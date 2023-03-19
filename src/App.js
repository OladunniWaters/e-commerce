import Homepage from "./homepage/Homepage";
import Cart from "./pages/Cart";
import Login from "./firebase/Login";
import SignUp from "./firebase/SignUp";
import Reset from "./firebase/ResetPassword";
//import Dashboard from "./firebase/Dashboard";
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <div>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </HashRouter> 
    </div>
  );
}
export default App;


