// src/animations/motionVariants.js
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // staggerChildren: 0.1, 
      staggerChildren: 0.25, // slower stagger
      when: "beforeChildren",
    },
  },
};

export const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      // stiffness: 100,
      // damping: 15,

      stiffness: 50,  // softer spring for smoother motion
      damping: 20,    // less bounce
      duration: 1.0,  // overall slower
    },
  },
};

// Fade Up
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // duration: 0.6,
      ease: "easeOut",
       duration: 1.2,  // smoother fade-in
    },
  },
};

// Fade In 
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

// Fade Left
export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Fade Right
export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      // type: "spring",
      stiffness: 60,
      damping: 18, 
      duration:1.2,
      ease: "easeOut",
    },
  },
};


export const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
