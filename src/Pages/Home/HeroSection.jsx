import { React } from 'react'
import Button from '../../Components/button/Button'
import Typing from '../../Components/Typing/Typing'

import { delay, motion } from 'framer-motion'

const HeroSection = () => {


  return (


    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <motion.div
         
          initial={{ x: 400, Opacity: 0 }}
          whileInView={{ x: 0, Opacity: 100 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <div className="hero--section--content">
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Assalamu Alaikum! </span>{" "}

            </h1>
            <p><Typing /></p>
         
            <p className="hero--section-description">
              I’m Rimsha Fatima, a dedicated Maktab student with a deep love for learning and living by the teachings of Islam.
              <br />
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ x: 400, Opacity: 0 }}
          whileInView={{ x: 0, Opacity: 100 }}
          transition={{ delay: 0.1, duration: 0.7 }}>
          <Button />
        </motion.div>

      </div>
      <motion.div
      
        initial={{ x: -400, Opacity: 0 }}
        whileInView={{ x: 0, Opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        <div className="hero--section--img">
          <img src="./img/hero-2.jpeg" alt="Hero Section" />
         
        </div>
      </motion.div>
    </section>

  )
}

export default HeroSection

