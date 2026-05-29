// pages/HomePage.jsx
import { useState, useEffect } from "react";
import AnimBlock from "../components/AnimBlock.jsx";
import RoomCard from "../components/RoomCard.jsx";
import Footer from "../components/Footer.jsx";
import { IMGS } from "../assets/images.js";
import { ROOMS } from "../data/rooms.js";
import { WHATSAPP_NUMBER, buildBookingMessage } from "../config.js";

// ── Hero Section ──────────────────────────────────────────────
function HeroSection() {
  const [slide, setSlide] = useState(0);
  const slides = [IMGS.hero02, IMGS.hero03, IMGS.hero01];

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
      {slides.map((src, i) => (
        <div key={i} style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${src})`,
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: i === slide ? 1 : 0,
          transform: i === slide ? "scale(1.04)" : "scale(1)",
          transition: "opacity 1.3s ease, transform 7s ease",
        }} />
      ))}

      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 100%)" }} />

      <div style={{
        position: "absolute", inset: 0, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px",
      }}>
        <h1 style={{
          fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(38px, 6vw, 76px)",
          color: "#FFFFFF", fontWeight: 300, letterSpacing: 1, lineHeight: 1.2,
          margin: "0 0 16px", animation: "fadeUp 1.2s ease 0.3s both",
          textShadow: "0 4px 15px rgba(0,0,0,0.3)"
        }}>
          Discover the True Meaning of <br />
          <span style={{ color: "#D9933D", fontStyle: "italic", fontWeight: 500 }}>Sukoon</span>
        </h1>
        <div style={{ width: 60, height: 2, background: "#D9933D", margin: "16px auto 24px", animation: "expandW 1s ease 0.8s both" }} />
        <p style={{
          fontFamily: "Lato, sans-serif", fontSize: "clamp(13px, 1.5vw, 16px)", color: "#FDFBF7",
          letterSpacing: 4, textTransform: "uppercase", animation: "fadeUp 1s ease 1s both", textShadow: "0 2px 8px rgba(0,0,0,0.4)"
        }}>
          A Heritage Retreat in Skardu Valley
        </p>
      </div>
    </section>
  );
}

// ── Quick Booking Bar ─────────────────────────────────────────
function QuickBookBar() {
  return (
    <div style={{ maxWidth: 1050, margin: "40px auto", position: "relative", zIndex: 10 }}>
      <AnimBlock>
        <div style={{
          background: "#FFFFFF", borderRadius: 12, padding: "24px 32px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.1)", display: "flex", flexWrap: "wrap",
          gap: 20, alignItems: "flex-end", justifyContent: "space-between"
        }}>
          <div style={{ flex: "1 1 200px", display: "flex", flexDirection: "column" }}>
            <label style={{ fontSize: 13, color: "#555", marginBottom: 8, fontWeight: 700, fontFamily: "Lato, sans-serif" }}>Check-in</label>
            <input type="date" style={{ padding: "12px 16px", border: "1px solid #E5E5E5", borderRadius: 8, color: "#333", fontSize: 15, fontFamily: "Lato, sans-serif", outline: "none", width: "100%", boxSizing: "border-box" }} />
          </div>
          <div style={{ flex: "1 1 200px", display: "flex", flexDirection: "column" }}>
            <label style={{ fontSize: 13, color: "#555", marginBottom: 8, fontWeight: 700, fontFamily: "Lato, sans-serif" }}>Check-out</label>
            <input type="date" style={{ padding: "12px 16px", border: "1px solid #E5E5E5", borderRadius: 8, color: "#333", fontSize: 15, fontFamily: "Lato, sans-serif", outline: "none", width: "100%", boxSizing: "border-box" }} />
          </div>
          <div style={{ flex: "1 1 200px", display: "flex", flexDirection: "column" }}>
            <label style={{ fontSize: 13, color: "#555", marginBottom: 8, fontWeight: 700, fontFamily: "Lato, sans-serif" }}>Guests</label>
            <select style={{ padding: "12px 16px", border: "1px solid #E5E5E5", borderRadius: 8, color: "#333", fontSize: 15, fontFamily: "Lato, sans-serif", outline: "none", width: "100%", boxSizing: "border-box", background: "#fff", cursor: "pointer" }}>
              <option>1 Guest</option>
              <option selected>2 Guests</option>
              <option>3 Guests</option>
              <option>4+ Guests</option>
            </select>
          </div>
          <div style={{ flex: "1 1 200px" }}>
            <button
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildBookingMessage())}`, "_blank")}
              style={{ width: "100%", padding: "13px 24px", background: "#984A1C", color: "#fff", border: "none", borderRadius: 8, fontWeight: 600, fontSize: 15, fontFamily: "Lato, sans-serif", cursor: "pointer", transition: "background 0.3s", height: 47 }}
              onMouseOver={e => e.currentTarget.style.background = "#7A3B16"}
              onMouseOut={e => e.currentTarget.style.background = "#984A1C"}
            >
              Check Availability
            </button>
          </div>
        </div>
      </AnimBlock>
    </div>
  );
}

// ── Welcome Block ─────────────────────────────────────────────
function WelcomeSection() {
  return (
    <section style={{ background: "#FFFFFF", padding: "80px 32px 60px" }}>
      <div style={{ maxWidth: 1050, margin: "0 auto" }}>
        <AnimBlock>
          <div style={{ textAlign: "center", maxWidth: 850, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(34px, 5vw, 54px)", color: "#1C1209", margin: "0 0 10px", fontWeight: "bold" }}>
              Welcome to Sukoon Resort
            </h2>
            <h3 style={{ fontFamily: "Lato, sans-serif", fontSize: "clamp(16px, 2.5vw, 20px)", color: "#984A1C", margin: "0 0 24px", fontWeight: "bold" }}>
              Experience the Serenity of the North
            </h3>
            <div className="gold-divider" style={{ margin: "0 auto 24px" }} />
            <p style={{ fontFamily: "Lato, sans-serif", fontSize: 16, color: "#555", lineHeight: 1.8, marginBottom: 20 }}>
              Welcome our guests to Sukoon Resort located in the heart of Skardu. Nestled amidst the majestic Karakoram peaks, our retreat offers a perfect blend of traditional Baltistani heritage and modern comfort. Let nature be your sanctuary.
            </p>
          </div>
        </AnimBlock>
        <QuickBookBar />
        <AnimBlock delay={0.2}>
          <div style={{ overflow: "hidden", borderRadius: 12, boxShadow: "0 12px 40px rgba(0,0,0,0.15)", marginTop: 20 }}>
            <img src={IMGS.hero02} alt="Welcome to Sukoon Resorts" style={{ width: "100%", height: 450, objectFit: "cover", objectPosition: "center", display: "block" }} />
          </div>
        </AnimBlock>
      </div>
    </section>
  );
}

// ── Featured Rooms ────────────────────────────────────────────
function FeaturedRooms({ setPage, setRoomId }) {
  const animationDirs = ["slideInLeft", "fadeUp", "slideInRight"];
  return (
    <section style={{ background: "#F9F6F0", padding: "90px 32px" }}>
      <AnimBlock>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="section-label">ACCOMMODATIONS</p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(28px, 4vw, 50px)", color: "#1C1209", fontWeight: 400 }}>
            Featured Rooms & Villas
          </h2>
        </div>
      </AnimBlock>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, overflow: "hidden" }}>
        {ROOMS.slice(0, 3).map((room, i) => (
          <div key={room.id} style={{ animation: `${animationDirs[i]} 0.8s ease ${i * 0.2}s both` }}>
            <RoomCard room={room} setPage={setPage} setRoomId={setRoomId} delay={0} />
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <button onClick={() => { setPage("rooms"); window.scrollTo(0, 0); }} className="btn-outline">
          VIEW ALL ROOMS
        </button>
      </div>
    </section>
  );
}

// ── Dining / Experience Highlight ─────────────────────────────
function DiningHighlight() {
  return (
    <section style={{ background: "#FFFFFF", padding: "90px 32px", borderBottom: "1px solid #F0EBE1" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        <AnimBlock from="left">
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 12, letterSpacing: 2, color: "#8C7B6B", textTransform: "uppercase", marginBottom: 10 }}>What Awaits You</p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(28px, 4vw, 42px)", color: "#1C1209", margin: "0 0 24px", lineHeight: 1.2 }}>
            Heritage Culinary Experience at Sukoon
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{ color: "#984A1C", fontSize: 18 }}>✦</span>
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "#555", margin: 0, lineHeight: 1.6 }}>A beautifully crafted dining space with panoramic views of the Karakoram peaks.</p>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{ color: "#984A1C", fontSize: 18 }}>✦</span>
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "#555", margin: 0, lineHeight: 1.6 }}>Floor-to-ceiling windows enhancing your dining experience with natural mountain light.</p>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{ color: "#984A1C", fontSize: 18 }}>✦</span>
              <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "#555", margin: 0, lineHeight: 1.6 }}>Perfect for intimate meals and larger gatherings, offering traditional Balti cuisine.</p>
            </div>
          </div>
        </AnimBlock>
        <AnimBlock from="right">
          <img src={IMGS.gallery02} alt="Heritage Restaurant" style={{ width: "100%", borderRadius: 8, boxShadow: "0 10px 30px rgba(0,0,0,0.08)", objectFit: "cover", aspectRatio: "4/3" }} />
        </AnimBlock>
      </div>
    </section>
  );
}

// ── All-Inclusive Amenities ───────────────────────────────────
function AmenitiesStrip() {
  const items = [
    ["📡", "COMPLIMENTARY WI-FI"], ["🚗", "FREE PARKING"], ["🍽️", "ON-SITE RESTAURANT"],
    ["🛎️", "ROOM SERVICE"], ["🏔️", "GUIDED TOURS"], ["🔥", "BONFIRE NIGHTS"],
  ];
  return (
    <section style={{ background: "#F9F6F0", padding: "90px 32px" }}>
      <AnimBlock>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 12, letterSpacing: 2, color: "#8C7B6B", textTransform: "uppercase", marginBottom: 8 }}>Resort Facilities</p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(28px, 4vw, 42px)", color: "#1C1209", fontWeight: 400, margin: 0 }}>
            All-Inclusive Amenities at Sukoon
          </h2>
        </div>
      </AnimBlock>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
        {items.map(([icon, title], i) => (
          <AnimBlock key={title} delay={i * 0.05}>
            <div style={{ background: "#FFFFFF", border: "1px solid #EAE1D5", borderRadius: 6, padding: "32px 16px", textAlign: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
              <div style={{ fontSize: 32, marginBottom: 12, color: "#984A1C" }}>{icon}</div>
              <h4 style={{ fontFamily: "Lato, sans-serif", fontSize: 12, letterSpacing: 1, color: "#1C1209", margin: 0, fontWeight: 700 }}>{title}</h4>
            </div>
          </AnimBlock>
        ))}
      </div>
    </section>
  );
}

// ── Booking.com Style Multi-Card Carousel Grid Layout ──────────────────
function BookingReviews() {
  const [startIndex, setStartIndex] = useState(0);

  const reviews = [
    {
      name: "Hamid",
      country: "Pakistan",
      flag: "🇵🇰",
      date: "11 months ago",
      score: "10",
      title: "Exceptional",
      positive: "The place, ambience, food, staff and their services everything was outstanding.",
      avatarImg: IMGS.revHamid,
      avatarColor: null
    },
    {
      name: "Khan",
      country: "Pakistan",
      flag: "🇵🇰",
      date: "11 months ago",
      score: "9.5",
      title: "Superb",
      positive: "Superb hospitality! Clean rooms, beautiful mountain view, and exceptionally cooperative staff.",
      avatarImg: null,
      avatarColor: "#E28743",
      initial: "K"
    },
    {
      name: "Asfand",
      country: "Pakistan",
      flag: "🇵🇰",
      date: "11 months ago",
      score: "10",
      title: "Exceptional",
      positive: "Best location with beautiful views, staff behaviour very good 👍. Highly recommended for family stays!",
      avatarImg: null,
      avatarColor: "#33b5e5",
      initial: "A"
    },
    {
      name: "Marziajasni",
      country: "Malaysia",
      flag: "🇲🇾",
      date: "11 months ago",
      score: "10",
      title: "A stay in heaven 🤍",
      positive: "The owner & staff at Sukoon Resort were fantastic! They made check-in easy, and my room had a beautiful snow-peaked mountain view.",
      avatarImg: IMGS.revMarzia,
      avatarColor: null
    },
    {
      name: "Ahmad",
      country: "Pakistan",
      flag: "🇵🇰",
      date: "11 months ago",
      score: "9.5",
      title: "Exceptional",
      positive: "Our overall experience at the resort was amazing. View from our room was spectacular, staff was cooperative. The resort owner was really friendly.",
      avatarImg: IMGS.revAhmad,
      avatarColor: null
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(slideInterval);
  }, [startIndex]);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1 >= reviews.length ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const getDisplaySet = () => {
    let out = [];
    for (let i = 0; i < 3; i++) {
      out.push(reviews[(startIndex + i) % reviews.length]);
    }
    return out;
  };

  const bookingUrl = "https://www.booking.com/hotel/pk/sukoon-resorts-skardu1.en-gb.html?aid=2276380&label=msn-6A_rx8dAdsR1ypVjcy_CrQ-79989662746717%3Atikwd-79989881430661%3Aloc-144%3Aneo%3Amte%3Alp152852%3Adec%3Acid578349423%3Aagid1279832861536322&sid=a0ad6488aa7f1989b3d59d5afb9fa458&all_sr_blocks=1223297906_400507833_2_2_0&checkin=2026-06-14&checkout=2026-06-15&dest_id=-2774916&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1223297906_400507833_2_2_0&hpos=1&matching_block_id=1223297906_400507833_2_2_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1223297906_400507833_2_2_0__1267200&srepoch=1779955111&srpvid=11f738110c040085&type=total&ucfs=1&#tab-reviews";

  return (
    <section style={{ background: "#F9F6F0", padding: "80px 32px", borderTop: "1px solid #F0EBE1" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
        
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={IMGS.hero02} alt="Resort Thumbnail" style={{ width: "90px", height: "60px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
            <div>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "28px", fontWeight: "bold", color: "#1C1209", margin: "0 0 4px" }}>Sukoon Resorts</h3>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ display: "flex", gap: "2px", color: "#003b95", fontSize: "13px" }}>
                  {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
                </div>
                <p style={{ fontFamily: "Lato, sans-serif", fontSize: "14px", color: "#666", margin: 0 }}>Real Booking guest reviews</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => window.open(bookingUrl, "_blank")}
            style={{
              background: "#FFFFFF", border: "1px solid #1C1209", borderRadius: "30px", padding: "10px 28px",
              fontFamily: "Lato, sans-serif", fontSize: "14px", fontWeight: "bold", color: "#1C1209", cursor: "pointer",
              transition: "all 0.2s ease-in-out", boxShadow: "0 2px 6px rgba(0,0,0,0.02)"
            }}
            onMouseOver={e => { e.currentTarget.style.background = "#1C1209"; e.currentTarget.style.color = "#FFFFFF"; }}
            onMouseOut={e => { e.currentTarget.style.background = "#FFFFFF"; e.currentTarget.style.color = "#1C1209"; }}
          >
            Write a review
          </button>
        </div>

        <div style={{ position: "relative", display: "flex", alignItems: "center", padding: "0 10px" }}>
          
          <button onClick={handlePrev} style={{
            position: "absolute", left: "-15px", zIndex: 12, width: "44px", height: "44px", borderRadius: "50%",
            background: "#FFFFFF", border: "1px solid #EAE1D5", cursor: "pointer", fontSize: "22px", color: "#1C1209",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "transform 0.2s"
          }} onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"} onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}>‹</button>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", width: "100%" }}>
            {getDisplaySet().map((rev, idx) => (
              <div key={idx} style={{
                background: "#FFFFFF", border: "1px solid #EAE1D5", borderRadius: "24px", padding: "28px",
                display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "270px",
                boxShadow: "0 6px 20px rgba(28,18,9,0.02)", position: "relative"
              }}>
                
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                    {rev.avatarImg ? (
                      <img src={rev.avatarImg} alt={rev.name} style={{ width: "46px", height: "46px", borderRadius: "50%", objectFit: "cover" }} />
                    ) : (
                      <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: rev.avatarColor, color: "#FFFFFF", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "16px", fontFamily: "Lato, sans-serif" }}>
                        {rev.initial}
                      </div>
                    )}
                    <div>
                      <h4 style={{ margin: 0, fontFamily: "Lato, sans-serif", fontSize: "15px", fontWeight: "bold", color: "#1C1209" }}>{rev.name}</h4>
                      <p style={{ margin: "2px 0 0", fontFamily: "Lato, sans-serif", fontSize: "12px", color: "#777" }}>
                        {rev.flag} {rev.country} • <span style={{ color: "#999" }}>{rev.date}</span>
                      </p>
                    </div>
                  </div>
                  <div style={{ background: "#003b95", color: "#FFFFFF", fontWeight: "bold", padding: "3px 7px", borderRadius: "5px", fontSize: "12px", fontFamily: "Lato, sans-serif" }}>B.</div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "16px 0 10px" }}>
                  <div style={{ display: "flex", gap: "1px", color: "#003b95", fontSize: "11px" }}>
                    {[1, 2, 3, 4, 5].map((item) => <span key={item}>★</span>)}
                  </div>
                  <span style={{ color: "#33b5e5", fontSize: "11px", fontWeight: "bold" }}>✔ Verified</span>
                </div>

                <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                  <p style={{ fontFamily: "Lato, sans-serif", fontSize: "14px", color: "#444", lineHeight: "1.6", margin: 0, display: "-webkit-box", WebkitLineClamp: "4", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    "{rev.positive}"
                  </p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", borderTop: "1px solid #F8F5F0", paddingTop: "14px" }}>
                  <span style={{ fontFamily: "Lato, sans-serif", fontSize: "13px", color: "#984A1C", fontWeight: "bold", cursor: "pointer" }} onClick={() => window.open(bookingUrl, "_blank")}>Read original</span>
                  <span style={{ fontSize: "36px", color: "#F0EBE1", fontFamily: "Cormorant Garamond, serif", lineHeight: "0", height: "10px", transform: "translateY(10px)" }}>“</span>
                </div>

              </div>
            ))}
          </div>

          <button onClick={handleNext} style={{
            position: "absolute", right: "-15px", zIndex: 12, width: "44px", height: "44px", borderRadius: "50%",
            background: "#FFFFFF", border: "1px solid #EAE1D5", cursor: "pointer", fontSize: "22px", color: "#1C1209",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "transform 0.2s"
          }} onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"} onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}>›</button>

        </div>
      </div>
    </section>
  );
}

// ── 📍 Sahi Google Maps Location Section ─────────────────────────────
function LocationSection() {
  // Plus Code (7HQC+64H Skardu) ki actual embedded map URL
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1314.9360563402633!2d75.5703594!3d35.2880625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE3JzE3LjAiTiA3NcKwMzQndzEzLjMnRQ!5e0!3m2!1sen!2spk!4v1716900000000!5m2!1sen!2spk";
  
  // Direct open karne ke liye accurate map redirection link
  const directMapUrl = "https://maps.google.com/?q=35.2880625,75.5703594";

  return (
    <section style={{ background: "#FFFFFF", padding: "80px 32px", borderTop: "1px solid #F0EBE1" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: "32px" }}>
        
        {/* Section Headings */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: "12px", letterSpacing: "2px", color: "#8C7B6B", textTransform: "uppercase", marginBottom: "8px" }}>Explore Skardu</p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(28px, 4vw, 42px)", color: "#1C1209", fontWeight: 400, margin: 0 }}>
            Our Location
          </h2>
          <div style={{ width: "40px", height: "2px", background: "#984A1C", margin: "12px auto 0" }} />
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: "14px", color: "#555", marginTop: "16px", marginBottom: "20px" }}>
            📍 Plus Code: <strong>7HQC+64H Skardu, Gilgit-Baltistan, Pakistan</strong>
          </p>
          
          {/* Direct Visit Button jo accurate native map open karega */}
          <button 
            onClick={() => window.open(directMapUrl, "_blank")}
            style={{
              background: "#984A1C", color: "#FFFFFF", border: "none", borderRadius: "30px", 
              padding: "12px 28px", fontFamily: "Lato, sans-serif", fontSize: "14px", 
              fontWeight: "bold", cursor: "pointer", transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(152,74,28,0.2)"
            }}
            onMouseOver={e => e.currentTarget.style.background = "#7A3B16"}
            onMouseOut={e => e.currentTarget.style.background = "#984A1C"}
          >
            🗺️ Open in Google Maps
          </button>
        </div>

        {/* Embedded Interactive Map Container */}
        <AnimBlock>
          <div style={{ overflow: "hidden", borderRadius: "20px", boxShadow: "0 8px 30px rgba(0,0,0,0.06)", border: "1px solid #EAE1D5", height: "450px", width: "100%" }}>
            <iframe 
              title="Sukoon Resorts Accurate Location"
              src={mapEmbedUrl}
              style={{ width: "100%", height: "100%", border: 0 }}
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimBlock>

      </div>
    </section>
  );
}

// ── WhatsApp CTA Banner ───────────────────────────────────────
function CTABanner() {
  return (
    <section style={{ background: "#f9f6f0", padding: "80px 32px", textAlign: "center", borderTop: "1px solid #EAE1D5" }}>
      <AnimBlock>
        <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(28px, 4vw, 42px)", color: "#1C1209", fontWeight: 400, margin: "0 0 16px" }}>
          Ready to Reserve Your Stay?
        </h2>
        <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: "#555", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.8 }}>
          Let the Karakoram welcome you. Reach us directly on WhatsApp for instant booking and personalised assistance.
        </p>
        <button
          onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildBookingMessage())}`, "_blank")}
          style={{
            background: "#25D366", color: "#FFFFFF", border: "none", padding: "14px 28px",
            borderRadius: "50px", fontFamily: "Lato, sans-serif", fontSize: 15, fontWeight: "bold",
            cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10,
            boxShadow: "0 6px 20px rgba(37, 211, 102, 0.3)", transition: "transform 0.3s"
          }}
          onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
        >
          <span>📱</span> Book via WhatsApp
        </button>
      </AnimBlock>
    </section>
  );
}

// ── Main Export ───────────────────────────────────────────────
export default function HomePage({ setPage, setRoomId }) {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <FeaturedRooms setPage={setPage} setRoomId={setRoomId} />
      <DiningHighlight />
      <AmenitiesStrip />
      
      {/* Real Booking.com Reviews Component */}
      <BookingReviews />

      {/* 🗺️ Sahi Embedded Location Section Inserted Directly Below Reviews */}
      <LocationSection />
      
      <CTABanner />
      <Footer setPage={setPage} />
    </div>
  );
}