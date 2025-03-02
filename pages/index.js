import Layout from '../components/Layout';
import Banner from '../components/Banner';
import About from '../components/About';
import Advantages from '../components/Advantages';
import LeaveRequest from '../components/LeaveRequest';
import FAQ from '../components/FAQItem';
import faqHome from '../data/faqHome';
import ServicesCarousel from '../components/ServicesCarousel'; // Импортируем карусель
import services from '../data/services'; // Импортируем данные услуг


const Home = () => {
  return (
    <Layout>
      <Banner
        bgimg="/img/home.jpg"
        className="h-[500px] w-full text-gray-600"
        title="Производство полиэтиленовой упаковки"
      >
        <p className="py-5 mb-5 text-white w-full">
        Мы тщательно подбираем каждый товар и проверяем его лично. Чтобы гарантировать конечному потребителю его высочайшее качество
        </p>
        <a
          href="https://wa.me/79123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 px-4 lg:w-1/2 w-full text-center py-3 bg-red-500  text-white rounded-full "
        >
          Оставить заявку
        </a>
      </Banner>

      <Advantages />

      {/* Добавляем карусель услуг */}
      <ServicesCarousel services={services} />

      <FAQ faqData={faqHome} />
      <About />
      <LeaveRequest title="Нужна помощь?" />
    </Layout>
  );
};

export default Home;