import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { STATS_DATA } from '../data/content';

export const Stats = () => (
  <section id="stats" className="py-24 bg-soviet-dark text-soviet-paper">
    <div className="container mx-auto px-4">
      <h2 className="text-6xl font-heading font-bold uppercase mb-12 text-soviet-red">Темпи Зростання</h2>
      <div className="h-[400px] w-full border border-white/10 p-6 bg-white/5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={STATS_DATA}>
            <XAxis dataKey="year" stroke="#F2EFE9" tick={{fontFamily: 'Oswald', fontSize: 14}} tickLine={false} />
            <Tooltip 
              contentStyle={{backgroundColor: '#D92B2B', border: 'none', color: '#fff', fontFamily: 'Oswald'}} 
              cursor={{fill: 'rgba(255,255,255,0.1)'}} 
            />
            <Bar dataKey="value" fill="#D92B2B" animationDuration={2000} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-center mt-4 opacity-50 font-serif italic">* За даними Держплану</p>
    </div>
  </section>
);