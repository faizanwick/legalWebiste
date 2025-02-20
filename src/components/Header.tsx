'use client';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <nav className="section-container flex justify-between items-center py-4">
        <a href="#" className="text-xl font-bold text-gray-800">LACS</a>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className={`text-gray-600 hover:text-primary ${activeSection === 'about' ? 'text-primary font-bold' : ''}`}>
            About
          </a>
          <a href="#services" className={`text-gray-600 hover:text-primary ${activeSection === 'services' ? 'text-primary font-bold' : ''}`}>
            Services
          </a>
          <a href="#contact" className={`text-gray-600 hover:text-primary ${activeSection === 'contact' ? 'text-primary font-bold' : ''}`}>
            Contact
          </a>
          <a href="#portfolio" className={`text-gray-600 hover:text-primary ${activeSection === 'portfolio' ? 'text-primary font-bold' : ''}`}>
            Portfolio
          </a>
          <a href="#map" className={`text-gray-600 hover:text-primary ${activeSection === 'map' ? 'text-primary font-bold' : ''}`}>
            Location
          </a>
        </div>
      </nav>
    </header>
  );
}
