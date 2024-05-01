import React, { useState } from "react";
import { Navbar, Nav, Container, NavbarCollapse } from "react-bootstrap";
import { Link } from "react-scroll";
import Image from "next/image";
import styles from "./Navbar.module.scss";

const CustomNavbar = () => {
  return (
    <Navbar   className={styles.navbarContainer}>
      <Container className={styles.container}>
        <Navbar.Brand href="#home" className={styles.navbarBrand}>
          <Image
            src="/images/profile.jpg"
            width={50}
            height={50}
            alt="Logo"
            className={styles.navbarLogo}
          />
        </Navbar.Brand>
        <Navbar.Collapse>
        <Nav className={styles.nav}>
          <Link to="profile" smooth={true} duration={500} className={styles.navLink}>
            Perfil
          </Link>

          <Link to="productos" smooth={true} duration={500} className={styles.navLink}>
            Productos
          </Link>

          <Link to="payment" smooth={true} duration={500} className={styles.navLink}>
            Info Pago
          </Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
