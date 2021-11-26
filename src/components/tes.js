<nav >
      <div className="nav-center">
          <div className='nav-header'>
            <h2>Del Olmo</h2>
            <button className='nav-toggle' onClick={()=>setSideBar(!showSideBar)}><FaIcons.FaBars /> </button>
          </div>
          <div className='links-container ' ref={linkContainerRef}>
            <ul className='links' ref={linksRef}>
             {links.map((link) =>{
               const {id, url, text} = link;
               return <li key={id}>
                 <a href={url}>{text}</a>
               </li>
             })}
            </ul>
          </div>
      {/*     <div className={`${showSideBar ? 'links-container show-container' : 'links-container'}`}>
            <ul className='links'>
             {links.map((link) =>{
               const {id, url, text} = link;
               return <li key={id}>
                 <a href={url}>{text}</a>
               </li>
             })}
            </ul>
          </div> */}
          <ul className="social-icons">
           {social.map((link) =>{
             const {id, url, icon} = link;
             return<li key={id}><a href={url}>{icon}</a></li>
           })}
          </ul>
          
      </div>
    </nav>

     <IconContext.Provider value={{ color:'#ad5090' }}>
     <div className="navbar">
      <NavLink to="/" className="menu-bars" >
        {/*    <FaIcons.FaBars /> */}
          {/*  <GrIcons.GrHome className="home"/>  */}
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

    <nav className='nav-menu '>
      <ul className="nav-menu-items" >
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
    


  .navigation {
    &__checkbox {
      display: none;
    }
    &__button {
      background-color: white;
      height: 5.5rem;
      width: 5.5rem;
      position: fixed;
      top: 4rem;
      right: 4rem;
      border-radius: 50%;
      z-index: 2000;
      box-shadow: 0 1rem 2rem rgba($color: #000000, $alpha: 1);
      text-align: center; //to center the icons
      cursor: pointer;
    }
    &__background {
      height: 5rem;
      width: 5rem;
      position: fixed;
      top: 4rem;
      right: 4rem;
      background-image: radial-gradient(
        #88c7dc,
        $color-black
      ); //$color-tertiary-dark-2
      border-radius: 90%;
      z-index: 1000;
      //transform: scaleY(20);
      transition: transform 0.8s cubic-bezier(0.83, 0, 0.17, 1);
     
    }
    &__nav {
      height: 100%;
      //width: 100%;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 1500;
      width: 0;
      opacity: 0;
      transition: all 1s ease-in-out;
     
      
    }
  
  
  
    &__list {
      position: absolute;
      top: 37%;
      left: 85%;
      transform: translate(-50%, -50%);
      list-style: none;
      text-align: center;
      width: 30%;
      
     
    }
  &
    &__item {
      margin: 1rem;
    }
    &__link {
      &:link,
      &:visited {
        display: inline-block;
        font-size: 2rem;
        font-weight: 300;
        padding: 1rem 2rem;
        color: $color-white;
        text-decoration: none;
        text-transform: uppercase;
  
        background-image: linear-gradient(
          -60deg,
          $color-white 50%,
          transparent 0%,
          transparent 50%
        );
        background-size: 230%;
        transition: all 0.4s;
      }
      &:hover,
      &:active {
        background-position: 100%;
        color: #88c7dc;
        transform: translateX(1rem);
      }
    }
  
    &__checkbox:checked ~ &__background-active {
      transform: scale(30);
    }
    
    &__checkbox:checked ~ &__nav {
      width: 100%;
      opacity: 1;
    }
  
    //ICON
  
    &__icon {
      margin-top: 2.5rem; //to center the icons
      position: relative;
      &,
      &::before,
      &::after {
        width: 2.5rem;
        height: 2px;
        background-color: $color-gray-dark;
        display: inline-block;
      }
      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        transition: all 0.3s;
      }
      &::before {
        top: -0.7rem;
      }
      &::after {
        top: 0.7rem;
      }
    }
  
    &__button:hover &__icon::before {
      top: -0.9rem;
    }
    &__button:hover &__icon::after {
      top: 0.9rem;
    }
  
    &__checkbox:checked + &__button &__icon {
      top: 0;
      background-color: transparent;
    }
    &__checkbox:checked + &__button &__icon::before {
      top: 0;
      transform: rotate(135deg); //to make them turne
    }
    &__checkbox:checked + &__button &__icon::after {
      top: 0;
      transform: rotate(-135deg);
    }
   
    //response
  
    @include respond(tab-port) {
      &__button {
        top: 2rem;
        right: 2rem;
      }
      &__background {
        top: 2.3rem;
        right: 2.4rem;
      }
  
      &__nav {
        height: 95%;
        //width: 100%;
      }
  
      &__list {
        position: absolute;
        top: 38%;
        left: 78%;
        width: 40%;
      }
      &__item {
        margin: 0;
      }
      &__link {
        &:link,
        &:visited {
          font-size: 2rem;
          font-weight: 300;
          padding: 1rem 2rem;
        }
      }
    }
    @include respond(phone) {
      &__button {
        top: 2rem;
        right: 2rem;
      }
      &__background {
        top: 2.3rem;
        right: 2.4rem;
      }
  
      &__nav {
        height: 95%;
        //width: 100%;
      }
  
      &__list {
        position: absolute;
        top: 30%;
        left: 50%;
        width: 40%;
      }
      &__item {
        margin: 0;
      }
      &__link {
        &:link,
        &:visited {
          font-size: 1.5rem;
          font-weight: 300;
          padding: 1rem 2rem;
        }
      }
    }
  }
   