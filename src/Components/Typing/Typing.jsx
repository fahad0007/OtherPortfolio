import React, { useState, useEffect } from 'react';
import '../../App.css'

const CustomTypingEffect = () => {
  const phrases = ["Hey, I'm Rimsha Fatima ",'Welcome to My Portfolio!',];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100); // Adjust the typing speed as needed
  const [pauseDuration, setPauseDuration] = useState(1500); // Pause duration after typing a phrase

  useEffect(() => {
    const typingInterval = setTimeout(() => {
      setText((prevText) => {
        const currentPhrase = phrases[phraseIndex];
        const currentChar = isDeleting ? currentPhrase.slice(0, charIndex) : currentPhrase.slice(0, charIndex + 1);

        if (charIndex < currentPhrase.length && !isDeleting) {
          setCharIndex(charIndex + 1);
        } else if (charIndex === currentPhrase.length && !isDeleting) {
          // Pause for a specified duration after typing a phrase
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        } else if (charIndex > 0 && isDeleting) {
          setCharIndex(charIndex - 1);
        } else {
          // Move to the next phrase and reset charIndex
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setIsDeleting(false);
        }

        return currentChar;
      });
    }, isDeleting ? 100: typingSpeed ); // Use the typing speed for typing and a fixed delay for deleting

    return () => clearTimeout(typingInterval);
  }, [phraseIndex, charIndex, isDeleting, typingSpeed, pauseDuration]);

  return (
    <div>
      <p style={{height:"33px"}}  className='section--title'>{text}</p>
    </div>
  );
};

export default CustomTypingEffect;
