import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Components/Home'
import Registration from './Components/Registration';
import AboutUs from './Components/AboutUs';
import Contact from './Components/ContactUs';

function App() {
  return (
    <>
   
    <BrowserRouter>
      <Routes>
        {/* Routes with layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Registration" element={<Registration />} />
          
        </Route>

  
      </Routes>
    </BrowserRouter>

    </>
    
  );
}

export default App;
