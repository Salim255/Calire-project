import logo from './logo.svg'
import './App.scss'
import Header from './components/Header'
// import About from './components/About'
// import Cours from './components/Cours'
// import Features from './components/Features'
// import Footer from './components/Footer'
import Navigation from './components/Navigation'
// import Popup from './components/Popup'
import Formationmigrant from './components/Formationmigrant'

function App() {
  return (
    <div className='App'>
      <Navigation />
      {/* <Header /> */}
      <Formationmigrant />
      {/* <About />
      <Features />
      <Cours />
      <Popup />
      <Footer /> */}
    </div>
  )
}

export default App
