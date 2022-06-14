import React from 'react';
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const Whatsapp = () => {
  return (
    <WhatsAppWidget
      phoneNumber='+17177589669'
      textReplyTime='Tiempo de respuesta aproximado: 1 hora'
      message={'¡Hola! 👋🏼 \n\nEn que puedo ayudarle?'}
      companyName='Endobarr'
      sendButton='Enviar'
    />
  );
};

export default Whatsapp;
