import { useState, useEffect } from "react";
import { IMGS } from "../assets/images.js";
import { HOTEL_NAME, WHATSAPP_NUMBER, buildBookingMessage } from "../config.js";

const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.413A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="#FFFFFF"/>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25D366"/>
  </svg>
);

export default function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (p) => { setPage(p); setMenuOpen(false); window.scrollTo(0, 0); };

  const navLinks = [
    { label: "Home",       key: "home" },
    { label: "Rooms",      key: "rooms" },
    { label: "Gallery",    key: "gallery" },
    { label: "Amenities",  key: "amenities" },
    { label: "About",      key: "about" },
    { label: "Contact",    key: "contact" },
  ];

  const openWhatsApp = () => {
    const msg = buildBookingMessage(null, null, null, null);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const isSolid = scrolled || page !== "home";

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: isSolid ? "rgba(255, 255, 255, 0.98)" : "transparent",
        backdropFilter: isSolid ? "blur(14px)" : "none",
        borderBottom: isSolid ? "1px solid #E5E5E5" : "none",
        padding: isSolid ? "10px 32px" : "18px 32px",
        boxShadow: isSolid ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all 0.4s ease",
      }}>
        {/* Logo */}
        <div onClick={() => navigate("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src={IMGS.logo}
            alt="Sukoon Resorts"
            style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", border: "2px solid #C4922A" }}
          />
          <span style={{
            fontFamily: "Cormorant Garamond, serif", fontSize: 20, fontWeight: 700,
            color: isSolid ? "#1C1209" : "#F5EFE6", letterSpacing: 1,
            transition: "color 0.4s",
          }}>
            {HOTEL_NAME.toUpperCase()}
          </span>
        </div>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 26, alignItems: "center" }} className="desktop-nav-links">
          {navLinks.map(({ label, key }) => (
            <span
              key={key}
              onClick={() => navigate(key)}
              style={{
                cursor: "pointer", fontFamily: "Lato, sans-serif", fontSize: 13, letterSpacing: 1,
                color: page === key ? "#C4922A" : (isSolid ? "#1C1209" : "#F5EFE6"),
                borderBottom: page === key ? "1px solid #C4922A" : "1px solid transparent",
                paddingBottom: 2, fontWeight: page === key ? 700 : 400,
                transition: "color 0.3s, border-color 0.3s",
              }}
            >
              {label}
            </span>
          ))}
          <button onClick={openWhatsApp} className="btn-gold" style={{ padding: "8px 20px", fontSize: 12 }}>
            BOOK NOW
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          style={{
            display: "none", background: "none", border: "none",
            color: isSolid ? "#1C1209" : "#F5EFE6", fontSize: 28, lineHeight: 1,
          }}
          className="hamburger-btn"
        >
          ☰
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(255, 255, 255, 0.98)",
          zIndex: 200, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 28,
        }}>
          <button
            onClick={() => setMenuOpen(false)}
            style={{ position: "absolute", top: 22, right: 26, background: "none", border: "none", fontSize: 32, color: "#1C1209" }}
          >
            ✕
          </button>
          <img src={IMGS.logo} alt="logo" style={{ width: 60, height: 60, borderRadius: "50%", objectFit: "cover", border: "2px solid #C4922A", marginBottom: 8 }} />
          {navLinks.map(({ label, key }) => (
            <span
              key={key}
              onClick={() => navigate(key)}
              style={{
                fontFamily: "Cormorant Garamond, serif", fontSize: 34, cursor: "pointer",
                color: page === key ? "#C4922A" : "#1C1209", fontWeight: 600,
              }}
            >
              {label}
            </span>
          ))}
          <button
            onClick={() => { openWhatsApp(); setMenuOpen(false); }}
            className="btn-whatsapp"
            style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 10 }}
          >
            <WhatsAppIcon size={20} />
            BOOK NOW
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav-links { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}