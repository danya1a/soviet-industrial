import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../data/content';

export const Hero = () => (
  <section id="hero" className="min-h-[80vh] flex items-center pt-32 pb-16 container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <span className="inline-block border-2 border-soviet-dark px-4 py-1 font-serif italic font-bold text-sm bg-soviet-red text-white mb-4">
          {HERO_CONTENT.subtitle}
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-soviet-red leading-tight md:leading-[0.9] mb-6 uppercase drop-shadow-md md:transform md:-skew-x-6">
          {HERO_CONTENT.title}
        </h1>
        <p className="text-lg md:text-xl font-serif border-l-4 border-soviet-red pl-6 italic text-soviet-dark/80">
          {HERO_CONTENT.description}
        </p>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative mt-8 lg:mt-0">
        <div className="absolute inset-0 border-4 border-soviet-dark translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4"></div>
        <img 
          src="/img/hero.jpg" 
          className="relative z-10 w-full h-auto object-contain grayscale contrast-125 border-4 border-soviet-dark shadow-[5px_5px_0_0_rgba(18,18,18,0.2)] md:shadow-[10px_10px_0_0_rgba(18,18,18,0.2)]" 
          alt="Propaganda" 
        />
      </motion.div>
    </div>
  </section>
);