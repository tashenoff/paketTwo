import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Метод не разрешен' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Заполните все поля' });
  }

  try {
    // Настройка транспортера
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kail.dead.kd@gmail.com',
        pass: 'gezg lxya pjtd andb', // Пароль приложения
      },
    });

    // Опции письма
    const mailOptions = {
      from: email,
      to: 'marat.esline@gmail.com',
      subject: `Новое сообщение с сайта от ${name}`,
      text: `Имя: ${name}\nEmail: ${email}\n\nСообщение:\n${message}`,
    };

    // Отправка письма
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Сообщение отправлено' });
  } catch (error) {
    console.error('Ошибка отправки почты:', error);
    return res.status(500).json({ message: 'Ошибка отправки почты' });
  }
}
