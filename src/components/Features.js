import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

const Features = () => {
  return (
    <section className='section-features'>
      <div className='row feature-row'>
        <div className='col-1-of-4'>
          <div className='feature-box '>
            <i className='feature-box__icon fas fa-book-reader'></i>
            <h3 className='heading-tertiary margin-bottom-small '>
              formateurs fle
            </h3>
            <p className='feature-box__text'>
              Se former à la didactique de l'oral et de l'écrit, la pédagogie du
              projet et aux approches cognitives à l'international.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box '>
            <i className='feature-box__icon fas fa-book-reader'></i>
            <h3 className='heading-tertiary margin-bottom-small '>
              formateurs migrants
            </h3>
            <p className='feature-box__text'>
              Se former aux spécifités des publics, aux approches
              interculturelles et au passage de l'oral à l'écrit.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box '>
            <i className='feature-box__icon fas fa-cogs'></i>

            <h3 className='heading-tertiary margin-bottom-small '>
              Création pédagogique
            </h3>
            <p className='feature-box__text'>
              Activités ludiques, conception de supports sonores et
              audiovisiuels et d'excercices multiniveaux pour publics exilés.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box '>
            <i className='feature-box__icon fas fa-book'></i>

            <h3 className='heading-tertiary margin-bottom-small '>
              Cours français
            </h3>
            <p className='feature-box__text'>
              Se préparer au DELF, se former au français général, sur objectifs
              spécifiques, et au français langue professionnelle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
