import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Cours = () => {
  return (
    <section className='section-cours' id='section-cours'>
      <div className='center-text margin-bottom-big'>
        <h2 className='heading--secendary'>nos formations en ligne</h2>
      </div>

      <div className='center-text margin-bottom-big'>
        <div className='row'>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--1'></div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--1'>
                    formateurs de migrants
                  </span>
                </h4>
                <div className='card__details'>
                  <ul>
                    <li>5 videos</li>
                    <li>10 audio</li>
                    <li>ressources</li>
                  </ul>
                </div>
              </div>
              <div className='card__side card__side--back card__side--back-1'>
                <div className='card__cta'>
                  <div className='card__price-box'>
                    <p className='card__price-only'>seulement</p>
                    <p className='card__price-value'>$297</p>
                  </div>
                  <a href='#popup' className='btn btn--white'>
                    acheter
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--2'></div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--2'>
                    creation pedagogique
                  </span>
                </h4>
                <div className='card__details'>
                  <ul>
                    <li>5 videos</li>
                    <li>10 audio</li>
                    <li>ressources</li>
                  </ul>
                </div>
              </div>
              <div className='card__side card__side--back card__side--back-2'>
                <div className='card__cta'>
                  <div className='card__price-box'>
                    <p className='card__price-only'>seulement</p>
                    <p className='card__price-value'>$297</p>
                  </div>
                  <a href='#popup' className='btn btn--white'>
                    acheter
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--3'></div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--3'>
                    preparation delf-dalf
                  </span>
                </h4>
                <div className='card__details'>
                  <ul>
                    <li>5 videos</li>
                    <li>10 audio</li>
                    <li>ressources</li>
                  </ul>
                </div>
              </div>
              <div className='card__side card__side--back card__side--back-3'>
                <div className='card__cta'>
                  <div className='card__price-box'>
                    <p className='card__price-only'>seulement</p>
                    <p className='card__price-value'>$297</p>
                  </div>
                  <a href='#popup' className='btn btn--white'>
                    acheter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='center-text margin-bottom-big margin-top-big'>
        <a href='#' className='btn btn--blue'>
          decouvrir toutes nos formations
        </a>
      </div>
    </section>
  )
}

export default Cours
