import React, { Component } from 'react'
import AboutPage from './About/AboutSection'
import LoginSection from './Login/LoginPage'
import RegisterSection from './Register/RegisterPage'
import '../../style/site.css'

const HomePage = () => {
  
  return (
    <section id="viewWelcome">
      <div className="welcome">
        <div className="signup">
          <LoginSection />
          <RegisterSection />
        </div>
        <AboutPage />
      </div>
    </section>
  )
}

export default HomePage
