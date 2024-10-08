import { motion } from 'framer-motion';
import LandingPageIcon from '/LandingPageIcon.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PreLandingPage = () => {
  const navigate = useNavigate();
  const [eduVisible, setEduVisible] = useState(false);

  //  useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate('/landing-page');
  //   },  4500); 


  //   return () => clearTimeout(timer);
  // }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEduVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const logoText = 'Edu' + 'desks'+ '.';
  
  return (
    <main className='prelandingPage'>
      <div className="forPreLandingPageIcon">
        <img src={LandingPageIcon} alt="Edudesks Logo" />
      </div>

      {eduVisible && (
        <div className="forPreLandingPageLogo">
          <h1>
            {logoText.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 1 }} 
                transition={{ delay: index * 0.1 }} 
              >
                {char}
              </motion.span>
            ))}

{/* <div className="light-effect" /> */} {/* Passing light effect */}
          </h1>
        </div>
      )}
    </main>
  );
};

export default PreLandingPage;
