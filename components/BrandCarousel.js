import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const brands = [
  { name: 'Мегастрой', logo: '/img/logos/megastroy.png' },
  { name: '12 месяцев', logo: '/img/logos/12months.png' },
  { name: 'Галмарт', logo: '/img/logos/galmart.png' },
  { name: 'Остин', logo: '/img/logos/ostin.png' },
  { name: 'Кофе бум', logo: '/img/logos/coffeeboom.png' },
  { name: 'Астыкжан', logo: '/img/logos/astykzhan.jpeg' },
  { name: 'Вкус март', logo: '/img/logos/vkusmart.jpg' },
  { name: 'Мир Вкуса', logo: '/img/logos/mirvkusa.jpg' },
  { name: 'Гиппократ', logo: '/img/logos/gippokrat.png' },
];

export default function BrandCarousel() {
  return (
    <div className="w-full py-4">

        
      <Swiper
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        modules={[Autoplay]}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img src={brand.logo} alt={brand.name} className="w-24 h-24 object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
