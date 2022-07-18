import axios from 'axios'
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request'

import React, { useState } from 'react'

import './style.css'
import ModalSms from '../ModalSms'

type Props = {
    saleId: number
}



function handleClick(saleId: number) {
    axios(`${BASE_URL}/sales/${saleId}/notification`).then(response => { })

}

function NotificationButton({ saleId }: Props) {
    const [isModalVisible, setIsModalVisible] = useState(false)
    return (
        <div className="red-btn" onClick={() => {
            handleClick(saleId);
            setIsModalVisible(true);
            setTimeout(() => {
                setIsModalVisible(false)
            }, 4000);
            console.log('teste');


        }}>
            <img src={icon} alt="Notificar" />
            {isModalVisible ? <ModalSms /> : null}
        </div>

    )
}

export default NotificationButton

