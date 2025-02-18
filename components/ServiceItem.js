import Image from 'next/image'; // Импортируйте Image из next/image

const ServiceItem = ({ title, banner }) => {
  return (
    <div className="card bg-base-100 ">
     
        <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
          {/* Изображение сверху карточки */}
          <Image 
            src={banner} 
            alt={title} 
            layout="fill" 
            objectFit="cover" 
            className="rounded-t-lg" 
          />
        </div>
        <div className="card-body px-0 py-5">
          <h3 className="card-title text-xl font-semibold">{title}</h3>
          {/* <p className="my-2">{description}</p> */}
          {/* <div className="card-actions justify-end">
            <button className="btn w-full btn-success">Подробнее</button>
          </div> */}
        </div>
    
    </div>
  );
};

export default ServiceItem;
