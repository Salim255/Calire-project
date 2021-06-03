import logo from './logo.svg'
import './App.scss'
import Header from './components/Header'
import About from './components/About'
import Cours from './components/Cours'
import Features from './components/Features'
import Test from './components/Test';

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Features />
      <Cours />
    </div>
  )
}

export default App
