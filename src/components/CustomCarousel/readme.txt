COMPONENTE CAROUSEL RESPONSIVE

Componente que muestra un carrusel de imágenes con caption

Este es el código jsx de uso del Componente

//-----------------------------------------------
  // Carousel Image Data Array
  //-----------------------------------------------

  const imageData = [
    {
      src: "/images/users/imagen1.png",
      alt: "Image 1",
      captionTitle: "Título de la Imagen 1",
      captionText: "Descripción breve de la Imagen 1",
    },
    {
      src: "/images/users/imagen2.png",
      alt: "Image 2",
      captionTitle: "Título de la Imagen 2",
      captionText: "Descripción breve de la Imagen 2",
    },
    {
      src: "/images/users/imagen3.png",
      alt: "Image 3",
      captionTitle: "Título de la Imagen 3",
      captionText: "Descripción breve de la Imagen 3",
    },
    // Agrega más imágenes según sea necesario
  ];


<Row>
            <Col className={styles.carouselSection}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h2 className={styles.carouselTitle}>Galería de Imágenes</h2>
                <div>
                  
                  <CustomCarousel images={imageData} />
                </div>
              </motion.div>
            </Col>
          </Row>


//---------------------------------
// Carousel section
//---------------------------------

.carouselSection{
  padding-top: $spacing-8;
  padding-bottom: $spacing-8;
  width: 100%;
  height: auto;
  background-color: $secondary-color;

  .carouselTitle {
    font-family: $font-primary;
    font-size: 2.5rem;
    color: $primary-color;
    text-align: center;
    margin-bottom: $spacing-8;
    padding-bottom: $spacing-4;

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }
}