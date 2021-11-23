import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import emailjs from 'emailjs-com';
const Contacteznous = () => {

  const sendEmail = (e)=>{
      e.preventDefault();

      emailjs.sendForm('service_44vxprg', 'template_rxzvevd', e.target, 'user_JMz5nEy6w6TbRdakdEIFr').then(res =>{
        console.log(res)
      }).catch(err => console.log(err));
  }

  return (
    <>
      <section className='section-contactez-nous'>
        <div className='contact-header'>
        <div class='aboutme__text u-center-text u-margin-bottom-big'>
          <h2 class='heading--secendary'>contactez nous</h2>
        </div>
         
          <h3 className='contact-header__sub'>
            Voulez vous s'inscrire pour une session ou acheter un module ?
          </h3>
        </div>
        <div className='contact'>
          <form action='#' className='form' onSubmit={sendEmail}>
            <div className='form__group'>
              <input
                type='text'
                id='nom' name='nom'
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
                type='number'
                id='telephone'
                name='tele'
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
                name='email'
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
                name='message'
                placeholder='Votre message'
                className='form__textarea form__input'
                rows='8'
              />
              <label for='message' className='form__label'>
                Votre message
              </label>
            </div>
            <div className='form__group'>
              <button type='submit' className=' sbmit btn--blue-sbmit'>
                  envoyer &rarr;
              </button>
              {/* <a href='submit' className='btn btn--blue'>
                envoyer &rarr;
              </a> */}
            </div>
          </form>
        </div>
        <section className='contact__icon'>
          <a className='contact-icon'>
            <AiOutlineInstagram className='contact-icon__icon contact-icon__icon-1' />
          </a>
          <a className='contact-icon'>
            <AiOutlineFacebook className='contact-icon__icon contact-icon__icon-2' />
          </a>
          <a href='https://www.linkedin.com/in/claire-del-olmo-682235213/' className='contact-icon'>
            <AiOutlineLinkedin className='contact-icon__icon contact-icon__icon-3' />
          </a>
        </section>
      </section>
    </>
  )
}

export default Contacteznous
