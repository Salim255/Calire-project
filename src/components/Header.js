import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo-box'>
        <img src='/assets/img.ico' alt='header-logo' className='header__logo' />
      </div>
      <div className='text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary-main'>cinéma et Fle</span>
          <span className='heading-primary-sub'>
            stages en ligne pour enseignants
          </span>
        </h1>
      </div>
    </header>
  )
}

export default Header
