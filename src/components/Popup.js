import React from 'react'
import image from '../assets/student-1.jpg'
import imag from '../assets/student-2.jpg'

const Popup = () => {
  return (
    <div className='popup' id='popup'>
      <div className=' popup__content'>
        <div className='popup__left'>
          <img src={image} alt='' className='popup__img' />

          <img src={imag} alt='' className='popup__img' />
        </div>
        <div className='popup__right'>
          <a href='#section-cours' className='popup__close'>&times;</a>
          <h2 className='heading--secendary margin-bottom-small'>
            start booking now
          </h2>
          <h3 className='heading-tertiary margin-bottom-small'>
            Important &ndash; Please read these terms before booking
          </h3>
          <p className='popup__text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel soluta
            praesentium quos eius et aliquam error voluptate facere accusamus
            beatae hic nihil, sequi illum tempore velit iste in doloribus eos?
          </p>
          <a href='#' className='btn btn--blue '>
            Book now
          </a>
        </div>
      </div>
    </div>
    // <div className='background-c'>
    //   <div className='row popup'>
    //     <div className='col-1-of-3 popup__content-1'>
    //       <img src={image} alt='hello' className='image' />
    //       <img src={image} alt='hello' className='image' />
    //     </div>
    //     <div className='col-2-of-3 '>
    //       <div className='popup__content-2'>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
    //           officiis dolore odio autem nobis quo perferendis minus rem harum
    //           eveniet ullam numquam culpa natus illo ipsam voluptas, labore aut
    //           magni.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Popup
