// components/MultiRoomBookingModal.jsx — the ONE booking route for the whole
// site. Opened bare (all quantities 0) from the Navbar "BOOK NOW" button, or
// opened with a room pre-selected via `initialQuantities` from a Room Detail
// page's "Book This Room" button — either way the guest can still add more
// rooms/categories before submitting a single combined request.
//
// Rooms that have both a Non-AC and an AC price (see `priceAC`/`priceACNum`
// in data/rooms.js) are shown as TWO separate rows — one per rate — each
// with its own quantity counter. That way a guest can book, say, 1 Non-AC
// unit AND 1 With-AC unit of the same room in one request, instead of a
// single toggle forcing the whole quantity onto one rate.
import { useState, useMemo } from "react";
import { getRoomVariants } from "../data/rooms.js";
import { submitBookingToSheet, todayStr } from "../config.js";

const qtyBtnStyle = {
  width: 28, height: 28, borderRadius: "50%", border: "1px solid #C8B49A",
  background: "#FFFFFF", color: "#984A1C", fontSize: 16, fontWeight: 700,
  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
  lineHeight: 1, flexShrink: 0,
};

const inputStyle = {
  width: "100%", padding: "12px 14px", border: "1px solid #E0D8C8", borderRadius: 6,
  fontSize: 14, fontFamily: "Lato, sans-serif", outline: "none", boxSizing: "border-box", background: "#FFF",
};
const labelStyle = { display: "block", fontSize: 12, fontWeight: 700, color: "#555", marginBottom: 6, fontFamily: "Lato, sans-serif" };

const formatPKR = (n) => `PKR ${Math.round(n).toLocaleString("en-PK")}`;

export default function MultiRoomBookingModal({ onClose, onSuccess, initialQuantities = {} }) {
  // Each ROOM can expand into 1 or 2 bookable rows (variants) — quantities
  // are tracked per variant key, e.g. "deluxe luxary suite::AC", so the
  // Non-AC and With-AC rows of the same room never share a counter.
  const variants = useMemo(() => getRoomVariants(), []);
  const [quantities, setQuantities] = useState(initialQuantities);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", whatsapp: "", checkIn: "", checkOut: "", adults: "1", children: "0",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const changeQty = (key, delta) => {
    setQuantities(q => {
      const next = Math.max(0, (q[key] || 0) + delta);
      return { ...q, [key]: next };
    });
    setError("");
  };

  const label = (v) => v.variantLabel ? `${v.room.name} (${v.variantLabel})` : v.room.name;

  const selectedVariants = useMemo(
    () => variants.filter(v => (quantities[v.key] || 0) > 0),
    [variants, quantities]
  );
  const totalRooms = selectedVariants.reduce((sum, v) => sum + (quantities[v.key] || 0), 0);

  // Nightly total = sum of (rate × quantity) across every selected row
  const nightlyTotal = selectedVariants.reduce(
    (sum, v) => sum + (v.price || 0) * (quantities[v.key] || 0),
    0
  );

  const nights = formData.checkIn && formData.checkOut
    ? Math.max(0, Math.ceil((new Date(formData.checkOut) - new Date(formData.checkIn)) / 86400000))
    : 0;

  const estimatedTotal = nights > 0 ? nightlyTotal * nights : nightlyTotal;

  const minCheckOut = formData.checkIn
    ? new Date(new Date(formData.checkIn).getTime() + 86400000).toISOString().split("T")[0]
    : todayStr();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitting) return;

    if (selectedVariants.length === 0) {
      setError("Please select at least one room before submitting.");
      return;
    }

    setError("");
    setSubmitting(true);

    const roomSummary = selectedVariants
      .map(v => `${label(v)} x${quantities[v.key]}`)
      .join(", ");

    // Fire-and-forget — see config.js for why we don't await this.
    submitBookingToSheet({
      room: roomSummary,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      whatsapp: formData.whatsapp,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      adults: formData.adults,
      children: formData.children,
      nights: nights || "",
      roomsCount: totalRooms,
      estimatedTotal: estimatedTotal || "",
      submittedAt: new Date().toISOString(),
    });

    setSubmitting(false);
    onSuccess();
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.65)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ background: "#F9F6F0", width: "100%", maxWidth: 620, maxHeight: "92vh", borderRadius: 12, overflowY: "auto", position: "relative", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "#fff", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontWeight: "bold", zIndex: 10, boxShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>✕</button>

        <div style={{ padding: "40px 32px" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 30, color: "#1C1209", margin: "0 0 4px" }}>Book Your Stay</h2>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 13, color: "#8C7B6B", margin: "0 0 24px" }}>
            Choose any mix of rooms — different types, different quantities — then fill your details once.
          </p>

          {/* ── Step 1: Room selection ────────────────────────── */}
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 11, letterSpacing: 2, color: "#984A1C", fontWeight: 700, textTransform: "uppercase", margin: "0 0 10px" }}>
            1. Select Rooms
          </p>
          <div style={{ border: "1px solid #EDE6D8", borderRadius: 8, padding: "4px 16px", marginBottom: 20, background: "#FFFFFF" }}>
            {variants.map(v => (
              <div key={v.key} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: "1px solid #F1ECE1" }}>
                <img
                  src={v.room.heroImg}
                  alt={v.room.name}
                  loading="lazy"
                  style={{ width: 64, aspectRatio: "4/3", objectFit: "cover", borderRadius: 6, flexShrink: 0 }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: "0 0 2px", fontFamily: "Cormorant Garamond, serif", fontSize: 17, color: "#1C1209", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {v.room.name}
                    {v.variantLabel && (
                      <span style={{ fontFamily: "Lato, sans-serif", fontSize: 11, fontWeight: 700, color: "#984A1C", marginLeft: 8, letterSpacing: 0.5 }}>
                        {v.variantLabel.toUpperCase()}
                      </span>
                    )}
                  </p>
                  <p style={{ margin: 0, fontFamily: "Lato, sans-serif", fontSize: 12, color: "#8C7B6B" }}>
                    {v.room.category} · {formatPKR(v.price)} / night
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                  <button type="button" onClick={() => changeQty(v.key, -1)} style={qtyBtnStyle}>−</button>
                  <span style={{ minWidth: 16, textAlign: "center", fontFamily: "Lato, sans-serif", fontWeight: 700, color: "#1C1209" }}>
                    {quantities[v.key] || 0}
                  </span>
                  <button type="button" onClick={() => changeQty(v.key, 1)} style={qtyBtnStyle}>+</button>
                </div>
              </div>
            ))}
          </div>

          {/* Selection summary + live estimated total */}
          {totalRooms > 0 && (
            <div style={{ background: "#FBF3E6", border: "1px solid #E7D9BE", borderRadius: 8, padding: "14px 16px", marginBottom: 24 }}>
              <p style={{ margin: "0 0 8px", fontFamily: "Lato, sans-serif", fontSize: 11, letterSpacing: 1, color: "#984A1C", fontWeight: 700, textTransform: "uppercase" }}>
                Your Selection ({totalRooms} room{totalRooms > 1 ? "s" : ""})
              </p>
              {selectedVariants.map(v => (
                <div key={v.key} style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <p style={{ margin: 0, fontFamily: "Lato, sans-serif", fontSize: 14, color: "#333" }}>
                    {label(v)} <span style={{ color: "#8C7B6B" }}>× {quantities[v.key]}</span>
                  </p>
                  <p style={{ margin: 0, fontFamily: "Lato, sans-serif", fontSize: 14, color: "#555" }}>
                    {formatPKR(v.price * quantities[v.key])}{nights > 0 ? " /night" : ""}
                  </p>
                </div>
              ))}

              <div style={{ borderTop: "1px solid #E7D9BE", marginTop: 10, paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <p style={{ margin: 0, fontFamily: "Lato, sans-serif", fontSize: 13, color: "#1C1209", fontWeight: 700 }}>
                  Estimated Total{nights > 0 ? ` (${nights} night${nights > 1 ? "s" : ""})` : ""}
                </p>
                <p style={{ margin: 0, fontFamily: "Cormorant Garamond, serif", fontSize: 22, color: "#984A1C", fontWeight: 700 }}>
                  {formatPKR(estimatedTotal)}
                </p>
              </div>
              {nights === 0 && (
                <p style={{ margin: "6px 0 0", fontFamily: "Lato, sans-serif", fontSize: 11, color: "#8C7B6B", fontStyle: "italic" }}>
                  Per-night rate shown — select check-in &amp; check-out dates below for your full-stay total.
                </p>
              )}
            </div>
          )}

          {/* ── Step 2: Guest details ────────────────────────── */}
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 11, letterSpacing: 2, color: "#984A1C", fontWeight: 700, textTransform: "uppercase", margin: "0 0 10px" }}>
            2. Your Details
          </p>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
            <div className="mrb-two-col">
              <div><label style={labelStyle}>First Name *</label><input required style={inputStyle} name="firstName" value={formData.firstName} onChange={handleChange} /></div>
              <div><label style={labelStyle}>Last Name *</label><input required style={inputStyle} name="lastName" value={formData.lastName} onChange={handleChange} /></div>
            </div>
            <div className="mrb-two-col">
              <div><label style={labelStyle}>Email *</label><input required type="email" style={inputStyle} name="email" value={formData.email} onChange={handleChange} /></div>
              <div><label style={labelStyle}>Contact Number *</label><input required style={inputStyle} name="phone" value={formData.phone} onChange={handleChange} /></div>
            </div>
            <div>
              <label style={labelStyle}>WhatsApp Number *</label>
              <input required style={inputStyle} name="whatsapp" placeholder="with country code" value={formData.whatsapp} onChange={handleChange} />
            </div>
            <div className="mrb-two-col">
              <div>
                <label style={labelStyle}>Check in Date *</label>
                <input required type="date" min={todayStr()} style={inputStyle} name="checkIn"
                  value={formData.checkIn}
                  onChange={e => setFormData({ ...formData, checkIn: e.target.value, checkOut: "" })} />
              </div>
              <div>
                <label style={labelStyle}>Check out Date *</label>
                <input required type="date" min={minCheckOut} style={inputStyle} name="checkOut" value={formData.checkOut} onChange={handleChange} disabled={!formData.checkIn} />
              </div>
            </div>
            <div className="mrb-two-col">
              <div><label style={labelStyle}>Adults *</label><input required type="number" min="1" style={inputStyle} name="adults" value={formData.adults} onChange={handleChange} /></div>
              <div><label style={labelStyle}>Children *</label><input required type="number" min="0" style={inputStyle} name="children" value={formData.children} onChange={handleChange} /></div>
            </div>

            {error && (
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 13, color: "#C0392B", margin: 0 }}>⚠ {error}</p>
            )}

            <button type="submit" disabled={submitting} style={{ width: "100%", padding: "15px", background: submitting ? "#C9B79A" : "#C49B66", color: "#fff", border: "none", borderRadius: 6, fontWeight: "bold", fontSize: 16, marginTop: 6, cursor: submitting ? "not-allowed" : "pointer" }}>
              {submitting ? "Submitting..." : totalRooms > 0 ? `Request Booking — ${formatPKR(estimatedTotal)}` : "Request Booking"}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .mrb-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 480px) {
          .mrb-two-col { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
