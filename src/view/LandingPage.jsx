import { motion, AnimatePresence } from 'framer-motion';
import LandingPageIcon from '/LandingPageIcon.svg';

const LandingPage = () => {
  return (
    <AnimatePresence>
      <section className='landingPage'>
        
        {/* Landing page icon with animation from top */}
        <motion.div
          className="forLandingPageIcon"
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }} 
          transition={{ duration: 5, ease: 'easeInOut' }}
        >
          <img src={LandingPageIcon} alt="Edudesks Logo" />
        </motion.div>

        {/* Landing page logo with animation from right */}
        <motion.div
          className="forLandingPageLogo"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}  
          transition={{ duration: 10, ease: 'easeInOut' }}
        >
          <h1>Edu<span className='spanLogo'>desks</span>.</h1>
        </motion.div>

      </section>
    </AnimatePresence>
  );
};

export default LandingPage;
