import React from 'react'
import { AiFillSignal } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'
import { BiTimeFive } from 'react-icons/bi'
import { FiBarChart } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ObjectifSp = () => {
  return (
    <div>
      <section className='section-cours-description'>
        <div className='deco'></div>
        <div className='cours-details  cours-details__intensif'>
          <div className='cours-details__item'>
            <IoIosPeople className='cours-details__icon' />
            <div>7-9 etudiants</div>
          </div>
          <div className='cours-details__item'>
            <BiTimeFive className='cours-details__icon' />
            <div>
              Lundi au Venderdi
              <ul>
                <li>9:00 - 12:00</li>
                <li>13:30 - 15:00</li>
              </ul>
            </div>
          </div>
          <div className='cours-details__item cours-details__item-3'>
            <div>B1 a C2</div>
            <AiFillSignal className='cours-details__icon' />

            {/* <FiBarChart className='cours-details__icon' /> */}
          </div>
        </div>
        <div className='center-text margin-bottom-big'>
          <h2 className='heading--secendary'>
            Français sur Objectifs Spécifiques
          </h2>

          <h3>24 heures / session</h3>
        </div>
        <div className='cours-description '>
          <div>
            <h3 className='heading-tertiary margin-bottom-small'>
              Présentation du programme
            </h3>

            <ul className='cours-description__list'>
              <li className='cours-description__item'>
                <div className='icon-text'>
                  <FiChevronRight className='cours-details__icon' />
                  Préparation animé par un enseignant habilité « examinateur
                  DELF/DALF »
                </div>
              </li>
              <li>
                <div className='icon-text'>
                  <FiChevronRight className='cours-details__icon' />
                  Enrichir son vocabulaire et sa grammaire en fonction du niveau
                </div>
              </li>
              <li>
                <div className='icon-text'>
                  <FiChevronRight className='cours-details__icon' />
                  Apprentissage via les 4 compétences: compréhension écrite et
                  orale, expression écrite et orale
                </div>
              </li>
              <li>
                <div className='icon-text'>
                  <FiChevronRight className='cours-details__icon' />
                  Utilisation de documents authentiques pour un apprentissage
                  plus vivant
                </div>
              </li>
              <li>
                <div className='icon-text'>
                  <FiChevronRight className='cours-details__icon' />
                  Préparation DELF/DALF pour apprendre la méthodologie et les
                  exigences de l’examen
                </div>
              </li>
              <li>
                <div className='icon-text'>
                  <FiChevronRight className='cours-details__icon' />
                  Épreuves blanches et nombreux exercices d’entrainement
                </div>
              </li>
              <li>
                <div className='icon-text'>
                  <FiChevronRight className='cours-details__icon' />
                  Un système d’évaluation permet d’accompagner l’étudiant tout
                  au long de sa formation:
                </div>
                <ol className='cours-description__evaluation'>
                  <li> Un test écrit en ligne avant votre arrivée </li>
                  <li> Une épreuve orale le 1er jour</li>
                  <li> Une évaluation et un test hebdomadaires </li>
                </ol>
              </li>
            </ul>
            <Link
              to='description-intensif'
              className='btn btn--blue btn-animated btn-contact'
            >
              contactez nous
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ObjectifSp
