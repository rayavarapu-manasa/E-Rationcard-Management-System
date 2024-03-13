import React from 'react';
import Mainpage from './components/mainpage/Mainpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Adminlogin from './components/login/Adminlogin';
import Shopkeeperlogin from './components/login/Shopkeeperlogin';
import Adminpage from './components/pages/Adminpage';
import Managepage from './components/pages/Managepage';
import Shopage from './components/pages/Shopage';
import Signup from './components/pages/Signup';



function App() {
  return (
    <Router>
    <div>
     
     
      <Routes>
      <Route path="/" element={<Mainpage/>}/>
      <Route path="/adminlogin" element={<Adminlogin/>} />
      <Route path="/shopkeeperlogin" element={<Shopkeeperlogin/>} />
      <Route path="/adminlogin/adminpage" element={<Adminpage/>}/>
      <Route path="/adminlogin/adminpage/managepage" element={<Managepage/>}/>
     <Route path="/shopkeeperlogin/shopage" element={<Shopage/>}/>
     <Route path="/signup" element={<Signup/>}/>
     
     
    </Routes>
   
    </div>
    </Router>
  )
}

export default App

