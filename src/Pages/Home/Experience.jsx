import React from 'react';
 // Make sure to create and import a CSS file for styles
import '../../Experience.css'
import { animate, delay, motion } from 'framer-motion';
// import Infosys from './img/infosys.jpg'

const Experience = () => {
  return (
    <div id='Experience' className='experience-section'>
    <div className='expTitle'>
    <h1>Experience</h1>
    <p >Real world Experience</p>
    </div>
    
      
      <motion.div initial={{x: -400}} whileInView={{x:0}} transition={{ type:'spring', stiffness:30}} >
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            // style={{ backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)' }}
            style={{backgroundImage:'url(./img/infosys.jpg)'}}
            
          >
            
          </div>
          <ul className="details">
            <li className="author"><div className='a'>Rimsha Fatima</div></li>
            <li className="date">Aug. 24, 2022- Present</li>
            <li className="tags">
              <ul>
                <li><div className='a'>  Infosys</div></li>
               
              </ul>
                <li><div className='a'>  Telecaller</div></li>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Infosys</h1>
          <h2>Telecaller</h2>
          <p>
          With 2 years at Infosys, I excelled in customer service, sales, and complaint resolution, consistently exceeding targets and contributing to team success and process improvements.
          </p>
          <p className="read-more">
            <div style={{color:'#5ad67d', textDecoration:'underline'}}>Aug 2022- Present</div>
        
          </p>
        </div>
      </div>
      </motion.div>
      <motion.div initial={{x:400}} whileInView={{x:0 }} transition={{ type:'spring', stiffness:30}} >
      <div className="blog-card alt">
        <div className="meta">
          <div
            className="photo"
            // style={{ backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)' }}
            style={{backgroundImage:'url(./img/infoedge.jpeg)'}}
          ></div>
          <ul className="details">
            <li className="author"><div className='a'>Rimsha Fatima</div></li>
            <li className="date">July. 15, 2020- Aug. 2022</li>
            <li className="tags">
              <ul>
                <li><div className='a'>  Info Edge</div></li>
                
              </ul>
                <li><div className='a'>  Telecaller</div></li>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Info Edge</h1>
          <h2>Telecaller</h2>
          <p>
          With 2 years at Info Edge, I excelled in customer service, sales, and complaint resolution, consistently exceeding targets and contributing to team success and process improvements.
          </p>
          <p className="read-more">
            <div style={{color:'#5ad67d', textDecoration:'underline'}} >2020-2022</div>
            
          </p>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Experience;
