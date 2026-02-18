import { NAV_LINKS } from '../data/content';

export const Header = () => (
  <header className="fixed top-0 w-full z-50 bg-soviet-paper/95 backdrop-blur-md border-b-4 border-soviet-red py-3 md:py-4 shadow-sm">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="font-heading font-bold text-xl sm:text-2xl md:text-3xl uppercase text-soviet-red tracking-tighter truncate">
        Індустріальний<span className="text-soviet-dark">Вісник</span>
      </div>
      <nav className="hidden md:flex gap-6 lg:gap-8">
        {NAV_LINKS.map(link => (
          <a key={link.name} href={link.href} className="font-heading font-bold uppercase text-sm lg:text-base hover:text-soviet-red transition-colors">
            {link.name}
          </a>
        ))}
      </nav>
    </div>
  </header>
);