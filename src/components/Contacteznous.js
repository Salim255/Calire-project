import React,{useState} from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import emailjs from 'emailjs-com';
const Contacteznous = () => {

  const sendEmail = (e)=>{
      e.preventDefault();
      emailjs.sendForm('service_44vxprg', 'template_rxzvevd', e.target, 'user_JMz5nEy6w6TbRdakdEIFr').then(res =>{ console.log(e.target)
      }).catch(err => console.log(err));
  }
/*   const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telNumber, setTelNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');  */
  const [client, setClient] = useState({firstName:'', lastName:'', telNumber:'', email:'', message:''}); 

/*   const handleSubmit = (e) =>{
    e.preventDefault();
      
       client.firstName = '';
       client.lastName = '';
       client.telNumber = '';
       client.email = '';
       client.message = '';
  } */

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setClient({...client,[name]: value})
 }
  const handleSubmit = (e) =>{
    e.preventDefault();
    sendEmail(e);
    setClient({firstName:'', lastName: '', telNumber: '', email: '', message: ''});
  }
 

  return (
    <>
      <section className='section-contactez-nous'>
        <div className='contact-header'>
            <div class='aboutme__text u-center-text u-margin-bottom-big contact-header__main'>
              <h2 class='heading--secendary'>contactez nous</h2>
            </div>
            
              <h3 className='contact-header__sub'>
                Voulez vous s'inscrire pour une session ou acheter un module ?
              </h3>
        </div>
        <div className='contact'>
          <form action='#' className='form' on  onSubmit={handleSubmit} >
            <div className='form__group'>
              <input
                type='text'
                id='lastName' 
                name='lastName'
                value={client.lastName}
                placeholder='Nom'
                className='form__input'
                required
                onChange={handleChange}
              />
              <label htmlFor='lastName' className='form__label'>
                Nom
              </label>
            </div>
            <div className='form__group'>
              <input
                type='text'
                id='firstName'
                placeholder='Prénom'
                name="firstName"
                className='form__input'
                value={client.firstName}
                onChange={handleChange}
                required
              />
              <label htmlFor='firstName' className='form__label'>
                Prénom
              </label>
            </div>
            <div className='form__group'>
              <input
                type='number'
                id='telNumber'
                name='telNumber'
                value={client.telNumber}
                placeholder='Numéro de téléphone'
                className='form__input'
                onChange={handleChange}
                required
              />
              <label htmlFor='telNumber' className='form__label'>
                Numéro de téléphone
              </label>
            </div>
            <div className='form__group'>
              <input
                type='email'
                id='email'
                name='email'
                value={client.email}
                placeholder='Addresse mail'
                className='form__input'
                onChange={handleChange}
                required
              />
              <label htmlFor='email' className='form__label'>
                Addresse mail
              </label>
            </div>
            <div className='form__group'>
              <textarea
                type='message'
                id='message'
                name='message'
                value={client.message}
                placeholder='Votre message'
                className='form__textarea form__input'
                rows='8'
                onChange={handleChange}
              />
              <label htmlFor='message' className='form__label'>
                Votre message
              </label>
            </div>
            <div className='form__group'>
              <button type='submit' className=' sbmit btn--blue-sbmit' /* onClick={handleSubmit} */>
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
