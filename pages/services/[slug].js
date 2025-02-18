import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import LeaveRequest from '../../components/LeaveRequest';
import services from '../../data/services'; // Импортируйте массив услуг
import FAQ from '../../components/FAQItem';
import Banner from '../../components/Banner';

import Portfolio from '../../components/Portfolio'; // Импортируем компонент портфолио
import AdvantagesList from '../../components/AdvantagesList'; // Убедитесь, что путь правильный
import Reviews from '../../components/Reviews';
import SectionHeader from '../../components/SectionHeader';
const ServicePage = () => {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug) {
        return <div>Загрузка...</div>;
    }

    console.log("Полученный slug:", slug);
    console.log("Доступные услуги:", services);

    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return <div>Услуга не найдена</div>; // Обработка случая, если услуга не найдена
    }



    return (
        <Layout>
            <Banner bgimg={service.banner} className='h-[500px] text-white' title={service.title} />
            <div className="container mx-auto py-10">
                <SectionHeader
                    title="Об услуге"
                    description={service.description}
                />

                <AdvantagesList advantages={service.advantages} />
                <Portfolio portfolioItems={service.portfolio} />
                <FAQ faqData={service.faq} /> {/* Добавляем компонент FAQ */}
                <Reviews reviews={service.reviews} />
            </div>
            <LeaveRequest title='Дарим скидку -50%'>
                {/* Таймер обратного отсчета */}
                {/* <CountdownTimer targetDate={endDate} /> */}
            </LeaveRequest>
        </Layout>
    );
};

export default ServicePage;
