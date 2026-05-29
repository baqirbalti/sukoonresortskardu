// pages/RoomDetailPage.jsx
import { useState, useEffect } from "react";
import AnimBlock from "../components/AnimBlock.jsx";
import Footer from "../components/Footer.jsx";
import { ROOMS } from "../data/rooms.js";
import { WHATSAPP_NUMBER } from "../config.js";

// ── Booking Form Modal (Matches SS 4) ─────────────────────────
function BookingModal({ room, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", whatsapp: "", checkIn: "", checkOut: "", adults: "1", children: "0"
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Booking Request*%0A%0A*Room:* ${room.name}%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*WhatsApp:* ${formData.whatsapp}%0A*Check-In:* ${formData.checkIn}%0A*Check-Out:* ${formData.checkOut}%0A*Guests:* ${formData.adults} Adults, ${formData.children} Children`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    onClose();
  };

  const inputStyle = { width: "100%", padding: "12px 14px", border: "1px solid #E0D8C8", borderRadius: 6, fontSize: 14, fontFamily: "Lato, sans-serif", outline: "none", boxSizing: "border-box", background: "#FFF" };
  const labelStyle = { display: "block", fontSize: 12, fontWeight: 700, color: "#555", marginBottom: 6, fontFamily: "Lato, sans-serif" };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.65)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ background: "#F9F6F0", width: "100%", maxWidth: 900, borderRadius: 12, overflow: "hidden", display: "flex", position: "relative", maxHeight: "95vh" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "#fff", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontWeight: "bold", zIndex: 10, boxShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>✕</button>
        <div style={{ flex: "1 1 500px", padding: "40px 32px", overflowY: "auto" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 32, color: "#1C1209", margin: "0 0 24px" }}>Booking Request</h2>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div><label style={labelStyle}>First Name *</label><input required style={inputStyle} name="firstName" onChange={handleChange} /></div>
              <div><label style={labelStyle}>Last Name *</label><input required style={inputStyle} name="lastName" onChange={handleChange} /></div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div><label style={labelStyle}>Email *</label><input required type="email" style={inputStyle} name="email" onChange={handleChange} /></div>
              <div><label style={labelStyle}>Contact Number *</label><input required style={inputStyle} name="phone" onChange={handleChange} /></div>
            </div>
            <div>
              <label style={labelStyle}>WhatsApp Number *</label>
              <input required style={inputStyle} name="whatsapp" placeholder="with country code" onChange={handleChange} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div><label style={labelStyle}>Check in Date *</label><input required type="date" style={inputStyle} name="checkIn" onChange={handleChange} /></div>
              <div><label style={labelStyle}>Check out Date *</label><input required type="date" style={inputStyle} name="checkOut" onChange={handleChange} /></div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div><label style={labelStyle}>Adults *</label><input required type="number" min="1" style={inputStyle} name="adults" defaultValue="1" onChange={handleChange} /></div>
              <div><label style={labelStyle}>Children *</label><input required type="number" min="0" style={inputStyle} name="children" defaultValue="0" onChange={handleChange} /></div>
            </div>
            <button type="submit" style={{ width: "100%", padding: "15px", background: "#C49B66", color: "#fff", border: "none", borderRadius: 6, fontWeight: "bold", fontSize: 16, marginTop: 10, cursor: "pointer" }}>
              Request Now
            </button>
          </form>
        </div>
        <div className="modal-img-col" style={{ flex: "1 1 400px", display: "block" }}>
          <img src={room.heroImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .modal-img-col { display: none !important; } }`}</style>
    </div>
  );
}

// ── Reusable Info Box Component ───────────────────────────────
function InfoBox({ title, items, children }) {
  return (
    <div style={{ border: "1px solid #1C1209", borderRadius: 4, padding: "24px", marginBottom: "20px", background: "#FFFFFF" }}>
      <h3 style={{ fontFamily: "Lato, sans-serif", fontSize: 17, color: "#1C1209", letterSpacing: 1, textTransform: "uppercase", margin: "0 0 16px", fontWeight: 400, borderBottom: "1px solid #E5E5E5", paddingBottom: 12, textAlign: title === "PRICE" || title === "AMENITIES" || title.includes("US") ? "center" : "left" }}>
        {title}
      </h3>
      {items && items.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
          <span style={{ color: "#C4922A", fontSize: 14 }}>➔</span>
          <span style={{ fontFamily: "Lato, sans-serif", fontSize: 14, color: "#333", lineHeight: 1.5 }}>{item}</span>
        </div>
      ))}
      {children}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function RoomDetailPage({ roomId, setPage }) {
  const room = ROOMS.find(r => r.id === roomId) || ROOMS[0];
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [roomId]);

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh", paddingTop: 80 }}>
      
      {/* Hero image */}
      <div style={{ position: "relative", height: "45vh", minHeight: 300 }}>
        <img src={room.heroImg} alt={room.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)" }} />
        <div style={{ position: "absolute", bottom: 40, left: 0, right: 0, padding: "0 48px", textAlign: "center" }}>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(34px, 5vw, 56px)", color: "#FFFFFF", margin: 0, fontWeight: 300 }}>
            {room.name}
          </h1>
        </div>
      </div>

      {/* Main Content Split Layout */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "50px 32px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 40, alignItems: "start" }}>

        {/* Left Column */}
        <div>
          <AnimBlock>
            <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "#333", lineHeight: 1.8, marginBottom: 40 }}>
              {room.longDesc}
            </p>
          </AnimBlock>

          <AnimBlock delay={0.1}>
            <InfoBox title="MEASUREMENTS:" items={room.measurements} />
            <InfoBox title="FACILITIES:" items={room.facilities} />
            <InfoBox title="EXTRA:" items={room.extra} />
          </AnimBlock>
        </div>

        {/* Right Column */}
        <div style={{ position: "sticky", top: 100 }}>
          <AnimBlock delay={0.2}>
            
            <InfoBox title="PRICE">
              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "Lato, sans-serif", fontSize: 13, color: "#333", margin: "0 0 16px", fontWeight: 700 }}>
                  <span style={{ color: "#C4922A", marginRight: 8 }}>➔</span> {room.price} / Per Night
                </p>
                <button
                  onClick={() => setIsFormModalOpen(true)}
                  style={{
                    width: "100%", padding: "12px", background: "#984A1C", color: "#fff", border: "none", borderRadius: 4, 
                    fontWeight: 600, fontSize: 14, fontFamily: "Lato, sans-serif", cursor: "pointer"
                  }}
                >
                  Book This {room.category}
                </button>
              </div>
            </InfoBox>

            <InfoBox title="AMENITIES" items={room.amenities} />

            <InfoBox title="CALL US AT">
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 14, color: "#333", margin: 0, textAlign: "center" }}>
                <span style={{ color: "#C4922A", marginRight: 8 }}>📞</span> +92 355 4222280
              </p>
            </InfoBox>

            <InfoBox title="EMAIL US AT">
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 14, color: "#333", margin: 0, textAlign: "center" }}>
                <span style={{ color: "#C4922A", marginRight: 8 }}>✉️</span> info@sukoonresorts.com
              </p>
            </InfoBox>

          </AnimBlock>
        </div>
      </div>

      {/* Photo Gallery Grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto 80px", padding: "0 32px" }}>
        <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 28, color: "#1C1209", margin: "0 0 20px" }}>Room Gallery</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
          {room.gallery.map((src, i) => (
            <img key={i} src={src} alt={`Gallery ${i}`} style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 4 }} />
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {isFormModalOpen && <BookingModal room={room} onClose={() => setIsFormModalOpen(false)} />}

      <Footer setPage={setPage} />

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 860px) {
          div[style*="grid-template-columns: 2fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="position: sticky"] {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}