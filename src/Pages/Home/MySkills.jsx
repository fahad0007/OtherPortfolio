import data from "../../data/index.json";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import '../../Components/button/Button.css'

const MySkills = () => {
  const [showMore, setShowMore] = useState(false);
  const initialCardCount = 4;

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="skills--section" id="MySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">My Expertise</h2>
        <p className="section--title">My Soft Skills</p>
      </div>
      <motion.div
      initial={{y:-250}}
      whileInView={{y:0}}
      transition={{duration:1}}
       className="skills--section--container">
        {data?.skills?.slice(0, showMore ? data.skills.length : initialCardCount).map((item, index) => (
          <div
        
           key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
     
    </section>
  );
};

export default MySkills;


