import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='navigation'>
      <input
        type='checkbox'
        id='navi-toggle'
        className='navigation__checkbox'
      />
      <label for='navi-toggle' className='navigation__button'>
        <span className='navigation__icon'>&nbsp;</span>
      </label>
      <div className='navigation__background'></div>

      <nav className='navigation__nav'>
        <ul className='navigation__list'>
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
  )
}

export default Navigation
