// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import styles from './VideoPlayer.module.scss'; 

// const VideoPlayer = ({ videoUrl }) => {
//   return (
//     <Container className={styles.videoContainer}>
//       <Row>
//         <Col>
//           <iframe
//             src={videoUrl}
//             frameborder="0"
//             allow="autoplay; encrypted-media"
//             allowfullscreen
//             title="Video"
//             className={styles.videoIframe}
//           ></iframe>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default VideoPlayer;

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import styles from './VideoPlayer.module.scss';

// const VideoPlayer = ({ videoUrl }) => {
//   return (
//     <Container className={styles.videoContainer}>
//       <Row>
//         <Col>
//           <iframe
//             src={videoUrl}
//             frameborder="0"
//             allow="encrypted-media"
//             allowfullscreen
//             title="Video"
//             controls // Asegura que los controles sean visibles
//             className={styles.videoIframe}
//           ></iframe>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default VideoPlayer;

import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import styles from './VideoPlayer.module.scss';

const VideoPlayer = ({ videoUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const handleVideoClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container className={styles.videoContainer}>
      <Row>
        <Col>
          <div onClick={handleVideoClick} className={styles.videoWrapper}>
            <iframe
              src={videoUrl}
              frameborder="0"
              allow="encrypted-media"
              allowfullscreen
              title="Video"
              controls
              className={styles.videoIframe}
            ></iframe>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Video Playback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src={videoUrl}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="Video"
            controls
            style={{ width: '100%', height: '500px' }}  // Ajusta según necesidad
          ></iframe>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default VideoPlayer;


