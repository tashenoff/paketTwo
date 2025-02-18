import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-blue-900 text-white overflow-hidden">


      <div className="container mx-auto my-10 relative py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       


          {/* Контакты */}
          <div>
            <h3 className="text-lg font-bold mb-4">КОНТАКТЫ</h3>
            <ul className="space-y-2">
              <li>Номер телефона: <a href="tel:+77027826095" className="hover:text-gray-400">+7 (778)-980-11-20</a></li>
              <li>Почта: <a href="mailto:polimer_astana@mail.ru" className="hover:text-gray-400">polimer_astana@mail.ru</a></li>
            </ul>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>

        {/* Копирайт */}
      
      </div>

      <div className="mt-10 text-center py-10 flex items-center justify-center bg-blue-950 h-full">
          <p>©2025 Polimerplast.kz</p>
        </div>

    </footer>
  );
};

export default Footer;
