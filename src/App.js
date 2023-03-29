import Homepage from "./homepage/Homepage";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Login from "./firebase/Login";
import SignUp from "./firebase/SignUp";
import Reset from "./firebase/ResetPassword";
import Dashboard from "./firebase/Dashboard";
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";
import  {useState} from 'react';


function App() {
      const [theme, setTheme] = useState("dark")
    const changeTheme = () =>{
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }
  
  
  
  return (
    <div className="app" data-theme={theme}>
    <HashRouter>
      <Navbar changeTheme={changeTheme}/>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/reset" element={<Reset />} />
         <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer />
    </HashRouter> 
    </div>
  );
}
export default App;


