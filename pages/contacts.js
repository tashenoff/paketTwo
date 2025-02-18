import Layout from '../components/Layout';
import Banner from '../components/Banner';

const Contacts = () => {
  return (
    <Layout>
      {/* Баннер с заголовком "Контакты" */}
      <Banner bgimg='/img/deal.jpg' className="h-[300px]" title="Контакты"></Banner>

      {/* Контейнер с формой и картой */}
      <div className="py-20 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Форма отправки */}
        <div>
          <h2 className="text-4xl font-bold mb-8">Свяжитесь с нами</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-lg font-medium" htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ваше имя"
              />
            </div>
            <div>
              <label className="block text-lg font-medium" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ваш email"
              />
            </div>
            <div>
              <label className="block text-lg font-medium" htmlFor="message">Сообщение</label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ваше сообщение"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Отправить
            </button>
          </form>
        </div>

        {/* Карта */}
        <div className="h-96 w-full">
          <iframe
            className="w-full h-full rounded-md shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429.3596435823204!2d71.44025168725436!3d51.200745466175775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42458095c36272dd%3A0xd78c01788ae4273c!2z0KLQntCeINCf0L7Qu9C40LzQtdGALdCf0LvQsNGB0YI!5e0!3m2!1sru!2skz!4v1739911002690!5m2!1sru!2skz"
            allowFullScreen=""
            loading="lazy"
            title="Company Location"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
