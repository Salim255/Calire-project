import React, {useState,useEffect, useRef} from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as GrIcons from "react-icons/gr"
import { SideBarData } from './Sidbar';
import { IconContext } from 'react-icons';
import {links, social} from './data';
import { FaLinkedin } from 'react-icons/fa'

const useWindowsWidth = ()=>{
  const [wnWidth, setWnWidth] = useState([window.innerWidth]);

  useEffect(() => {
    const handleResize = () =>{
      setWnWidth([window.innerWidth]);
    }
    window.addEventListener("resize", handleResize);
    return ()=>{
      window.removeEventListener("resize", handleResize);
    }
  }, []);
  
  return wnWidth;
}

const Navigation = () => {
  const [showSideBar, setSideBar] = useState(false);
  const [width] = useWindowsWidth();
  const linkContainerRef = useRef(null);//for DIV
  const linksRef = useRef(null);//for UL

  /* useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
   if(showSideBar){
     linkContainerRef.current.style.height = `100vh`
   }else{
     linkContainerRef.current.style.height = '0px';
   }
   
  }, [ showSideBar ]) */
  return (
    <>
     <IconContext.Provider value={{ color:'rgb(110, 206, 230)' }}>
     <div className="navbar">
      <NavLink to="/" className="icon" >
        {/*    <FaIcons.FaBars /> */}
          {/*  <GrIcons.GrHome className="home"/>  */}
          <FaIcons.FaHome className="home" />
      </NavLink>
            <ul className="navbar-menu">
                {links.map((link) =>{
                  const {id, url, text} = link;
                  return <li className={link.cName} key={id}>
                    <NavLink to={url} activeClassName="main-nav-active">{text}</NavLink>
                  </li>
                })}
            </ul>
            <div className="navbar-menu__item login ">
                  <a href='https://www.linkedin.com/in/claire-del-olmo-682235213/'><FaLinkedin className="linked" /></a>
            </div>
    </div>

    <section className="sidebar-section">
        <div className="sidebar-section__header ">
        <div className="icon sidebar-section__header-contact"  onClick={()=>setSideBar(!showSideBar)}>
            <FaIcons.FaBars /> 
          </div>
          <div className="contactez">
          <Link to="/contactez-nous"> contactez nous </Link>
          </div>
         
        </div>
       
        <nav className={`${showSideBar ? 'show-container nav-menu' : 'nav-menu' } `} onClick={()=>setSideBar(!showSideBar)}
        >
          <ul className="nav-menu-items" >
            <li >
                <AiIcons.AiOutlineClose className='icon icon-close'/>
            </li>
            <li className='nav-menu__text'>
                    <Link to='/'>accueil</Link>
            </li>
            {links.map((link) =>{
                  const {id, url, text} = link;
                  return <li className={link.cNameSide} key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                })}
          </ul>
        </nav>  

    </section>
     </IconContext.Provider>
   
 


  </>
    
  )
}

export default Navigation