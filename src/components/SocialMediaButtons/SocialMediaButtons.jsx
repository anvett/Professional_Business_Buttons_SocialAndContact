import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";  // Asegúrate de que la ruta es correcta
import styles from "./SocialMediaButtons.module.scss";

const SocialMediaIcon = ({ href, src, alt, name }) => {
  return (
    <button onClick={() => window.open(href, '_blank')} className={styles.contactIconButton}>
      <Image src={src} alt={alt} width={40} height={40} className={styles.icon} />
      <span className={styles.iconTitle}>{name}</span>
    </button>
  );
};

const SocialMediaIcons = ({ socials }) => {
  return (
    <Container fluid className={styles.socialIconsContainer}>
      <Row className={styles.contactIconsRow}>
        <Col className={styles.contactIconsCol}>
          {socials.map((social, index) => (
            <SocialMediaIcon
              key={index}
              href={social.href}
              src={social.icon}
              alt={social.alt}
              name={social.name}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default SocialMediaIcons;
