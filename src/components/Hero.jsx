import React, { useEffect, useRef } from 'react'

const Hero = () => {

    const videoref = useRef();

    useEffect(() => {
       if (videoref.current) {
          videoref.current.playbackRate = 1.2;
       }
    }, []);


  return (
    <section id="hero">
      <div>
          <h1> MacBook Pro </h1>
        <img src="/title.png" alt="MacBook Title" />
      </div>

      <video ref={videoref} src="/videos/hero.mp4" autoPlay muted playsInline />
      
      <button>buy</button>
      <p> from $1599 or $133/mo for 12 months</p>
        </section>
  )
}

export default Hero