import React from 'react';


const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo-box'>Del Olmo</div>
      <div className='text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary-main'>
            Français langue étrangère
          </span>
          <span className='heading-primary-sub'>
            formations pour formateurs-création pédagogique-cours de français
          </span>
        </h1>
        <a href='#feature' className='btn btn--white btn-animated'>
          découvrir plus
        </a>
      </div>
    </header>
  )
}

export default Header
