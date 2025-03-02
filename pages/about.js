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

          <div className='grid lg:grid-cols-2 md:grid-cols-2 sm-grid-cols-2 gap-10'>


            <iframe width="560" height="315" src="https://www.youtube.com/embed/LCMoD1IRhRM?si=O-Eq8sx7DX3Ch8Ah" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>




            <div className='px-10'>
              <p>
                История ТОО «Полимер-Пласт» началась в 1996 году. Как рассказывает директор предприятия Касенгалиев Кайрат Наушанович, идею открыть бизнес по производству пластиковой тары ему подсказали друзья. Идея, поддержанная единомышленниками, обрела форму: была собрана команда, арендовано помещение, приобретено оборудование. Вот так из простой идеи, подкинутой друзьями, вырос успешный бизнес, прошедший путь от скромных начинаний до тесного сотрудничества с крупными предприятиями.
                В настоящее время ассортимент продукции ТОО «Полимер-Пласт» состоит из: термоусадочной пленки, пакетов для фасовки, пакетов с цветным имиджевым логотипом. Вся продукция фирмы сертифицирована. Обеспечивая гарантию качества на свою продукцию ТОО «Полимер-пласт» занимает постоянное и устойчивое место на рынке товаров.
                История ТОО «Полимер-Пласт» - это пример того, как упорство, целеустремленность и любовь к своему делу могут привести к успеху, даже в условиях сложной экономической ситуации.


              </p>
            </div>

          

          </div>

          <SectionTitle
              badgeText="Clients"
              badgeBgColor="bg-blue-500"
              badgeTextColor="text-white"
              title="Наши клиенты"
            />

            <BrandCarousel />

            
        </div>
      </div>
    </Layout>
  );
};

export default About;
