import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('beranda');
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const whatsappURL = "https://wa.me/6285179889988?text=Halo,%20saya%20tertarik%20untuk%20memesan%20meja%20di%20Leryn%20Resto.";

  // Handle scroll detection for background styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Only track sections if we are on the homepage
      if (location.pathname === '/') {
        const sections = ['beranda', 'menu', 'booking', 'tentang', 'galeri', 'kontak'];
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
            setActiveLink(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Update active link based on path when it changes
  useEffect(() => {
    if (location.pathname === '/artikel') {
      setActiveLink('artikel');
    }
  }, [location.pathname]);

  const navLinks = [
    { name: 'Beranda', id: 'beranda', path: '/' },
    { name: 'Menu', id: 'menu', path: '/' },
    { name: 'Booking', id: 'booking', path: '/' },
    { name: 'Artikel', id: 'artikel', path: '/artikel' }, // New Link
    { name: 'Tentang', id: 'tentang', path: '/' },
    { name: 'Galeri', id: 'galeri', path: '/' },
    { name: 'Kontak', id: 'kontak', path: '/' },
  ];

  const handleNavigation = (link) => {
    if (link.path === '/artikel') {
        navigate('/artikel');
        window.scrollTo(0, 0);
    } else {
        // Link is a section on HomePage
        if (location.pathname !== '/') {
            // If not on home, go to home first
            navigate('/');
            // Timeout to allow DOM to mount before scrolling
            setTimeout(() => {
                const element = document.getElementById(link.id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            // Already on home, just scroll
            const element = document.getElementById(link.id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || location.pathname !== '/' ? 'bg-[#2c1f12]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div 
            onClick={() => handleNavigation({ id: 'beranda', path: '/' })} 
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Utensils className="w-8 h-8 text-[#b38b47]" />
            <span className="text-2xl font-bold text-gradient-gold">Leryn Resto</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link)}
                className={`text-sm font-medium transition-colors hover:text-[#e6c98c] cursor-pointer bg-transparent border-none ${
                  activeLink === link.id ? 'text-[#e6c98c]' : 'text-[#e0dcd3]'
                }`}
              >
                {link.name}
              </button>
            ))}
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
              <Button className="gradient-gold text-slate-900 hover:opacity-90">
                Pesan Meja
              </Button>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#e0dcd3]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#2c1f12]/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link)}
                  className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-[#e6c98c] cursor-pointer ${
                    activeLink === link.id ? 'text-[#e6c98c]' : 'text-[#e0dcd3]'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                <Button className="w-full gradient-gold text-slate-900 hover:opacity-90">
                  Pesan Meja
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;