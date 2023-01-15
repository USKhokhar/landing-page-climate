import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id='newsletter'>
            <article className='ft-txt'>
                <h1>Climate Call</h1>
                <div className="social">
                    <Link onClick={() => window.open('https://www.instagram.com/u.s.khokhar/', '_blank')}>
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link onClick={() => window.open('https://www.facebook.com', '_blank')}>
                        <i className="fa-brands fa-facebook"></i>
                    </Link>
                    <Link onClick={() => window.open('https://www.youtube.com', '_blank')}>
                        <i className="fa-brands fa-youtube"></i>
                    </Link>
                    <Link onClick={() => window.open('https://www.tiktok.com/', '_blank')}>
                        <i className="fa-brands fa-tiktok"></i>
                    </Link>
                </div>

                <Link className='credit' onClick={() => window.open('https://github.com/USKhokhar', '_blank')}>
                    &copy; USKhokhar
                </Link>
                
            </article>

            <article className="ft-nav">
                <Link className='ft-link' to='/'>Home</Link>
                <Link className='ft-link' to='/about'>about</Link>
                <Link className='ft-link' to='/team' >team</Link>
                <Link className='ft-link' to='/volunteer'>volunteer</Link>
                <Link className='ft-link' to='/careers'>careers</Link>
                <Link className='ft-link' to='/join'>contacts</Link>
            </article>
        </footer>
  )
}

export default Footer