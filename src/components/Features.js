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
              Formations pour formateurs fle
            </h3>
            <p className='feature-box__text'>
              Se former a la didactique de l'oral et de l'ecrit, la pedagogie du
              projet et aux approches cognitives. A l'international, en France
              ou en ligne.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box '>
            <i className='feature-box__icon fas fa-book'></i>
            <h3 className='heading-tertiary margin-bottom-small '>
              formation pour formateurs de migrants
            </h3>
            <p className='feature-box__text'>
              Se former aux specifites des publics, aux approches
              interculturelles et au passage de l'oral a l'ecrit. En france ou
              en ligne.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box '>
            <i className='feature-box__icon fas fa-piggy-bank'></i>

            <h3 className='heading-tertiary margin-bottom-small '>
              Creation pedagogique
            </h3>
            <p className='feature-box__text'>
              Activites ludiques, conception de supports sonores et
              audiovisiuels et d'excercices multiniveaux pour publics exiles.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box '>
            <i className='feature-box__icon fas fa-film'></i>

            <h3 className='heading-tertiary margin-bottom-small '>
              Cours de francais
            </h3>
            <p className='feature-box__text'>
              Se preparer au DELF-DALF, se former au francais general, sur
              objectifs specifiques, et au francais langue professionnelle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
