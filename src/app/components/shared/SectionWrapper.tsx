import { ReactNode } from 'react';
import {motion, Variants} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className: string;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeIn' } }
};

const SectionWrapper = ({ children, id, className }: SectionWrapperProps) => {
  
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });
  
  return (
    <motion.section
      ref={ref}
      animate={inView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      initial="hidden"
      id={id}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default SectionWrapper