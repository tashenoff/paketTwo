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

      <div className="py-20 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
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

        <div className="h-96 w-full">
          <iframe
            className="w-full h-full rounded-md shadow-md"
            src="https://www.google.com/maps/embed?..."
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
