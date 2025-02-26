// components/ServicesCarousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ServiceItem from './ServiceItem';
import SectionTitle from './SectionTitle'; // Импортируем компонент заголовка

const ServicesCarousel = ({ services }) => {
  if (!services || services.length === 0) {
    return <div className="text-center py-10">Нет доступных услуг.</div>;
  }

  return (
    <div className="container mx-auto my-10">
      {/* Используем SectionTitle для заголовка секции */}
      <SectionTitle
                       
                     
                        title="Наши услуги"
                        
                    />

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <ServiceItem
              title={service.title}
              banner={service.banner}
              description={service.description}
              slug={service.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesCarousel;