import React from 'react';
import { motion } from 'framer-motion';

const Certificate = () => {
  return (
    <section id='Certificate' className='certificate--section'>
    <div className="cert-heading ">Certification</div>
    <motion.div
      initial={{ scale:1.5}}
      whileInView={{ scale:1}}
      transition={{duration:1}}
      className="cert-box">
      
      <div className="left">
        <div className='cert-title'>Certificate Of Participation</div>
        <div className='cert-desc'>Financial Literacy Program "Kona Kona Shiksha"</div>
        <div className='cert-main-desc' >National Institute Of Securities Markets '(NISM)' In Collaboration With Kotak Securities Ltd. </div>
        <div className='desc-date' style={{fontStyle:'italic'}}>September 26, 2023</div>

      </div>
        <div className="right">
            <div className="image">
                <img src="./img/certificate.jpg"/>
            </div>
        </div>
    </motion.div>
    </section>
  )
}

export default Certificate
