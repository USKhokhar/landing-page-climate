import React from 'react'
import Newsletter from './Newsletter'


const Volunteer = () => {
  return (
    <section className="bg" id="volunteer" style={{backgroundImage: `url("./bg-img.jpg")`, backgroundSize: 'cover'}}>
      <Newsletter
        mtop={{marginTop: '10%'}}
        title={'Give Back to the community. Give back to the mother.'}
        subtitle={'volunteer with us, and serve the planet today to live a better future. Invite us into your inbox, and we will invite you on our mission.'}
        formtitle={'Get On the mission!'}
      />
    </section>
  )
}

export default Volunteer