import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { News } from './components/News';
import { Stats } from './components/Stats';
import { HEROES } from './data/content';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <News />
        
        <section id="heroes" className="py-16 md:py-24 container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase text-center mb-12">
            Герої <span className="text-soviet-red">Епохи</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {HEROES.map((hero, i) => (
              <motion.div 
                key={hero.id} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ delay: i * 0.2 }} 
                className="text-center group"
              >
                <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full border-4 border-soviet-red p-1 overflow-hidden relative">
                  <img 
                    src={hero.image} 
                    alt={hero.name} 
                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-soviet-red uppercase mb-1">{hero.name}</h3>
                <p className="font-serif italic font-bold mb-2">{hero.role}</p>
                <p className="text-sm leading-relaxed max-w-xs mx-auto">{hero.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Stats />

        <section id="about" className="py-16 md:py-24 container mx-auto px-4 text-center">
          <div className="border-4 border-soviet-dark p-6 md:p-12 bg-white shadow-[10px_10px_0_0_#D92B2B] md:shadow-[15px_15px_0_0_#D92B2B] max-w-4xl mx-auto relative">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 uppercase text-soviet-red inline-block border-b-4 border-soviet-red pb-2">Від редакції</h2>
            <p className="font-serif text-lg md:text-xl italic leading-relaxed">
              "Ми не просто фіксуємо події, ми будуємо нову реальність! Кожне слово в нашому журналі — це куля в серце світового імперіалізму."
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-soviet-red text-white py-6 md:py-8 text-center font-heading uppercase font-bold tracking-widest text-sm md:text-base">
        <div className="container mx-auto px-4">
          1938 © Індустріальний Вісник. Харків, Держпром.
        </div>
      </footer>
    </div>
  );
}

export default App;