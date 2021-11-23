import React from 'react'
import { AiFillSignal } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'
import { BiTimeFive } from 'react-icons/bi'
import { FiBarChart } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Alacarte = () => {
  return (
    <div>
      <section className='section-cours-description'>
        <div className='deco'></div>
        <div className='cours-details cours-details__alacarte '>
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
            <div>A1 a B2</div>
            <AiFillSignal className='cours-details__icon' />

            {/* <FiBarChart className='cours-details__icon' /> */}
          </div>
        </div>
        <div className='center-text margin-bottom-big'>
          <h2 className='heading--secendary'>Programme A la Carte</h2>
          <h3>A partir de 12 heures / semaine</h3>
        </div>
        <div className='cours-description'>
          <div>
            <h3 className='heading-tertiary margin-bottom-small'>
              Présentation du programme
            </h3>
            <p className=' paragraph'>
              Ce programme vous permet d’apprendre l’essentiel du français en
              quelques matinées de cours seulement. Ce cours de français
              s’adapte 100% à vos disponibilités puisque c’est vous qui
              choisissez quels jours vous souhaitez venir.
            </p>

            <ul className='cours-description__list'>
              <li className='cours-description__item'>
                <div className='icon-text'>
                  <FiChevronRight className='cours-details__icon' />
                  Cours de groupe de français général (grammaire, vocabulaire,
                  parler, écrire, écouter, lire)
                </div>
              </li>
              <li>
                <div className='icon-text'>
                  <FiChevronRight className='cours-details__icon' />
                  Apprentissage intensif du français, toute la journée pour une
                  progression rapide et efficace
                </div>
              </li>
              <li>
                <div className='icon-text'>
                  <FiChevronRight className='cours-details__icon' />
                  Pratique du français en condition réelle au travers d’ateliers
                </div>
              </li>
              <li>
                <div className='icon-text'>
                  <FiChevronRight className='cours-details__icon' />
                  Axé sur la communication du français pour une utilisation de
                  la langue au quotidien
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
                  Apprentissage ludique autour du jeu
                </div>
              </li>
              <li>
                <div className='icon-text'>
                  <FiChevronRight className='cours-details__icon' />
                  Améliorer ses connaissances sur la région, la France et le
                  monde francophone
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
              to='/contactez-nous'
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

export default Alacarte
