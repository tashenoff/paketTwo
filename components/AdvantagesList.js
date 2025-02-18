import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCheckCircle,
    faUserPlus,
    faShieldAlt,
    faLightbulb,
    faPaintBrush,
    faLock,
    faPaintRoller,
    faCloudSun,
    faCogs,
    faThLarge,
    faExpand,
    faTh,
    faHandshake,
    faTools,
    faCloudRain,
    faThermometerHalf,
    faEye,
    faUmbrella,
    faClock,
    faWrench,
    faUserCheck,
    faThumbsUp,
    faStar


} from '@fortawesome/free-solid-svg-icons';

// Добавьте иконки в библиотеку
library.add(faCheckCircle, faUserPlus, faTools, faStar, faThumbsUp, faUserCheck, faWrench, faClock, faUmbrella, faEye, faThermometerHalf, faCloudRain, faHandshake, faShieldAlt, faLightbulb, faPaintBrush, faLock, faPaintRoller, faCloudSun, faCogs, faThLarge, faExpand, faTh);

const AdvantagesList = ({ advantages }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-4 gap-4">
            {advantages.map((advantage) => (
                <div key={advantage.title} className=" flex items-center p-4 rounded-lg shadow">
                    <div className='flex p-5 bg-base-200 rounded-full w-8 h-8 items-center justify-center '>
                        <FontAwesomeIcon icon={advantage.icon.split(' ')} className="  " />
                    </div>
                    <h3 className="text-lg font-semibold mx-5">{advantage.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default AdvantagesList;
