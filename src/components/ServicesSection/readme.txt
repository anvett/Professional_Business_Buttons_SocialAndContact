SERVICIOS SECTION

Componente que muestra los títulos y certificados del usuario.

Cuenta con un título de sección, una imagen y el título profesional.

Al hacer clic despliega un modal con la información detallada.

Este es el uso del componente en el index o en otra página que lo requiera

 {/* Componente de Servicios */}

//-----------------------------------------------
  // Services Data Array
  //-----------------------------------------------

  const service = [
    {
      service: "Asesoría en Derecho Civil",
      description:
        "Brindamos asesoría legal integral en disputas civiles, incluyendo contratos, responsabilidad civil, reclamos por daños y perjuicios, y más. Nuestro enfoque se centra en la prevención de litigios y la representación eficaz en juicio para proteger tus derechos e intereses.",
      imageUrl: "/images/users/servicio1.jpg",
    },
    {
      service: "Consultoría Corporativa y Societaria",
      description:
        "Ofrecemos servicios de consultoría para empresas, abarcando desde la constitución de sociedades hasta la resolución de conflictos societarios. Nuestro objetivo es asegurar la operación eficiente de tu empresa, guiándote en la gobernanza corporativa, fusiones, adquisiciones y reestructuraciones.",
      imageUrl: "/images/users/servicio2.jpg",
    },

    {
      service: "Registro y Protección de Marcas",
      description:
        "Especialistas en propiedad intelectual, nos dedicamos al registro y protección de marcas en el territorio nacional e internacional. Aseguramos la exclusividad y defensa de tu marca frente a infracciones y competencia desleal, potenciando el valor de tu activo más importante.",
      imageUrl: "/images/users/servicio3.jpg",
    },
    {
      service: "Desarrollo de Estrategias de Contenido Digital",
      description:
        "Creamos estrategias de contenido personalizadas para marcas y profesionales que buscan destacar en el entorno digital. Nuestro servicio combina análisis de audiencia, storytelling efectivo y optimización SEO para generar contenido que no solo atraiga sino que también convierta y retenga a tu audiencia objetivo.",
      imageUrl: "/images/users/servicio4.jpg",
    },
    {
      service: "Optimización de Experiencia de Usuario (UX)",
      description:
        "Ofrecemos un servicio integral de optimización UX para sitios web y aplicaciones, centrado en crear interfaces amigables y accesibles. A través de un diseño centrado en el usuario, mejoramos la usabilidad y satisfacción del cliente, lo que se traduce en mejores tasas de conversión y fidelización de usuarios.",
      imageUrl: "/images/users/servicio5.jpg",
    },
    {
      service: "Gestión de Redes Sociales y Construcción de Marca Personal",
      description:
        "Especializados en la gestión de redes sociales y el fortalecimiento de la marca personal, ayudamos a individuos y empresas a construir y mantener una presencia en línea sólida. A través de contenido auténtico y estrategias de engagement, te posicionamos como líder en tu industria, conectando con tu audiencia de manera efectiva.",
      imageUrl: "/images/users/servicio6.jpg",
    },
  ];


          <Row>
            <Col className={styles.servicesSection}>
              <section id="servicios">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.servicesText}>
                    <h2 className={styles.servicesTitle}>Servicios</h2>
                    <span className={styles.servicesInstructions}>
                      Haz clic en el item para ver la información
                    </span>
                  </div>

                  <div className={styles.servicesInfo}>
                    <Services services={service} />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

//---------------------------------
//Services and specialities section
//---------------------------------

.servicesSection {
  padding-top: $spacing-8;
  padding-bottom: $spacing-8;
  width: 100%;
  height: auto;
  background-color: $primary-color;
  // background-image: url("/images/background_4.png");
  // background-size: cover;
  // background-repeat: no-repeat;

  .servicesText {
    margin-bottom: $spacing-4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .servicesTitle {
    font-family: $font-primary;
    font-size: 2.5rem;
    color: $secondary-color;
    text-align: center;
    margin-bottom: $spacing-4;
  }

  .servicesInstructions {
    color: $secondary-color;
    text-align: center;
    font-size: 1.2rem;
  }
}