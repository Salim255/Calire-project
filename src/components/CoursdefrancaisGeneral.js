import React from 'react'
import { Link } from 'react-router-dom'

const CoursdefrancaisGeneral = () => {
  return (
    <>
      <section className='section-coursFransias'>
        <div className='deco deco__coursFransias'></div>
        <div className='center-text margin-bottom-small '>
          <h2 className='heading--secendary center-text-cours'>
            cours de français général
          </h2>
        </div>

        <div className='cours-content'>
          <div className='cours-content__item'>
            <div className='cours-content__picture cours-content__picture-1'></div>
            <h4 className='cours-content__heading'>
              <span className='cours-content__heading-span cours-content__heading-span-1'>
                Intensif
              </span>
            </h4>
            <div className='cours-content__details'>
              <ul>
                <li>21 heures / semaine</li>
                <li>7-9 étudiants (max. 12)</li>
                <li>A partir de 210€ / semaine</li>
              </ul>
            </div>
            <Link
              to='description-intensif'
              className='btn btn--blue btn-animated btn-cours'
            >
              plus
            </Link>
          </div>
          <div className='cours-content__item'>
            <div className='cours-content__picture cours-content__picture-2'></div>
            <h4 className='cours-content__heading'>
              <span className='cours-content__heading-span cours-content__heading-span-2'>
                Extensif
              </span>
            </h4>
            <div className='cours-content__details'>
              <ul>
                <li> 15 heures / semaine</li>
                <li> 7-9 étudiants (max. 12)</li>
                <li>A partir de 150€ / semaine</li>
              </ul>
            </div>

            <Link
              to='description-extensif'
              className='btn btn--blue btn-animated btn-cours'
            >
              plus
            </Link>
          </div>
          <div className='cours-content__item'>
            <div className='cours-content__picture cours-content__picture-3'></div>
            <h4 className='cours-content__heading'>
              <span className='cours-content__heading-span cours-content__heading-span-3'>
                A la carte
              </span>
            </h4>
            <div className='cours-content__details'>
              <ul>
                <li>Au choix</li>
                <li>7-9 étudiants (max. 12)</li>
                <li>A partir de 150€ / semaine</li>
              </ul>
            </div>
            <Link
              to='description-alacarte'
              className='btn btn--blue btn-animated btn-cours'
            >
              plus
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default CoursdefrancaisGeneral
