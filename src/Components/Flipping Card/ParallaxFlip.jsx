import React from 'react';
import { motion } from 'framer-motion';
import './ParallaxFlip.css';
import img_1 from './img/img_1.jpg'
import img_2 from './img/img_2.jpg'
import img_3 from './img/img_3.jpg'
import img_4 from './img/img_4.jpg'
import img_5 from './img/img_5.jpg'
import img_6 from './img/img_6.jpg'
import img_7 from './img/img_7.jpg'
import img_8 from './img/img_8.jpg'



const cardsData = [
  {
    // frontImage: 'https://unsplash.it/500/500/',
    frontImage: img_1,
    frontText: 'Surah Al-Baqarah (2:281)',
    backText: '"And fear the Day when you will be returned to Allah. Then every soul will be compensated for what it earned, and they will not be wronged.'
  },
  {
    // frontImage: 'https://unsplash.it/511/511/',
    frontImage: img_2,
    frontText: 'Surah Al-Imran (3:185)',
    backText: "Every soul will taste death, and you will only be given your [full] compensation on the Day of Resurrection. So he who is drawn away from the Fire and admitted to Paradise has attained [his desire]. And what is the life of this world except the enjoyment of delusion.",
  },
  {
    // frontImage: 'https://unsplash.it/502/502/',
    frontImage: img_3,
    frontText: 'Surah Az-Zalzalah (99:6-8)',
    backText: "That Day, the people will depart separated [into categories] to be shown [the result of] their deeds. So whoever does an atom’s weight of good will see it, and whoever does an atom’s weight of evil will see it.",
  },
  {
    // frontImage: 'https://unsplash.it/503/503/',
    frontImage: img_4,
    frontText: 'Surah Al-Hajj (22:7)',
    backText: "And that the Hour will come — there is no doubt about it — and that Allah will resurrect those in the graves.",
  },
  {
    // frontImage: 'https://unsplash.it/504/504/',
    frontImage: img_5,
    frontText: 'Surah Al-Qiyamah (75:3-4)',
    backText: "Does man think that We will not assemble his bones? Yes. [We are] Able [even] to proportion his fingertips.",
  },
  {
    // frontImage: 'https://unsplash.it/505/505/',
    frontImage: img_6,
    frontText: 'Surah Al-Infitar (82:4-5)',
    backText: "And the graves are turned upside down — [then] a soul will [then] know what it has put forth and kept back.",
  },
  {
    // frontImage: 'https://unsplash.it/506/506/',
    frontImage: img_7,
    frontText: 'Surah Al-Ghashiyah (88:8-10)',
    backText: "[Other] faces, that Day, will show pleasure. With their effort [they are] satisfied. In an elevated garden.",
  },
  {
    // frontImage: 'https://unsplash.it/508/508/',
    frontImage: img_8,
    frontText: 'Surah An-Naba (78:40)',
    backText: `Indeed, We have warned you of a near punishment — the Day when a man will observe what his hands have put forth and the disbeliever will say, 'Oh, I wish that I were dust!'`,
  },
];


const Card = ({ frontImage, frontText, backText }) => {
  return (
    <div className="col" onTouchStart={(e) => e.currentTarget.classList.toggle('hover')}>
      <div className="container">
        <div className="front" style={{ backgroundImage: `url(${frontImage})` }}>
          <div className="inner">
            <p>{frontText}</p>
            {/* <span>Lorem ipsum</span> */}
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>{backText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ParallaxFlip = () => {
  return (
    <div className="wrapper">
      <motion.h1
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{type:'spring', stiffness:30}}
      className='parallax_h1'>Quranic Ayat- Flip & Learn </motion.h1>
      <motion.div
      initial={{y: 150}}
      whileInView={{y:0}}
      transition={{type:'spring',stiffness:30}}
      className="cols">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            frontImage={card.frontImage}
            frontText={card.frontText}
            backText={card.backText}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxFlip;
