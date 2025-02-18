// components/About.js
import React from 'react';
import SectionTitle from './SectionTitle'; // Импортируем компонент заголовка

const About = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="">
        {/* Используем SectionTitle для заголовка секции */}
        <SectionTitle
          badgeText="About"
          badgeBgColor="bg-blue-500"
          badgeTextColor="text-white"
          title="Производство полиэтиленовой упаковки"
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Левая колонка */}
          <div>
            <p className="mt-4 text-left">
              Компания  "Полимер - Пласт " была образована в 1996 году и продолжает стабильную работу в столице Казахстана, г. Астана. Предприятие занимается производством полиэтиленовой упаковки в виде пакетов разных видов (пакет майка, с вырубной ручкой, упаковочные мешки, пакеты для шин, медицинские, для банкнот, фасовочные, пищевой продукции и т.д) , пленки различного назначения (стройка, химчистка одежды, теплицы, термоусадочная и т.д). 
            </p>
          </div>

          {/* Правая колонка */}
          <div>
            <p className="mt-4 text-left">
            Наша команда каждый день работает над производством качественной продукции и гарантирует стабильные поставки в оговоренные сроки уже 20 лет.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
