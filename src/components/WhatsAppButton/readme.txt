WHATSAPP BUTTON COMPONENT

Componente con un botón que lleva al usuario a contactarse por whatsapp para X requerimiento.

Los estilos del componente son personalizables en el scss del componente.

Es necesario importar el componente WhatsAppButton

Este es el jsx para uso en cualquier componente

                <div className={styles.whatsappSection}>
                    <WhatsAppButton
                      phone="+593994805678"
                      message="Hola, me gustaría saber más sobre tus servicios"
                    />
                </div>


//---------------------------------
// WhatsApp section
//---------------------------------

.whatsappSection{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: $spacing-4;
  padding-bottom: $spacing-4;
}