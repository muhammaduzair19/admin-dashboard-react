import { Outlet } from 'react-router-dom'
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import Sidebar from './Components/Sidebar/Sidebar';
import Nav from './Components/Nav/Nav';
import Dashboard from './Pages/Dashboard/Dashboard';
import Users from './Pages/Users/Users';
import './App.css'
import { useState } from 'react';
import Business from './Pages/Business/Business';

function App() {

  const [sidebarShow, setSidebarShow] = useState(false)
  const [color, setColor] = useState({ color: "#0E1A30" })
  const [bgColor, setBgColor] = useState({ backgroundColor: "#ffff" })




  return (
    <>
      <div className='mainSection'>
        <div className="leftSection">
          <Sidebar sidebarShow={sidebarShow} />
        </div>
        <div className='rightSection' style={{ width: sidebarShow ? 'calc(100% - 60px)' : 'calc(100% - 250px)' }} >
          <div className="navbar">
            <Nav sidebarShow={sidebarShow} setSidebarShow={setSidebarShow} />
          </div>
          <div className="rightInnerSection">
            <Outlet style={bgColor} />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
