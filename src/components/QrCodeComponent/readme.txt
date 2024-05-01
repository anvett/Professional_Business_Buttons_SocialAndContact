QR COMPONENT

Componente para mostrar el código QR de la tarjeta.

Tiene un título y la imagen,

Este es el código jsx del uso del componente

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
                <QRCodeComponent qrCodeImageUrl="/images/qrcode_veronicacano.png" altText="QR Code" />
              </motion.div>
            </Col>
          </Row>

//---------------------------------
// QR code section
//---------------------------------

.qrCode {
  background-color: $primary-color;
  padding-top: $spacing-4;
  padding-bottom: $spacing-8;
  width: 100%;
  height: auto;
  background-image: url("/images/backgrounds/background2.png");
  background-size: cover;
  background-repeat: no-repeat;

  .titleQrContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;   
    padding-bottom: $spacing-8;
  }

  .qrTitle {
    margin-top: 10px;
    color: $secondary-color;
    text-align: center;
    font-size: 2.5rem;
    font-family: $font-primary;
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }
}