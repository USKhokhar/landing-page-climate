import React, { useEffect, useRef } from 'react'

const Video = () => {

  // const url = 'https://i.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4'
  // const url = 'https://i.giphy.com/media/xUA7aPhCAs5QRvMMJa/giphy.mp4'
  // const url = 'https://i.giphy.com/media/H7ZNnKtDleAeG3rPN1/giphy.mp4'
  const url = 'https://i.giphy.com/media/fXoJpM5xhcK83leEu3/giphy.mp4'

  return (
    <video autoPlay loop>
        <source src={url} type='video/mp4' />
    </video>
  )
}

export default Video