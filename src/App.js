import logo from './logo.svg'
import './App.scss'
import Header from './components/Header'
import About from './components/About'
import Cours from './components/Cours'
import Features from './components/Features'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Popup from './components/Popup'
import Formationmigrant from './components/Formationmigrant'
import FormateurFLE from './components/FormateurFLE'
import CourseFrancaise from './components/CourseFrancaise'
import CoursdefrancaisGeneral from './components/CoursdefrancaisGeneral'
import Intensif from './components/Intensif'
import Extensif from './components/Extensif'
import Alacarte from './components/Alacarte'
import PreperationDelf from './components/PreperationDelf'
import ObjectifSp from './components/ObjectifSp'
import Professionnelle from './components/Professionnelle'
import Aboutus from './components/Aboutus'
import Error from './components/Error'
import Pedagogique from './components/Pedagogique'
import Contacteznous from './components/Contacteznous'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <Header />
            <About />
            <Features />
            <Cours />
            <Popup />
          
          </Route>
          <Route path='/fmigrant'>
            <Formationmigrant />
          
          </Route>
          <Route path='/ffle'>
            <FormateurFLE />
            
          </Route>
          <Route path='/course-de-francais'>
            <CourseFrancaise />
           
          </Route>
          <Route path='/francais'>
            <CoursdefrancaisGeneral />
           
          </Route>
          <Route path='/description-intensif'>
            <Intensif />
           
          </Route>
          <Route path='/description-extensif'>
            <Extensif />
           
          </Route>
          <Route path='/description-alacarte'>
            <Alacarte />
           
          </Route>
          <Route path='/preperation-delf-dalf'>
            <PreperationDelf />
            
          </Route>
          <Route path='/objectif-specifique'>
            <ObjectifSp />
           
          </Route>
          <Route path='/francais-professionnelle'>
            <Professionnelle />
            
          </Route>
          <Route path='/aboutus'>
            <Aboutus />
           
          </Route>
          <Route path='/contactez-nous'>
            < Contacteznous/>  
          </Route>
         
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
