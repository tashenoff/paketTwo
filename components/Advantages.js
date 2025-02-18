import { 
  ArchiveBoxIcon, // Для "наличие продукции на складе"
  ShieldCheckIcon, // Для "национальный производитель"
  TagIcon, // Для "оптовые цены"
  HandThumbUpIcon // Для "индивидуальный подход"
} from "@heroicons/react/24/solid";

const advantagesList = [
  { 
    title: "наличие продукции на складе", 
    icon: <ArchiveBoxIcon className="w-10 h-10 text-blue-800" /> 
  },
  { 
    title: "национальный производитель", 
    icon: <ShieldCheckIcon className="w-10 h-10 text-blue-800" /> 
  },
  { 
    title: "оптовые цены", 
    icon: <TagIcon className="w-10 h-10 text-blue-800" /> 
  },
  { 
    title: "индивидуальный подход", 
    icon: <HandThumbUpIcon className="w-10 h-10 text-blue-800" /> 
  },
];

const Advantages = () => {
  return (
    <div className="py-0 container mx-auto px-4">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {advantagesList.map((advantage, index) => (
          <div key={index} className="p-6 flex flex-col items-center text-center">
            {advantage.icon}
            <h3 className="text-[14px] lg:text-[14px] font-semibold mt-4">{advantage.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
