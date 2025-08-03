import React from 'react'
import { motion } from 'framer-motion'
const AboutMe = () => {
  return (
    <section id="AboutMe" className="about--section">
      <motion.div
            initial={{y:300, Opacity:0}}
            whileInView={{y:0, Opacity:100}}
            transition={{delay:0.1, duration:0.7}}
      className="about--section--img">
        <img src="./img/hero-2.jpeg" alt="About Me" />
      </motion.div>
      <div className="hero--section--content--box about--section--box">
        <motion.div
            initial={{y:-300, Opacity:0}}
            whileInView={{y:0, Opacity:0}}
            transition={{delay:0.1, duration:0.7}}
         className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <motion.p
          className="hero--section-description">
            Hello, I'm Rimsha Fatima !
            <br />
             I’m a Islamic Center student who loves learning about Islam and sharing its beautiful message with others. I'm motivated to grow in my Deen and help spread peace, kindness, and understanding through simple words and actions.
          </motion.p>
          <p className="hero--section-description">
          I strive to not only grow in my own knowledge of the Deen but also to inspire others through kindness, character, and the beautiful message of Islam.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe

