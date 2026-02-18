import { motion } from 'framer-motion';
import { NEWS } from '../data/content';

export const News = () => (
  <section id="news" className="py-16 md:py-24 bg-white border-y-4 border-soviet-dark">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase mb-12 text-center md:text-left">
        Фронт <span className="text-soviet-red">Новин</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {NEWS.map((item, i) => (
          <motion.article 
            key={item.id} 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.2 }} 
            className="group border-2 border-soviet-dark bg-soviet-paper p-4 hover:shadow-[6px_6px_0_0_#D92B2B] md:hover:shadow-[8px_8px_0_0_#D92B2B] transition-all flex flex-col"
          >
            <div className="relative h-56 sm:h-64 md:h-72 mb-4 overflow-hidden border-b-2 border-soviet-dark bg-soviet-dark/5">
              <span className="absolute top-0 left-0 bg-soviet-red text-white px-2 py-1 text-xs font-bold font-heading z-10">
                {item.tag}
              </span>
              <img 
                src={item.image} 
                className="w-full h-full object-contain grayscale group-hover:scale-105 transition-transform duration-700 origin-bottom" 
                alt={item.title} 
              />
            </div>
            <h3 className="text-xl md:text-2xl font-heading font-bold uppercase leading-tight mb-3">{item.title}</h3>
            <p className="font-serif italic text-sm mt-auto leading-relaxed">{item.excerpt}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);