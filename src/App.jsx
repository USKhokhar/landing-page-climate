import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router'
import './Styles/styles.comp.css'
import Header from './Components/Header'
import About from './Pages/About'
import Home from './Pages/Home'
import Team from './Pages/Team'
import Volunteer from './Pages/Volunteer'
import Newsletter from './Pages/Newsletter'
import Error from './Error'


const App = () => {
  return (
    <Fragment>
        <Header />
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/team' element={<Team />} />
                <Route path='/about' element={<About />} />
                <Route path='/volunteer' element={<Volunteer />} />
                <Route path='/join' element={
                  <Newsletter
                    title={'join our newsletter'}
                    subtitle={'get in touch with us and be part of the mission serving and protecting mother nature.'}
                    formtitle={'Welcome us in your inbox'}
                  />
                } />
                <Route path='*' element={<Error />} />
            </Routes>
        </main>
    </Fragment>
  )
}

export default App