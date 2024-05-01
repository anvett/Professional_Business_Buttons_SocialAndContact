import React from "react";
import styles from "./Footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.containerFooter}>
        <p className={styles.textFooter}>
          &copy; {new Date().getFullYear()} Abundante Mente.. All rights reserved.
        </p>
        <span className={styles.linkFooter}>Marketing Digital</span>
      </Container>
    </footer>
  );
};

export default Footer;
