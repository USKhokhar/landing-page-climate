import React from 'react'
import { useQuery } from 'react-query'
import Error from '../Error'

const Team = () => {

  const teamApi = async () => {
    const response =  await fetch('https://reqres.in/api/users?page=1')
    return response.json()
  }

  const { status, data } = useQuery('team', teamApi)

  if(status === 'loading') return <h1>Loading People...</h1>
  if(status === 'error') return <Error />

  return (
    <section className="bg" id="team">
      <div className="team-pg">
        <h1>Our team</h1>

        <article className="people">
          {
            data.data.map((t) => {
              return(
                <div className="person" key={t.id}>
                  <img src={t.avatar} alt="avatar" className='avatar'/>
                  <h2>{t.first_name + " " + t.last_name}</h2>
                </div>
              )
            })
          }
        </article>
      </div>
    </section>
  )
}

export default Team