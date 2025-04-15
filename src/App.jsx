import './App.css'
import './typeface.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer.jsx'
import Home from './pages/Home/Page.jsx'


function App() {

  return (
    <div className='app'>
      <Navbar />

      <Home />

      <Footer />
    </div>
  )
}

export default App
