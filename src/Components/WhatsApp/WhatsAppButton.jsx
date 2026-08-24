
import { siWhatsapp } from "simple-icons";
import "./WhatsApp.css";

function WhatsApp() {
  const phoneNumber = "234XXXXXXXXXX";

  const message = encodeURIComponent(
    "Hello! I visited your portfolio and would like to get in touch."
  );

  return (
    <div id="whatsapp-container">
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with me on WhatsApp"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          aria-hidden="true"
        >
          <title>WhatsApp</title>
          <path d={siWhatsapp.path} />
        </svg>
      </a>
    </div>
  );
}

export default WhatsApp;

