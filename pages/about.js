import Layout from '../components/Layout';
import Banner from '../components/Banner';
import BrandCarousel from '../components/BrandCarousel';
import SectionTitle from '../components/SectionTitle'; // Импортируем компонент заголовка

const About = () => {
  return (
    <Layout>
      <Banner bgimg='/img/001.jpg' className="h-[300px]" title="О нас"></Banner>
      <div className="py-20">
        <div className="container mx-auto">

          <div className=''>
            <p>
              Сегодня на рынке упаковочных материалов наблюдается высочайшая конкуренция. Рост темпов производства, потребности сельскохозяйственной отрасли и транспортно-логистических компаний требуют постоянной «подпитки» в виде упаковки. В то же время, выбирая постоянного партнера-поставщика данной группы товаров, можно оказаться у «разбитого корыта». Качество продукции часто оказывается неудовлетворительным, а цена зачастую весьма завышена. В данных условиях мелкому и среднему бизнесу важно довериться проверенной компании. Коей, без сомнения, является наш магазин Полимер-Пласт
            </p>
          </div>

          <SectionTitle
          badgeText="Clients"
          badgeBgColor="bg-blue-500"
          badgeTextColor="text-white"
          title="Наши клиенты"
        />

          <BrandCarousel/>

        </div>
      </div>
    </Layout>
  );
};

export default About;
