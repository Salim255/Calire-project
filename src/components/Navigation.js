import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as GrIcons from "react-icons/gr"
import { SideBarData } from './Sidbar';
import { IconContext } from 'react-icons';

const Navigation = () => {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  
  return (
    <>
     <IconContext.Provider value={{ color:'#ad5090' }}>
     <div className="navbar">
      <NavLink to="/" className="menu-bars" >
          {/*  <FaIcons.FaBars onClick={showSideBar}/> */}
          {/* <GrIcons.GrHome className="home"/> */}
          <FaIcons.FaHome className="home" activeClassName="main-nav-active"/>
      </NavLink>
            
            <ul className="navbar-menu">
                <li className="navbar-menu__item">
                  <NavLink to="/ffle"  activeClassName="main-nav-active">formateurs fle</NavLink>
                </li>
                <li className="navbar-menu__item">
                  <NavLink to="/fmigrant" activeClassName="main-nav-active">formateurs migrants</NavLink>
                </li>
                <li className="navbar-menu__item">
                  <NavLink to="/course-de-francais" activeClassName="main-nav-active">cours de francais</NavLink>
                </li>
                <li className="navbar-menu__item">
                  <NavLink to="/creation-pedagogique" activeClassName="main-nav-active">creation pedagogique</NavLink>
                </li>
                <li className="navbar-menu__item ">
                  <NavLink to="/contactez-nous" activeClassName="main-nav-active">Contactez nous</NavLink>
                </li>
                <li className="navbar-menu__item ">
                  <NavLink to="/aboutus" activeClassName="main-nav-active">qui sommes nous</NavLink>
                </li>
                
            </ul>

            <div className="navbar-menu__item login ">
                  <NavLink to="#" >login</NavLink>
            </div>
    
     
      
    </div>

    <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
      <ul className="nav-menu-items" onClick={showSideBar}>
        <li className="navbar-toggle">
         <Link to="#" className='menu-bars'>
             <AiIcons.AiOutlineClose/>
          </Link>
        </li>
            {SideBarData.map((item,index) =>
              {
                return(
                    <li key={index} className={item.cName}>
                      <Link to="#">{item.title}</Link>
                    </li>
                          )
              }
              )
            }
      </ul>

    </nav> 

     </IconContext.Provider>
   



  </>
    
  )
}

export default Navigation