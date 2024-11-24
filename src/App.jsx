import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Tab from './components/Tab/Tab'
import Introduction from './components/Introduction/Introduction'
import './App.css'

const App = () => {
  return (
    <div className='main'>
        <Header />
        <Tab />
        <Introduction />
        <Footer />
    </div>
  )
}

export default App