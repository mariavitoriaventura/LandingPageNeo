
import React from 'react'
import { GlobalStyle } from './global'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Steps } from './components/Steps'
import { Why } from './components/Why'
import { Footer } from './components/Footer'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <main>
       <Hero id="hero" />
       <Services id="services" />
       <Steps id="steps" />
       <Why id="why" /> 
      </main>
      <Footer id="footer" />
    </>
  )
}

export default App
