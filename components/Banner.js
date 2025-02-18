import React from 'react';
import Image from 'next/image'; // Используем next/image для оптимизации изображений
import PropTypes from 'prop-types'; // Для типизации пропсов (если не используется TypeScript)

const Banner = ({ title, bgimg = '', className = '', children = null }) => {
  return (
    <div
      className={`${className} relative w-full flex items-center justify-start`}
      role="banner" // Улучшаем доступность
    >
      <div className='container mx-auto my-10'>
        {/* Оптимизированное фоновое изображение */}
        {bgimg && (
          <Image
            src={bgimg}
            alt={title || 'Banner background'} // Указываем alt для доступности
            layout="fill"
            objectFit="cover"
            quality={80} // Оптимизация качества
            className="absolute inset-0 z-0"
            priority // Приоритетная загрузка для вышестоящих баннеров
          />
        )}

        {/* Затемнение фона */}
        <div className="absolute inset-0 bg-blue-950/80 z-10"></div>
        

        {/* Контент */}
        <div className="relative z-20 text-left  lg:w-1/2">
          <h1 className="mb-5 lg:text-5xl text-3xl text-white font-bold">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

// Типизация пропсов (если не используется TypeScript)
Banner.propTypes = {
  title: PropTypes.string.isRequired,
  bgimg: PropTypes.string, // Убираем isRequired
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Banner;