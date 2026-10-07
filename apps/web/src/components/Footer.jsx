import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-[#1a110a] border-t border-[#b38b47]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-bold text-gradient-gold">Leryn Resto</span>
            <p className="mt-4 text-[#bdaea0] text-sm">
              Cita rasa elegan dalam setiap hidangan. Pengalaman kuliner terbaik untuk Anda.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold text-[#e0dcd3] mb-4 block">Jam Buka</span>
            <div className="space-y-2 text-[#bdaea0] text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#b38b47]" />
                <span>Senin - Jumat: 10:00 - 22:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#b38b47]" />
                <span>Sabtu - Minggu: 09:00 - 23:00</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold text-[#e0dcd3] mb-4 block">Kontak</span>
            <div className="space-y-2 text-[#bdaea0] text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#b38b47]" />
                <span>Jl. Kuliner No. 123, Jakarta</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#b38b47]" />
                <span>+62 85179889988</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#b38b47]" />
                <span>info@lerynresto.com</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold text-[#e0dcd3] mb-4 block">Ikuti Kami</span>
            <div className="flex space-x-4">
              <a href="#" className="text-[#bdaea0] hover:text-[#e6c98c] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#bdaea0] hover:text-[#e6c98c] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#bdaea0] hover:text-[#e6c98c] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#b38b47]/20 mt-8 pt-8 text-center text-[#bdaea0] text-sm">
          <p>&copy; 2025 Leryn Resto. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;