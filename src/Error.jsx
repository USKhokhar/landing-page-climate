import React from 'react'
import { useNavigate } from 'react-router'

const Error = () => {

    const navigate = useNavigate()

  return (
    <section id='newsletter'>
        <article>
            <h1 style={{lineHeight: '3rem'}}>Whoopsie Doopsie! Mate! </h1>
            <h1 style={{lineHeight: '3rem'}}>this page either doesn't exist or is still under development! </h1>
            <sub>Sorry for the inconvenience  </sub>
        </article>

        <button className="primary-btn" onClick={() => navigate('/')}>
            Go Back Home
        </button>
    </section>
)
}

export default Error