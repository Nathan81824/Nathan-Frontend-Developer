import "./WhatsApp.css";

function WhatsAppButton() {
  const phoneNumber = "234XXXXXXXXXX";

  const message = encodeURIComponent(
    "Hello! I visited your portfolio and would like to get in touch."
  );

  return (
    <a
      className="whatsapp-button"
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
    >
      <span className="whatsapp-icon">
        ☎
      </span>

      <span className="whatsapp-text">
        Chat with me
      </span>
    </a>
  );
}

export default WhatsAppButton;