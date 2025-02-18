import Layout from '../components/Layout';
import Banner from '../components/Banner';
import ServiceItem from '../components/ServiceItem';
import LeaveRequest from '../components/LeaveRequest';
import services from '../data/services'; // Импортируйте массив услуг

const ServicesPage = () => {
  return (
    <Layout>
      {/* Баннер для страницы "Услуги" */}
      <Banner bgimg='/img/hero.png' className="h-[500px]" title="Наши услуги" />

      {/* Вывод услуг из импортированного массива */}
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              id={service.id}
              title={service.title}
              banner={service.banner}
              description={service.description}
              slug={service.slug} // Передаем slug
            />
          ))}
        </div>
      </div>

      <LeaveRequest title='Возникли вопросы?' />
    </Layout>
  );
};

export default ServicesPage;
