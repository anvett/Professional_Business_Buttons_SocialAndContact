
import React from 'react';
import styles from './WhatsAppButton.module.scss'; 

const WhatsAppButton = ({ phone, message, label, stylesButton }) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${styles.whatsappButton} ${stylesButton}`}>
      {label || 'Contáctame'}
    </a>
  );
};

export default WhatsAppButton;
