import React from 'react';
import '../../Timeline.scss'
import { motion } from 'framer-motion';

const Timeline = () => {
  return (
    <section id="timeline">
      <h1>My Expertise</h1>
      <p className="leader">My Skills And Expertise That Makes Me A Better Telecaller Excutive</p>
      <div className="demo-card-wrapper">
        <motion.div
          initial={{x: -100}}
          whileInView={{x:0}}
          transition={{type:'spring', stiffness:30}}
         className="demo-card demo-card--step1">
          <div className="head">
            <div className="number-box">
              <span>01</span>
            </div>
            <h2><span className="small">Verbal</span>Communication </h2>
          </div>
          <div className="body">
            <p>Excellent verbal communication skills. Ability to speak clearly and persuasively.</p>
            {/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
            <div className="photo_size" style={{width:'420px', height:'210px', backgroundImage:'url(./img/commun.jpg)', backgroundSize:'cover', backgroundPosition:'center'}} >
            </div>
            {/* <img src="./img/roll.jpg" style={{height:'210px' , width:'420px'}} /> */}
          </div>
        </motion.div>

        <motion.div
          initial={{x: 100}}
          whileInView={{x:0}}
          transition={{type:'spring', stiffness:30}}
         className="demo-card demo-card--step2">
          <div className="head">
            <div className="number-box">
              <span>02</span>
            </div>
            <h2><span className="small">Interpersonal </span> Interpersonal</h2>
          </div>
          <div className="body">
            <p>Building rapport with customers. Handling difficult or irate customers with patience and professionalism.</p>
            <div className="photo_size" style={{width:'420px', height:'210px', backgroundImage:'url(./img/interpersonal.jpg)', backgroundSize:'cover', backgroundPosition:'center'}} >
            </div>
            {/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
          </div>
        </motion.div>

        <motion.div
          initial={{x: -100}}
          whileInView={{x:0}}
          transition={{type:'spring', stiffness:30}}
         className="demo-card demo-card--step3">
          <div className="head">
            <div className="number-box">
              <span>03</span>
            </div>
            <h2><span className="small"> Adaptation</span>Adaptability</h2>
          </div>
          <div className="body">
            <p>Ability to adapt to different customer personalities and changing circumstances. Willingness to learn and implement new techniques and strategies.</p>
            <div className="photo_size" style={{width:'420px', height:'210px', backgroundImage:'url(./img/adaptibility.jpg)', backgroundSize:'cover', backgroundPosition:'center'}} >
            </div>
            {/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
          </div>
        </motion.div>

        <motion.div
        initial={{x: 100}}
          whileInView={{x:0}}
          transition={{type:'spring', stiffness:30}}
         className="demo-card demo-card--step4">
          <div className="head">
            <div className="number-box">
              <span>04</span>
            </div>
            <h2><span className="small">Collabration </span> Teamwork</h2>
          </div>
          <div className="body">
            <p>Collaborating with team members to achieve common goals. Sharing insights and best practices with colleagues.
</p>
 <div className="photo_size" style={{width:'420px', height:'210px', backgroundImage:'url(./img/teamwork.jpg)', backgroundSize:'cover', backgroundPosition:'center'}} >
 </div>
            {/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
          </div>
        </motion.div>

        <motion.div
        initial={{x: -100}}
          whileInView={{x:0}}
          transition={{type:'spring', stiffness:30}}
         className="demo-card demo-card--step5">
          <div className="head">
            <div className="number-box">
              <span>05</span>
            </div>
            <h2><span className="small">Resolve</span> Problem Solving </h2>
          </div>
          <div className="body">
            <p>Quick thinking and ability to resolve customer issues effectively.
</p>
 <div className="photo_size" style={{width:'420px', height:'210px', backgroundImage:'url(./img/solving.jpg)', backgroundSize:'cover', backgroundPosition:'center'}} >
 </div>
            {/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
          </div>
        </motion.div>

        <motion.div
        initial={{x: 100}}
          whileInView={{x:0}}
          transition={{type:'spring', stiffness:30}}
         className="demo-card demo-card--step2">
          <div className="head">
            <div className="number-box">
              <span>06</span>
            </div>
            <h2><span className="small">Time Management </span> Time Management</h2>
          </div>
          <div className="body">
            <p>Efficiently managing time to handle a large volume of calls. Prioritizing tasks to meet targets and deadlines.</p>
            <div className="photo_size" style={{width:'420px', height:'210px', backgroundImage:'url(./img/time.jpg)', backgroundSize:'cover', backgroundPosition:'center'}} >
            </div>
            {/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Timeline;
