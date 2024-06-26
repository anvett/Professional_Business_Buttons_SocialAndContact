import React from 'react';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import styles from './ProfileImage.module.scss';

const ProfileImage = ({ src, alt }) => {
  return (
    <Container className={styles.profileImageContainer} >
      <Image src={src} alt={alt} layout="fill" objectFit="cover" className={styles.profileImage} />
    </Container>
  );
};

export default ProfileImage;
