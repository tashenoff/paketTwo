import { useState } from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      setStatus('error');
    }
  };

  return (
    <Layout>
      <Banner bgimg='/img/deal.jpg' className="h-[300px]" title="Контакты" />

      <div className="py-20 container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Форма */}
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold mb-8">Свяжитесь с нами</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-lg font-medium" htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ваш email"
              />
            </div>
            <div>
              <label className="block text-lg font-medium" htmlFor="message">Сообщение</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
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

          {status === 'loading' && <p className="text-blue-500 mt-2">Отправка...</p>}
          {status === 'success' && <p className="text-green-500 mt-2">Сообщение отправлено!</p>}
          {status === 'error' && <p className="text-red-500 mt-2">Ошибка при отправке.</p>}
        </div>

        {/* Контактная информация */}
        <div className="space-y-6 bg-gray-100 p-6 rounded-md shadow-md">
          <h3 className="text-2xl font-bold">Наши контакты</h3>
          <p><strong>Адрес:</strong> адрес: г.Астана, ул. Аксай 11</p>
          <p><strong>Телефон:</strong> <br/> 8 (717) 253-13-30 <br/> +7 778 980-11-20</p>
          <p><strong>Данные компании:</strong> <br/> ТОО "Полимер-Пласт" <br/> +7 (778) 980-11-20</p>
          <p><strong>Instagram:</strong> <a href="https://www.instagram.com/polimer_plast.kz/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@polimer_plast.kz</a></p>
          <div className="h-48 w-full">
            <iframe
              className="w-full h-full rounded-md shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429.3596435823204!2d71.44025168725436!3d51.200745466175775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42458095c36272dd%3A0xd78c01788ae4273c!2z0KLQntCeINCf0L7Qu9C40LzQtdGALdCf0LvQsNGB0YI!5e0!3m2!1sru!2skz!4v1739911002690!5m2!1sru!2skz"
              allowFullScreen=""
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
