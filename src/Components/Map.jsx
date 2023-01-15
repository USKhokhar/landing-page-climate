import React from 'react'

const Map = () => {
  return (
    <section id="mission">
        <h1>our missions</h1>
        {/* <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=2048&amp;height=403&amp;hl=en&amp;q=New Delhi&amp;t=&amp;z=4&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}
        <div style={{width: "100%"}}><iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=London%20WC1E%207HU,%20United%20Kingdom+(Climate%20Call)&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="400" frameborder="0"></iframe></div>
    </section>
  )
}

export default Map