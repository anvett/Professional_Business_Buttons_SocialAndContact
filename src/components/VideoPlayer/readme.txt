VIDEO PLAYER COMPONENT

Componente que reproduce un video de la libreria

Este es el código del uso del Componente

 {/* Componente de video player */}


          
            <Row>
              <Col className={styles.videoPlayer}>
                <VideoPlayer videoUrl="/video/videocard1.mp4" />
              </Col>
            </Row>


//---------------------------------
// Video section
//---------------------------------


.videoPlayer {
  background-color: $primary-color;
  width: 100%;
  padding-top: $spacing-4;
  padding-bottom: $spacing-8;
  height: auto;
}