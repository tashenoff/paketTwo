import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function PhoneNumber() {
    const phoneNumber = "8(700)961-96-63"; // Определяем переменную с номером телефона

    return (
        <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <a href={`tel:${phoneNumber}`} className="link ">
                {phoneNumber}
            </a>
        </div>
    );
}

export default PhoneNumber;
