const services = [
    {
        id: 1,
        title: "Изготовление пакетов с логотипом",
        description: "Больше не нужно тратить драгоценное время на непрофильную деятельность, мы сделаем всю работу по уборке вашего объекта за Вас!",
        slug: "izgotovlenie-okon",
        banner: "/img/1.webp",
        advantages: [
            {
                title: "МЕТОДИКА",
                icon: "fas fa-check-circle" // FontAwesome иконка
            },
            {
                title: "ОБОРУДОВАНИЕ",
                icon: "fas fa-user-plus" // FontAwesome иконка
            },
            {
                title: "ОПЫТ",
                icon: "fas fa-shield-alt" // FontAwesome иконка
            },
            {
                title: "БЫСТРО",
                icon: "fas fa-lightbulb" // FontAwesome иконка
            }
         
        ],
        faq: [
            {
                question: 'Какой срок службы у Изготовление окон?',
                answer: 'Срок службы услуги 1 составляет около 10 лет.'
            },
            {
                question: 'Как ухаживать за услугой 1?',
                answer: 'Рекомендуется обращаться к специалистам.'
            }
        ],
        reviews: [
            {
                text: "Отличные окна, очень качественные!",
                author: "Алия Касымова"
            },
            {
                text: "Услуга была выполнена быстро и профессионально.",
                author: "Серик Нурмухаметов"
            },
            {
                text: "Я очень доволен работой, окна просто супер!",
                author: "Динара Султанова"
            },
            {
                text: "Спасибо за качественную работу и внимательное отношение.",
                author: "Руслан Ермеков"
            }
        ],
        portfolio: [
            {
                title: 'УБОРКА МЕСТ ОБЩЕГО ПОЛЬЗОВАНИЯ',
                description: 'Описание проекта установки окна в жилом помещении.',
                image: 'https://images.pexels.com/photos/4062036/pexels-photo-4062036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                title: 'УБОРКА ОФИСОВ И САНИТАРНЫХ УЗЛОВ',
                description: 'Установка окон в офисное помещение с учетом особенностей дизайна.',
                image: 'https://images.pexels.com/photos/4062036/pexels-photo-4062036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                title: 'УБОРКА ПРИЛЕГАЮЩЕЙ ТЕРРИТОРИИ',
                description: 'Проект по замене старых деревянных окон на современные пластиковые.',
                image: 'https://images.pexels.com/photos/4062036/pexels-photo-4062036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
            
        ],
    },
    {
        id: 2,
        title: "Производство тарного и упаковочного материала",
        description: "Больше не нужно тратить драгоценное время на непрофильную деятельность, мы сделаем всю работу по уборке вашего объекта за Вас!",
        slug: "izgotovlenie-dverey",
        banner: "/img/2.jpg",
        advantages: [
            {
                title: "ОБОРУДОВАНИЕ",
                icon: "fas fa-lock" // FontAwesome иконка
            },
            {
                title: "МАТЕРИАЛЫ",
                icon: "fas fa-paint-roller" // FontAwesome иконка
            },
            {
                title: "РЕГУЛИРОВКИ",
                icon: "fas fa-cloud-sun" // FontAwesome иконка
            },
            {
                title: "ВЫХОД ИЗ СТРОЯ",
                icon: "fas fa-cogs" // FontAwesome иконка
            }
          
        ],
        faq: [
            {
                question: 'Какой срок службы у Изготовление дверей?',
                answer: 'Срок службы услуги 2 составляет около 15 лет.'
            },
            {
                question: 'Как выбрать подходящие двери?',
                answer: 'Мы поможем вам выбрать идеальные двери для вашего интерьера.'
            }
        ],
        reviews: [
            {
                text: "Качество на высшем уровне, двери просто великолепные!",
                author: "Айгерим Молдабаева"
            },
            {
                text: "Работа выполнена в срок, рекомендую!",
                author: "Марат Бекмурзин"
            },
            {
                text: "Прекрасный сервис и отличные двери.",
                author: "Зарина Тлегенова"
            },
            {
                text: "Двери соответствуют всем нашим ожиданиям.",
                author: "Станислав Сагадиев"
            }
        ],
        portfolio: [
            {
                title: 'Обслуживание системы вентиляции',
                description: 'Описание проекта установки двери в офисном помещении.',
                image: 'https://images.pexels.com/photos/4062036/pexels-photo-4062036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                title: 'Обслуживание холодосистемы',
                description: 'Проект по изготовлению и установке индивидуальных дверей.',
                image: 'https://images.pexels.com/photos/4062036/pexels-photo-4062036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                title: 'Обслуживание системы пожарной сигнализации',
                description: 'Установка дверей с повышенной теплоизоляцией.',
                image: 'https://images.pexels.com/photos/4062036/pexels-photo-4062036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },

            {
                title: 'Обслуживание системы контроля доступа',
                description: 'Установка дверей с повышенной теплоизоляцией.',
                image: 'https://images.pexels.com/photos/4062036/pexels-photo-4062036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },

            {
                title: 'Обслуживание системы видео контроля',
                description: 'Установка дверей с повышенной теплоизоляцией.',
                image: 'https://images.pexels.com/photos/4062036/pexels-photo-4062036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },

            {
                title: 'Обслуживание системы лифтового хозяйна',
                description: 'Установка дверей с повышенной теплоизоляцией.',
                image: 'https://images.pexels.com/photos/4062036/pexels-photo-4062036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },

            {
                title: 'Обслуживание системы электрической сети',
                description: 'Установка дверей с повышенной теплоизоляцией.',
                image: 'https://images.pexels.com/photos/4062036/pexels-photo-4062036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
        ],
    },
    {
        id: 3,
        title: "Готовая продукция из ПВД и ПНД",
        description: "В клининговой компании CleanCity представлены услуги промышленного альпинизма. Жилые дома, современные бизнес-центры и другие многоэтажные архитектурные объекты нуждаются в профессиональном комплексном обслуживании.",
        slug: "peregorodki",
        banner: "/img/3.jpg",
        advantages: [
            {
                title: "УДОБСТВО",
                icon: "fas fa-expand" // FontAwesome иконка
            },
            {
                title: "ЭКОНОМИЯ",
                icon: "fas fa-paint-brush" // FontAwesome иконка
            },
            {
                title: "ПРОФЕССИОНАЛИЗМ",
                icon: "fas fa-th" // FontAwesome иконка
            },
            {
                title: "ВЫСОТНЫЕ РАБОТЫ",
                icon: "fas fa-handshake" // FontAwesome иконка
            }
           
        ],
        faq: [
            {
                question: 'Как установить перегородки?',
                answer: 'Мы предлагаем профессиональные услуги по установке перегородок.'
            },
            {
                question: 'Можно ли перемещать перегородки?',
                answer: 'Да, перегородки можно легко перемещать и переставлять.'
            }
        ],
        reviews: [
            {
                text: "Перегородки отлично подошли для нашего офиса!",
                author: "Динара Серикова"
            },
            {
                text: "Стильные и функциональные перегородки, рекомендую!",
                author: "Асылбек Нургалиев"
            }
        ],
        portfolio: [
            {
                title: 'Очистка стен и витрин многоэтажных зданий',
                description: 'Описание установки перегородки в офисном помещении.',
                image: 'https://images.pexels.com/photos/4062036/pexels-photo-4062036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                title: 'Мойка окон альпинистами',
                description: 'Установка декоративной перегородки в интерьере.',
                image: 'https://images.pexels.com/photos/4062036/pexels-photo-4062036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },

            {
                title: 'Мойка и очистка фасадов зданий',
                description: 'Установка декоративной перегородки в интерьере.',
                image: 'https://images.pexels.com/photos/4062036/pexels-photo-4062036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },

            {
                title: 'Уборка наледи и снега с крыш',
                description: 'Установка декоративной перегородки в интерьере.',
                image: 'https://images.pexels.com/photos/4062036/pexels-photo-4062036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },

            {
                title: 'Не влияет на работу офисов в здании.',
                description: 'Установка декоративной перегородки в интерьере.',
                image: 'https://images.pexels.com/photos/4062036/pexels-photo-4062036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
        ],
    }
 
];


export default services; // Убедитесь, что вы экспортируете массив