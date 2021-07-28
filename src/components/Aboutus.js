import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import Image from '../assets/claire.jpg'
const Aboutus = () => {
  return (
    <>
      <section className='aboutme'>
        <div class='aboutme__text u-center-text u-margin-bottom-big'>
          <h2 class='heading--secendary'>qui sommes nous ?</h2>
        </div>
        <div className='aboutme__content'>
          <div className='about'>
            <figure className='about__shape'>
              <img src={Image} className='about__img hello' />
              <figcaption className='about__caption'>
                claire del olmo
              </figcaption>
            </figure>
            <div className='about__text'>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                A propos de moi
              </h3>
              <p>
                Formée en sciences du langage et spécialisée en didactique du
                français langue étrangère et seconde, mes recherches m'ont
                amenées à me spécialiser autour des processus cognitifs
                d'apprentissage et des problématiques interculturelles ainsi que
                du passage de l'oral à l'écrit. J'ai en parallèle acquis une
                expérience de terrain variée et solide dans les domaines de
                l'enseignement, la création pédagogique, la formation de
                formateurs ainsi que de la coordination pédagogique et des
                montages de projets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutus
