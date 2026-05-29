// ============================================
// SUKOON RESORTS — SITE CONFIGURATION
// Update these values to customize your site
// ============================================

export const HOTEL_NAME = "Sukoon Resort";
export const HOTEL_TAGLINE = "Where the Mountains Meet Timeless Luxury";
export const HOTEL_LOCATION = "Near Skardu International Airport, Sukoon Rd, Gayool, Skardu";
export const HOTEL_EMAIL = "info@sukoonresorts.com";
export const WHATSAPP_NUMBER = "923322785666"; // Replace with real number (no + sign)
export const HOTEL_PHONE = "+92 332 2785666";

// WhatsApp booking message builder
export const buildBookingMessage = (roomName, checkIn, checkOut, guests) => {
  const nights = checkIn && checkOut
    ? Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))
    : null;

  if (roomName && checkIn && checkOut && guests) {
    return `Assalamu Alaikum! 🌿

I would like to make a reservation at Sukoon Resorts.

🏨 *Room:* ${roomName}
📅 *Check-in:* ${formatDate(checkIn)}
📅 *Check-out:* ${formatDate(checkOut)}
🌙 *Nights:* ${nights}
👥 *Guests:* ${guests}

Could you please confirm availability and share the booking details? 

Thank you! 🙏`;
  }

  if (roomName) {
    return `Assalamu Alaikum! 🌿

I am interested in booking the *${roomName}* at Sukoon Resorts, Skardu.

Could you please share availability and pricing details?

Thank you! 🙏`;
  }

  return `Assalamu Alaikum! 🌿

I would like to make a reservation at Sukoon Resorts, Skardu.

Could you please help me with availability and room options?

Thank you! 🙏`;
};

export const buildGeneralEnquiryMessage = (name, message) => {
  return `Assalamu Alaikum! 🌿

*Name:* ${name || "Guest"}

${message || "I have an enquiry about Sukoon Resorts."}

Thank you! 🙏`;
};

// Helper: format date nicely
export function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-PK", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

// Today's date string for min date on inputs
export function todayStr() {
  return new Date().toISOString().split("T")[0];
}
