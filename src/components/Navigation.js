import React from 'react'

const Navigation = () => {
  return (
    <div className='navigation'>
      <input
        type='checkbox'
        id='navi-toggle'
        className='navigation__checkbox'
      />
      <label for='navi-toggle' className='navigation__button'>
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className='navigation__background'></div>

      <nav className='navigation__nav'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              about
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              about
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              about
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              about
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              about
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
