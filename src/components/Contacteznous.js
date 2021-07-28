import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
const Contacteznous = () => {
  return (
    <>
      <section className='section-contactez-nous'>
        <div className='contact-header'>
          <h1 className='contact-header__main'>contactez nous</h1>
          <h2 className='contact-header__sub'>
            Voulez vous s'inscrire pour une session ou acheter un module ?
          </h2>
        </div>
        <div className='contact'>
          <form action='#' className='form'>
            <div className='form__group'>
              <input
                type='text'
                id='nom'
                placeholder='Nom'
                className='form__input'
                required
              />
              <label for='nom' className='form__label'>
                Nom
              </label>
            </div>
            <div className='form__group'>
              <input
                type='text'
                id='prenom'
                placeholder='Prénom'
                className='form__input'
                required
              />
              <label for='prenom' className='form__label'>
                Prénom
              </label>
            </div>
            <div className='form__group'>
              <input
                type='text'
                id='telephone'
                placeholder='Numéro de téléphone'
                className='form__input'
                required
              />
              <label for='telephone' className='form__label'>
                Numéro de téléphone
              </label>
            </div>
            <div className='form__group'>
              <input
                type='email'
                id='email'
                placeholder='Addresse mail'
                className='form__input'
                required
              />
              <label for='email' className='form__label'>
                Addresse mail
              </label>
            </div>
            <div className='form__group'>
              <textarea
                type='message'
                id='message'
                placeholder='Votre message'
                className='form__textarea form__input'
                rows='8'
              />
              <label for='message' className='form__label'>
                Votre message
              </label>
            </div>
            <div className='form__group'>
              <a href='#' className='btn btn--blue'>
                envoyer &rarr;
              </a>
            </div>
          </form>
        </div>
        <section className='contact__icon'>
          <div className='contact-icon'>
            <AiOutlineInstagram className='contact-icon__icon contact-icon__icon-1' />
          </div>
          <div className='contact-icon'>
            <AiOutlineFacebook className='contact-icon__icon contact-icon__icon-2' />
          </div>
          <div className='contact-icon'>
            <AiOutlineLinkedin className='contact-icon__icon contact-icon__icon-3' />
          </div>
        </section>
      </section>
    </>
  )
}

export default Contacteznous
