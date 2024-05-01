import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import ContactIconsButton from "@/components/ContactIconsButton/contactIconsButton";
import SocialMediaButtons from "@/components/SocialMediaButtons/SocialMediaButtons";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import PaymentInfo from "@/components/PaymentInfo/PaymentInfo";
import QRCodeComponent from "@/components/QrCodeComponent/QrCodeComponent";
import ProductsSection from "@/components/ProductsSection/ProductsSection";
import styles from "../styles/Home.module.scss";

export default function testpage() {
  //-----------------------------------------------
  // Contact Data Array
  //-----------------------------------------------

  const contactData = [
    {
      href: "tel:+593983238805",
      icon: "/icons/call_b.png",
      alt: "Phone",
      title: "Contáctame",
    },
    {
      href: "mailto:mayraesperanzaz@gmail.com",
      icon: "/icons/email_b.png",
      alt: "Email",
      title: "Email",
    },
    {
      href: "https://wa.me/+593983238805",
      icon: "/icons/whatsapp_b.png",
      alt: "WhatsApp",
      title: "WhatsApp",
    },
    // {
    //   href: "https://t.me/username",
    //   icon: "/icons/telegram_c.png",
    //   alt: "Telegram",
    //   title: "Telegram",
    // },
    {
      href: "https://www.google.com/maps/place/0%C2%B058'21.6%22S+80%C2%B040'47.9%22W/@-0.9726725,-80.6825326,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-0.9726725!4d-80.6799577?entry=ttu",
      icon: "/icons/ubicacion_b.png",
      alt: "Location",
      title: "Ubicación",
    },
  ];

  const productsData = [
    {
      id: 1,
      name: "Atún Tritomar con jalapeños",
      image: "/images/jalapeno.png",
      description: [
        "Pequeño: 341gr. Precio: $4",
        "Mediano: 400gr. precio $6",
        "Grande:    481gr. Precio $7,50",
        "Extra grande: 670gr. Precio $10",
      ],
      phone: "+593983238805",
    },
    {
      id: 2,
      name: "Atún Tritomar con pimientos dulces",
      image: "/images/pimientos.jpg",
      description: [
        "Pequeño: 341gr. Precio: $4",
        "Mediano: 400gr. precio $6",
        "Grande:    481gr. Precio $7,50",
        "Extra grande: 670gr. Precio $10",
      ],
      phone: "+593983238805",
    },
    {
      id: 3,
      name: "Atún Tritomar con aceitunas",
      image: "/images/aceitunas.jpg",
      description: [
        "Pequeño: 341gr. Precio: $4",
        "Mediano: 400gr. precio $6",
        "Grande:    481gr. Precio $7,50",
        "Extra grande: 670gr. Precio $10",
      ],
      phone: "+593983238805",
    },
    {
      id: 4,
      name: "Atún Tritomar Mixto",
      image: "/images/mixto.jpg",
      description: [
        "Pequeño: 341gr. Precio: $4",
        "Mediano: 400gr. precio $6",
        "Grande:    481gr. Precio $7,50",
        "Extra grande: 670gr. Precio $10",
      ],
      phone: "+593983238805",
    },
  ];

  //-----------------------------------------------
  // Social Media Array
  //-----------------------------------------------
  const socials = [
    {
      href: "https://www.instagram.com/atuntritomar/",
      icon: "/icons/instagram.jpg",
      alt: "Instagram",
      name: "Instagram",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61558674374046&mibextid=ZbWKwL",
      icon: "/icons/facebook_b.png",
      alt: "Facebook",
      name: "Facebook",
    },
    // Agrega más redes sociales según sea necesario
  ];

  //-----------------------------------------------

  return (
    <>
      <Head>
        <title>Tritomar</title>
        <meta name="description" content="Tritomar Digital Card" />
        <link rel="icon" href="/icons/logo.ico" />

        {/* Open Graph */}
        <meta property="og:url" content="https://tritomar.anvetcard.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Business digital card Tritomar" />
        <meta property="og:description" content="Tarjeta de presentación digital" />
        <meta
          property="og:image"
          content="https://tritomar.anvetcard.com/images/shared_image.jpg"
        />
      </Head>
      <Layout>
        <Container fluid className={styles.mainContainer}>
          {/* Profile Section */}

          <section className={styles.profileSection}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Profile Image Section */}

              <Row>
                <Col className={styles.ProfileImageSection}>
                  <ProfileImage src="/images/profile.jpg" alt="Tritomar profile" size={450} />
                </Col>
              </Row>

              {/* Personal Info Section */}
              <Row>
                <Col>
                  <PersonalInfo
                    name="ATUN TRITOMAR"
                    title="Fácil, práctico y delicioso"
                    description="100% Lomo de atún hecho al horno con finas y seleccionadas especias y aceite de girasol. Acompañado con jalapeños, pimientos dulces, aceitunas o pepinillos, harán de cada  bocado  una experiencia."
                  />
                </Col>
              </Row>

              {/* Social Networks Section */}

              <Row>
                <Col className={styles.socialButtonSection}>
                  <SocialMediaButtons socials={socials} />
                </Col>
              </Row>

              {/* Contact Info Section */}
              <Row>
                <Col className={styles.contactButtonSection}>
                  <ContactIconsButton
                    contacts={contactData}
                    buttonClassName="customButtonClass" // Clases adicionales para personalizar los botones
                    titleClassName="customTitleClass" // Clase para personalizar los títulos
                    iconClassName="customIconClass" // Clase para personalizar los íconos
                    colClassName="customColClass" // Clase para personalizar la columna
                    containerContactButton="customContainerClass" // Clase para personalizar el contenedor
                  />
                </Col>
              </Row>
            </motion.div>
          </section>

          {/* Componente de Productos destacados */}

          <Row>
            <Col className={styles.productsText}>
              <section className={styles.productsSection} id="productos">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className={styles.productsTitle}>Productos Destacados</h1>
                  <p className={styles.productsDescription}>
                    Haz clic en el producto para ver los detalles
                  </p>
                  <ProductsSection productsData={productsData} />
                </motion.div>
              </section>
            </Col>
          </Row>

          {/* Componente de video player */}

          <Row>
            <Col className={styles.videoPlayer}>
              <VideoPlayer videoUrl="/video/video_tritomar.mp4" />
            </Col>
          </Row>

          {/* Componente de información de pago */}

          <Row>
            <Col className={styles.paymentInfo}>
              <section id="payment" className={styles.paymentSection}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h2 className={styles.paymentTitle}>Información de Pago</h2>
                  <p className={styles.paymentDescription}>
                    Haz clic en el logo para acceder a los datos de la cuenta
                  </p>

                  <div className={styles.bankInfo}>
                    {/* <PaymentInfo
                      bankName="Banco Pichincha"
                      accountNumber="5261117000"
                      identification="1103826614"
                      email="aveintimilla@anvetcorp.com"
                      bankLogo="/images/banco_pichincha.png"
                    /> */}
                    <PaymentInfo
                      bankName="Banco Pichincha"
                      accountNumber="2205431006"
                      accountType="Cuenta de ahorros"
                      identification="0000000000"
                      email="mayraesperanzaz@gmail.com"
                      bankLogo="/images/bancoPichincha.png"
                    />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          {/* Componente de QR Code */}

          <Row>
            <Col className={styles.qrCode}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className={styles.titleQrContainer}>
                  <h2 className={styles.qrTitle}>Escanea el código QR para compartir</h2>
                </div>
                <QRCodeComponent qrCodeImageUrl="/images/qrcode_tritomar.png" altText="QR Code" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
