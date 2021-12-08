import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo-box'>Del Olmo</div>
      <div className='row'>
        <div className='col-1-of-2'>
          <div className='footer__navigation'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a href='/aboutus' className='footer__link'>
                  qui sommes-nous?
                </a>
              </li>
              <li className='footer__item'>
                <a href='/contactez-nous' className='footer__link'>
                  contact
                </a>
              </li>
              <li className='footer__item'>
                <a href='/' className='footer__link'>
                  
                  Accueil
                </a>
              </li>
             {/*  <li className='footer__item'>
                <a href='#' className='footer__link'>
                  privacy
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className='col-1-of-2'>
          <p className='footer__text'>
          &copy; Copyright Salim HS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
