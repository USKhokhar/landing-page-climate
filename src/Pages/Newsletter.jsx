import React from 'react'

const Newsletter = ({title, subtitle, formtitle, mtop}) => {
  return (
    <section id="newsletter" style={{mtop}}>
            <article className='nl-txt'>
                <h1 style={{lineHeight: '2.5rem', textAlign: 'center'}}>{title}</h1>
                <sub>
                    {subtitle}
                </sub>
            </article>

            <form className='nl-form'>
                <h2>{formtitle}</h2>
                <input type="email" name="email" id="email" placeholder='Enter Your Email' required/>
                <button className="primary-btn">Sign up</button>
            </form>
        </section>
  )
}

export default Newsletter