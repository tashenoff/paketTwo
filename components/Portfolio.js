// components/Portfolio.js

import React, { useState, useEffect } from 'react';

const Portfolio = ({ portfolioItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); // Значение по умолчанию для десктопа

  // Устанавливаем количество отображаемых элементов в зависимости от ширины экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1); // Для мобильных устройств — 1 элемент
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2); // Для планшетов — 2 элемента
      } else {
        setItemsToShow(3); // Для десктопа — 3 элемента
      }
    };

    // Вызов при загрузке и добавление обработчика для изменения размера окна
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= portfolioItems.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, portfolioItems.length - itemsToShow) : prevIndex - 1
    );
  };

  return (
    <div className="relative my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Виды услуг</h2>

      <div className="overflow-hidden">
        <div
          className="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[50%] lg:auto-cols-[33.33%] transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {portfolioItems.map((item, index) => (
            <div className="p-2" key={index}>
              <div className="card bg-base-200 shadow-xl">
                <figure>
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  {/* <p>{item.description}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 btn" onClick={prevSlide}>
        Назад
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 btn" onClick={nextSlide}>
        Вперед
      </button>

      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(portfolioItems.length / itemsToShow) }).map((_, index) => (
          <button
            key={index}
            className={`btn btn-xs mx-1 ${index === Math.floor(currentIndex / itemsToShow) ? 'btn-active' : ''}`}
            onClick={() => setCurrentIndex(index * itemsToShow)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
