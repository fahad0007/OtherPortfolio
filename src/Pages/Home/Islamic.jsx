import React from 'react'
import TestimonialSlider from './TestimonialSlider'
import { motion } from 'framer-motion'

const Islamic = () => {
  return (
    <div className="testimonial--section" id="Sayings">
     <div className="portfolio--container-box">
        <motion.div 
        initial={{x:-160}}
        whileInView={{x:0}}
        transition={{type:'spring', stiffness:30}}
        className="portfolio--container">
          <h2 className="sections--heading"> Hadith </h2>
          <p className="sub--title"> Hadith Of The Day </p>
        </motion.div>
      </div>
      <TestimonialSlider/>
    </div>
  )
}

export default Islamic 
