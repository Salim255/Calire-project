import React from 'react'
import { Link } from 'react-router-dom'

const Formationmigrant = () => {
  return (
    <div>
      <section className='section-formation-migrant'>
        <div className='heading-primary text-box'>
          <h1>
            <span className='heading-primary-main'>Formateurs migrants</span>
            <span className='heading-primary-sub'>
              Vous enseignez le français à des publics migrants ou c'est votre
              projet et vous souhaitez développer vos compétences, cette
              formation est faîte pour vous.
            </span>
          </h1>
        </div>
      </section>
      <section className='formation-descriptions'>
        <div className='review'>
          <div className='review-heading'>
            <h2 className='heading--secendary margin-bottom-medium heade  '>
              Formation – Formateurs migrants
            </h2>
          </div>

          <div className='text__header'>
            <h3 className='heading-tertiary margin-bottom-small'>
              presentation :
            </h3>
            <p className='paragraph  paragraph-formation'>
              Cette formation aborde l'enseignement du FLE aux publics
              spécifiquement migrants, en France. Elle montre comment nous
              pouvons appréhender la langue et les cultures en classe, de sorte
              à favoriser chez les apprenants une réelle compétence
              interculturelle, permettant de pouvoir vivre dans la société
              nouvelle. Elle vise par ailleurs le développement de savoir-faire
              pratiques, quant a la programmation des cours, en signalant
              comment et pourquoi il est extremement important de développer
              l'oral avant l'écrit mais aussi de développer l'écrit par l'oral.
              <br /> Elle est destinée aux enseignants de FLE en France, qui
              prennent en charge des publics migrants, qu'ils soient salariés ou
              bénévoles, et cela dès qu'ils présentent le souhait d'enrichir
              leurs approches théoriques et pratiques.
              <br /> Cette formation est composée de quatre modules, que vous
              pouvez suivre dans leur ensemble ou séparément.Chaque module dure
              4 heures.Le suivi d'un module est accompagné d'une attestation de
              formation
            </p>
          </div>
          <div className='review__bottom-border'></div>
          <section className='review__modules'>
            <div className='review__header'>
              <h3 className='heading--secendary'>
                les modules
                <br />
              </h3>
            </div>

            <div className='module '>
              <div className='module__side module__side--front'>
                <div className='heading-tertiary margin-bottom-small '>
                  <div className='review__picture  review__picture-1'></div>
                  <h4 className='review__heading '>
                    <span className='review__heading-span  review__heading-span-1'>
                      MODULE 1 : Les publics migrants
                    </span>
                  </h4>
                </div>
                <ul className='list '>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Pourquoi et comment cerner la situation didactique.
                    </a>
                  </li>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Comment appréhender la langue
                    </a>
                  </li>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Comment aborder les représentations et comportements
                      culturels.
                    </a>
                  </li>
                </ul>
              </div>
              <div className='module__side module__side--back module__side--back-1 '>
                <div className='module__details'>
                  <ul className='module__details--list'>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        comment cerner la situation didactique.
                      </a>
                    </li>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Comment appréhender la langue
                      </a>
                    </li>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Comment aborder les représentations et comportements
                        culturels.
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='module__cta'>
                  <div className='module__price--box'>
                    <p className='module__price--only'>seulement</p>
                    <p className='module__price--value'>€898</p>
                  </div>

                  <Link to='/contactez-nous' className='btn btn--white'>
                    s'inscrire
                  </Link>
                </div>
              </div>
            </div>

            <div className='module '>
              <div className='module__side module__side--front'>
                <div className='heading-tertiary margin-bottom-small '>
                  <div className='review__picture  review__picture-2'></div>
                  <h4 className='review__heading '>
                    <span className='review__heading-span  review__heading-span-2'>
                      MODULE 2 : Les supports
                    </span>
                  </h4>
                </div>
                <ul className='list '>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Quelles ressources papiers et numériques utiliser
                    </a>
                  </li>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Comment construire un cours d'oral et d'écrit
                    </a>
                  </li>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Comment gérer l'hétérogénéité des niveaux.
                    </a>
                  </li>
                </ul>
              </div>
              <div className='module__side module__side--back module__side--back-2 '>
                <div className='module__details'>
                  <ul className='module__details--list'>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Quelles ressources papiers et numériques utiliser
                      </a>
                    </li>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Comment construire un cours d'oral et d'écrit
                      </a>
                    </li>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Comment gérer l'hétérogénéité des niveaux.
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='module__cta'>
                  <div className='module__price--box'>
                    <p className='module__price--only'>seulement</p>
                    <p className='module__price--value'>€898</p>
                  </div>

                  <Link to='/contactez-nous' className='btn btn--white'>
                    s'inscrire
                  </Link>
                </div>
              </div>
            </div>

            <div className='module '>
              <div className='module__side module__side--front'>
                <div className='heading-tertiary margin-bottom-small '>
                  <div className='review__picture  review__picture-3'></div>
                  <h4 className='review__heading '>
                    <span className='review__heading-span  review__heading-span-3'>
                      MODULE 3 : Développer l'oral
                    </span>
                  </h4>
                </div>
                <ul className='list '>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Pourquoi et comment développer l'oral avant l'écrit
                    </a>
                  </li>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      La méthode de correction phonétique articulatoire
                    </a>
                  </li>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      La méthode de correction phonétique verbo-tonale.
                    </a>
                  </li>
                </ul>
              </div>
              <div className='module__side module__side--back module__side--back-3 '>
                <div className='module__details'>
                  <ul className='module__details--list'>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Pourquoi et comment développer l'oral avant l'écrit
                      </a>
                    </li>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        La méthode de correction phonétique articulatoire
                      </a>
                    </li>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        La méthode de correction phonétique verbo-tonale.
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='module__cta'>
                  <div className='module__price--box'>
                    <p className='module__price--only'>seulement</p>
                    <p className='module__price--value'>€898</p>
                  </div>

                  <Link to='/contactez-nous'className='btn btn--white'>
                    s'inscrire
                  </Link>
                </div>
              </div>
            </div>

            <div className='module '>
              <div className='module__side module__side--front'>
                <div className='heading-tertiary margin-bottom-small '>
                  <div className='review__picture  review__picture-4'></div>
                  <h4 className='review__heading '>
                    <span className='review__heading-span  review__heading-span-4'>
                      MODULE 4 : Passer de l'oral à l'écrit
                    </span>
                  </h4>
                </div>
                <ul className='list '>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Comment développer l'écrit par l'oral
                    </a>
                  </li>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Comment permettre l'acquisition des graphies complexes
                    </a>
                  </li>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Comment développer les compétences grammaticales
                    </a>
                  </li>
                </ul>
              </div>
              <div className='module__side module__side--back module__side--back-4 '>
                <div className='module__details'>
                  <ul className='module__details--list'>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Comment développer l'écrit par l'oral
                      </a>
                    </li>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Comment permettre l'acquisition des graphies complexes
                      </a>
                    </li>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Comment développer les compétences grammaticales
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='module__cta'>
                  <div className='module__price--box'>
                    <p className='module__price--only'>seulement</p>
                    <p className='module__price--value'>€898</p>
                  </div>

                  <Link to='/contactez-nous' className='btn btn--white'>
                    s'inscrire
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          <div className='review__bottom-border'></div>

          <section className='review__price'>
            <div className='review__price-item  '>
              <h3 className='review__price--center  heading-tertiary margin-bottom-medium'>
                Vous êtes une association &ndash; une école de langue ou un
                centre de formation
              </h3>
              <p className='paragraph'>
                Vous pouvez acheter un ou plusieurs modules de formation en
                ligne ou en présentiel (frais de déplacement à ajouter) pour vos
                salariés et/ou bénévoles – Tarif d'un module : 555 euros.
                Contact pour obtenir un devis et acheter une formation :
                claire.delolmo@hotmail.fr ; 06 01 63 82 80
              </p>
            </div>
            <div className='review__price-item review__price--particulier'>
              <h3 className='heading-tertiary margin-bottom-medium review__price--center'>
                Vous êtes un formateur de FLE, novice ou chevronné
              </h3>
              <p className='paragraph'>
                Vous pouvez vous inscrire, à titre individuel, à un module de
                formation en ligne (15 participants minimum pour la tenue de la
                formation) – Tarif d'un module : 37 euros.
              </p>
            </div>
          </section>
          <div className='date'>
            <div className='datetable'>
              <div className='datetable__box'>
                <div className='datetable__box-item'>
                  <p className='pargaraph__left'>
                    Dates des modules de formation pour formateurs de FLE,
                    inscrits à titre individuel :
                    <br />
                    <span>MODULE 1,</span> <span>MODULE 2,</span>
                    <span>MODULE 3,</span> <span>MODULE 4</span>
                  </p>
                </div>
                <div className='datetable__box-item'>
                  <p className='paragraph__right'>
                    <span className='heading-tertiary'>MODULE 1</span> - Les
                    publics migrants :
                    <br /> Samedi A: 9h30-13h30 <br />
                    ou
                    <br />
                    Samedi B: 9h30-13h30
                    <br />
                    <span className='heading-tertiary'>MODULE 2</span>- Les
                    supports :
                    <br /> Samedi A: 9h30-13h30 <br />
                    ou
                    <br />
                    Samedi B: 9h30-13h30 <br />
                    <span className='heading-tertiary'>MODULE 3</span>
                    - Développer l'oral et corriger la phonétique :
                    <br /> Samedi A: 9h30-13h30 <br />
                    ou
                    <br />
                    Samedi B: 9h30-13h30
                    <br />
                    <span className='heading-tertiary'>MODULE 4</span> - Passer
                    de l'oral à l'écrit :
                    <br /> Samedi A: 9h30-13h30 <br />
                    ou
                    <br />
                    Samedi B: 9h30-13h30
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Formationmigrant
