import React from 'react'

import { Link } from 'react-router-dom'

const CourseFrancaise = () => {
  return (
    <>
      <section className='section-formation-coursfrancais'>
        <div className='heading-primary text-box'>
          <h1>
            <span className='heading-primary-main'>Cours de français</span>
            <span className='heading-primary-sub'>
              Vous apprenez le français, voici des cours faits pour vous, selon
              vos objectifs.
            </span>
          </h1>
        </div>
      </section>

      <section className='formation-descriptions'>
        <div className='review'>
          <div className='review-heading'>
            <h2 className='heading--secendary margin-bottom-medium heade  '>
              Cours de français
            </h2>
          </div>

          <div className='text__header'>
            <h3 className='heading-tertiary margin-bottom-small'>
              presentation :
            </h3>
            <p className='paragraph  paragraph-formation'>
              Cette formation aborde l'enseignement du FLE, en France ou à
              l'étranger, auprès des publics adultes ou adolescents.
              <br /> Elle nous montre dans quelle mesure, il est important que
              nous considérions l'affectivité des apprenants et son impact dans
              les apprentissages.
              <br /> Elle nous indique, de plus, comment, en tant qu'enseignant,
              il ne nous faut pas, non plus, oublier d'amener nos apprenants à
              être capables d'exprimer leur subjectivité et leurs émotions dans
              la langue qu'on leur enseigne.
              <br />
              Puis, elle vise à nous faire prendre conscience de ce que peut
              être une réelle approche intercuturelle, ou un véritable
              enseignement/apprentissage autour de l'action, en nous montrant
              aussi comment on peut recourir au support audiovisuel en classe.
              Elle est destinée aux enseignants de FLE en France ou à
              l'étranger, qu'ils soient novices ou chevronnés, et cela dès
              qu'ils présentent le souhait de développer leurs approches
              théoriques et pratiques.
              <br /> Cette formation est composée de quatre modules, que vous
              pouvez suivre dans leur ensemble ou séparément.
            </p>
          </div>

          <div className='review__modules review__modules-coursfrancais'>
            <div className='review__header'>
              <h3 className='heading--secendary'>
                types de cours de français pour répondre à tes besoins
              </h3>
            </div>
            {/* <div className='review__text review__text-cours-1'>
              <Link to='/francais' className='link'>
                <div className='heading-tertiary margin-bottom-small review__text-display'>
                  <div className='review__picture  review__picture-cours-1'></div>
                  <h4 className='review__heading '>
                    <span className='review__heading-span review__heading-span-fle-1 '>
               
              </Link>
            </div>

            <div className='review__text review__text-cours-2'>
              <div className='heading-tertiary margin-bottom-small review__text-display'>
                <div className='review__picture review__picture-cours-2'></div>
                <h4 className='review__heading '>
                  <span className='review__heading-span  review__heading-span-fle-2'>
               
            </div>

            <div className='review__text review__text-cours-3'>
              <div className='heading-tertiary margin-bottom-small review__text-display'>
                <div className='review__picture  review__picture-cours-3'></div>
                <h4 className='review__heading '>
                  <span className='review__heading-span review__heading-span-fle-3'>
          
            </div>
            <div className='review__text review__text-cours-4'>
              <div className='heading-tertiary margin-bottom-small review__text-display'>
                <div className='review__picture review__picture-cours-4 '></div>
                <h4 className='review__heading '>
                  <span className='review__heading-span review__heading-span-fle-4'>
                
            </div> */}
            <div className='module '>
              <div className='module__side module__side--front'>
                <div className='heading-tertiary margin-bottom-small '>
                  <div className='review__picture  review__picture-cours-1'></div>
                  <h4 className='review__heading '>
                    <span className='review__heading-span  cours-span-1'>
                      Se former au français général
                    </span>
                  </h4>
                </div>
                <ul className='list '>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Les liens entre émotion, motivation et mémorisation
                    </a>
                  </li>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Les rapports entre émotion et culture
                    </a>
                  </li>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Les considérer dans l'enseignement
                    </a>
                  </li>
                </ul>
              </div>
              <div className='module__side module__side--back module__side--back-cours-1'>
                <div className='module__details'>
                  <ul className='module__details--list'>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Les liens entre émotion, motivation et mémorisation
                      </a>
                    </li>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Les rapports entre émotion et culture
                      </a>
                    </li>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Les considérer dans l'enseignement
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='module__cta'>
                  <div className='module__price--box'>
                    <p className='module__price--only'>seulement</p>
                    <p className='module__price--value'>$898</p>
                  </div>

                  <Link to='/francais' className='btn btn--white'>
                    la formation
                  </Link>
                </div>
              </div>
            </div>

            <div className='module '>
              <div className='module__side module__side--front'>
                <div className='heading-tertiary margin-bottom-small '>
                  <div className='review__picture  review__picture-cours-2'></div>
                  <h4 className='review__heading '>
                    <span className='review__heading-span cours-span-2'>
                      Se préparer au DELF/DALF
                    </span>
                  </h4>
                </div>
                <ul className='list '>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Examens blancs et identification des points à travailler
                    </a>
                  </li>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Activités discursives, grammaticales et lexicales
                    </a>
                  </li>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Comment aborder les représentations
                    </a>
                  </li>
                </ul>
              </div>
              <div className='module__side module__side--back module__side--back-cours-2'>
                <div className='module__details'>
                  <ul className='module__details--list'>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Examens blancs et identification des points à travailler
                      </a>
                    </li>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Activités discursives, grammaticales et lexicales
                      </a>
                    </li>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Comment aborder les représentations
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='module__cta'>
                  <div className='module__price--box'>
                    <p className='module__price--only'>seulement</p>
                    <p className='module__price--value'>$898</p>
                  </div>

                  <Link to='/preperation-delf-dalf' className='btn btn--white'>
                    la formation
                  </Link>
                </div>
              </div>
            </div>

            <div className='module '>
              <div className='module__side module__side--front'>
                <div className='heading-tertiary margin-bottom-small '>
                  <div className='review__picture  review__picture-cours-3'></div>
                  <h4 className='review__heading '>
                    <span className='review__heading-span  cours-span-3'>
                      Se former au Français sur Objectifs Spécifiques
                    </span>
                  </h4>
                </div>
                <ul className='list '>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Oral et écrit dans le domaine
                    </a>
                  </li>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Vocabulaire et activités discursives selon le métier visé
                    </a>
                  </li>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Quelles activités mettre en place
                    </a>
                  </li>
                </ul>
              </div>
              <div className='module__side module__side--back  module__side--back-cours-3 '>
                <div className='module__details'>
                  <ul className='module__details--list'>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Oral et écrit dans le domaine
                      </a>
                    </li>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Vocabulaire et activités discursives selon le métier
                        visé
                      </a>
                    </li>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Quelles activités mettre en place
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='module__cta'>
                  <div className='module__price--box'>
                    <p className='module__price--only'>seulement</p>
                    <p className='module__price--value'>$898</p>
                  </div>

                  <Link to='/objectif-specifique' className='btn btn--white'>
                    la formation
                  </Link>
                </div>
              </div>
            </div>

            <div className='module '>
              <div className='module__side module__side--front'>
                <div className='heading-tertiary margin-bottom-small '>
                  <div className='review__picture  review__picture-cours-4'></div>
                  <h4 className='review__heading '>
                    <span className='review__heading-span  cours-span-4'>
                      Se former au Français Langue Professionnelle
                    </span>
                  </h4>
                </div>
                <ul className='list '>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Le monde du travail en France
                    </a>
                  </li>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Parler et écrire en contexte professionnel
                    </a>
                  </li>
                  <li className='list__item'>
                    <a href='#' className='list__link'>
                      Comment mettre en place un scénario d'apprentissage par
                      l'action.
                    </a>
                  </li>
                </ul>
              </div>
              <div className='module__side module__side--back  module__side--back-cours-4'>
                <div className='module__details'>
                  <ul className='module__details--list'>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Le monde du travail en France
                      </a>
                    </li>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Parler et écrire en contexte professionnel
                      </a>
                    </li>
                    <li className='module__details--list--item'>
                      <a href='#' className='module__details--list--item--link'>
                        Comment mettre en place un scénario d'apprentissage par
                        l'action.
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='module__cta'>
                  <div className='module__price--box'>
                    <p className='module__price--only'>seulement</p>
                    <p className='module__price--value'>$898</p>
                  </div>

                  <Link
                    to='/francais-professionnelle'
                    className='btn btn--white'
                  >
                    la formation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CourseFrancaise
