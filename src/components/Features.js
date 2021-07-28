import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import { Link } from 'react-router-dom'

const Features = () => {
  return (
    <section className='section-features'>
      <div className='feature'>
        <div className='feature-box'>
          <Link to='/ffle' className='link'>
            <i className='feature-box__icon fas fa-book-reader'></i>
            <h3 className='heading-tertiary margin-bottom-small '>
              formateurs fle
            </h3>
            <p className='feature-box__text'>
              Se former à la didactique de l'oral et de l'écrit, la pédagogie du
              projet et aux approches cognitives à l'international.
            </p>
          </Link>
        </div>

        <div className='feature-box'>
          <Link to='/fmigrant' className='link'>
            <i className='feature-box__icon fas fa-book-reader'></i>
            <h3 className='heading-tertiary margin-bottom-small '>
              formateurs migrants
            </h3>
            <p className='feature-box__text'>
              Se former aux spécifités des publics, aux approches
              interculturelles et au passage de l'oral à l'écrit.
            </p>
          </Link>
        </div>

        <div className='feature-box'>
          <Link to='/ffle' className='link'>
            <i className='feature-box__icon fas fa-cogs'></i>

            <h3 className='heading-tertiary margin-bottom-small '>
              Création pédagogique
            </h3>
            <p className='feature-box__text'>
              Activités ludiques, conception de supports sonores et
              audiovisiuels et d'excercices multiniveaux pour publics exilés.
            </p>
          </Link>
        </div>

        <div className='feature-box'>
          <Link to='/course-de-francais' className='link'>
            <i className='feature-box__icon fas fa-book'></i>

            <h3 className='heading-tertiary margin-bottom-small '>
              Cours français
            </h3>
            <p className='feature-box__text'>
              Se préparer au DELF, se former au français général, sur objectifs
              spécifiques, et au français langue professionnelle.
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Features
