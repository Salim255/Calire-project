import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SideBarData } from './Sidbar';
const Navigation = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return(
  <>
  
   {/*  <div className='navigation' >
      <input
        type='checkbox'
        id='navi-toggle'
        className='navigation__checkbox'
      />
      <label for='navi-toggle' className='navigation__button'  onClick={showSideBar}>
        <span className='navigation__icon'  >&nbsp;</span>
      </label>
      <div className='navigation__background' ></div>

      <nav className={`${ sideBar ? 'navigation__nav active' : 'navigation__nav '}`}>


        <ul className='navigation__list' onClick={showSideBar}>
          <li className='navigation__item'>
            <Link className='navigation__link' to='/'>
              accueil
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link' to='/ffle'>
              formateurs fle
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link' to='/fmigrant'>
              formateurs migrant
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link' to='/creation-pedagogique'>
              creation pedagogique
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link' to='/course-de-francais'>
              cours francais
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link' to='/aboutus'>
              qui sommes nous
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link' to='/contactez-nous'>
              contactez  nous
            </Link>
          </li>
        </ul>
      </nav>
    </div> */}
     <div className='navigation' >

      {/* <nav className={`${ sideBar ? 'navigation__nav active' : 'navigation__nav '}`}> */}
      <nav className='navigation__nav'>
        <ul className='navigation__list' onClick={showSideBar}>
          <li className='navigation__item'>
            <Link className='navigation__link' to='/'>
              accueil
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link' to='/ffle'>
              formateurs fle
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link' to='/fmigrant'>
              formateurs migrant
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link' to='/creation-pedagogique'>
              creation pedagogique
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link' to='/course-de-francais'>
              cours francais
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link' to='/aboutus'>
              qui sommes nous
            </Link>
          </li>
          <li className='navigation__item'>
            <Link className='navigation__link' to='/contactez-nous'>
              contactez  nous
            </Link>
          </li>
        </ul>
      </nav>
    </div>
 
{/*     <div className="navbar">
      <Link to="#" className="menu-bars" >
          <FaIcons.FaBars onClick={showSideBar}/>
      </Link>
    </div>
    <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
      <ul className="nav-menu-items" onClick={showSideBar}>
        <li className="navbar-toggle">
         <Link to="#" className='menu-bars'>
             <AiIcons.AiOutlineClose/>
          </Link>
        </li>
            {SideBarData.map((item,index) =>{
              return(
                  <li key={index} className={item.cName}>
                    <Link to="#">{item.title}</Link>
                  </li>
                        )
                    })}
      </ul>

    </nav> */}

{/*     <div className="navbar">
      <Link to="#" className="navbar__menu-bars" >
          <FaIcons.FaBars onClick={showSideBar}/>
      </Link>
      <div className='navbar__background' > hello </div>
    <nav className={sideBar ? 'navbar__menu-active' : 'navbar__menu'}>
      <ul className="navbar__menu-items" onClick={showSideBar}>
     {/*   <li className="navbar-toggle">
         <Link to="#" className='menu-bars'>
             <AiIcons.AiOutlineClose/>
          </Link>
        </li>  
            {SideBarData.map((item,index) =>{
              return(
                  <li key={index} className={item.cName}>
                    <Link to="#">{item.title}</Link>
                  </li>
                        )
                    })}
      </ul>

    </nav>
    </div> */}
    {/* <div className='nav'>
      <ul className='nav__list'>
        <li className='nav__list-item'>Accueil</li>
        <li className='nav__list-item'> formateurs fle </li>
        <li className='nav__list-item'>formateurs migrants</li>
        <li className='nav__list-item'>cours de francais</li>
        <li className='nav__list-item'>Contactez Nous</li>
        <li className='nav__list-item'>Qui Sommes Nous</li>
      </ul>
    </div> */}
  </>
  );
  
}

export default Navigation
