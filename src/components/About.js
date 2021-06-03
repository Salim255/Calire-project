import React from 'react'

const About = () => {
  return (
    <section className='section-about'>
      <div className='center-text margin-bottom-big'>
        <h2 className='heading--secendary'>
          cinéma et Français langue etrangére
        </h2>
      </div>

      <div className='row'>
        <div className='col-1-of-2 fisrt'>
          <h3 className='heading-tertiary margin-bottom-small'>
            comprendre les sentiments en situation
          </h3>
          <p className='paragraph'>
            Depuis les années 1990, nous avons souvent pour but de développer la
          </p>
          <h3 className='heading-tertiary margin-bottom-small'>
            le cinéma pour vivre la langue
          </h3>
          <p className='paragraph'>
            Depuis bien longtemps, nous invitons nos apprenants à faire des
            films pour apprendre le français. Une des premières universités
          </p>
          <a href='#' className='btn-text'>
            savoir plus &rarr;
          </a>
        </div>

        <div className='col-1-of-2 second'>
          <div className='composition'></div>
          <img src='assets/image1.jpg' alt='' className='compostion__photo' />
         
        </div>
      </div>
    </section>
  )
}

export default About
