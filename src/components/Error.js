import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SideBarData } from './Sidbar';
import { Link } from 'react-router-dom'

function Error() {
    const [sideBar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sideBar);
    return (
        <>
            <div>
                <Link to="#" className="menu-bar" >
                    <FaIcons.FaBars onClick={showSideBar}/>
                </Link>
            </div>
            <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggleee">
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
        </>
    )
}

export default Error
