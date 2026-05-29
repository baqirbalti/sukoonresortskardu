// WhatsAppFAB.jsx — Fixed floating WhatsApp button on all pages
import { WHATSAPP_NUMBER, buildBookingMessage } from "../config.js";

export default function WhatsAppFAB() {
  const handleClick = () => {
    const msg = buildBookingMessage(null, null, null, null);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-fab"
      title="Chat with us on WhatsApp"
      aria-label="Book on WhatsApp"
    >
      📱
    </button>
  );
}
