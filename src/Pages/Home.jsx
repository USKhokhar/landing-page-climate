import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import Map from '../Components/Map'
import Video from '../Components/Video'
import Newsletter from './Newsletter'

const Home = () => {
  return (
    <>
        <Video />
        <h1 className='home-txt'>It is never too late to start, but sometimes too late to stop</h1>

        <Newsletter
          title={'join our newsletter'}
          subtitle={'get in touch with us and be part of the mission serving and protecting mother nature.'}
          formtitle={'Welcome us in your inbox'}
        />

        <Map />

        <Footer />
    </>
  )
}

export default Home