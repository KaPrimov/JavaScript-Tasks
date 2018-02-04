import React from 'react'
import './style/app.css'
import './style/index.css'
import ContactPanel from './components/ContactPanel'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <header>&#9993; Contact Book</header>        
          <ContactPanel />
      </div>
      <footer>Contact Book SPA &copy; 2017</footer>
    )
  }
}

export default App
