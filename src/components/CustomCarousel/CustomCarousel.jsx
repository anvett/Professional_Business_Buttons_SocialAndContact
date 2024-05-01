import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'; // Usando el componente Image de Next.js para optimización de imágenes
import styles from './CustomCarousel.module.scss'; // Asegúrate de que la ruta es correcta



const CustomCarousel = ({ images }) => {
    return (
      <Carousel interval={3000} className={styles.customCarousel}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className={`d-block w-100 ${styles.customImage}`}
            />
            <Carousel.Caption className={styles.customCaption}>
              <h3 className={styles.captionTitle}>{image.captionTitle}</h3>
              {/* <p>{image.captionText}</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };

export default CustomCarousel;
