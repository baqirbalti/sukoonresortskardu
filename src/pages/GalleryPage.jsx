// pages/GalleryPage.jsx — Full gallery with category filters + lightbox
import { useState } from "react";
import AnimBlock from "../components/AnimBlock.jsx";
import Footer from "../components/Footer.jsx";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "../data/rooms.js";

// ── Lightbox ──────────────────────────────────────────────────
function Lightbox({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const img = images[idx];

  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(18,10,4,0.97)", zIndex: 500, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
    >
      <button onClick={onClose} style={{ position: "absolute", top: 20, right: 28, background: "none", border: "none", color: "#F5EFE6", fontSize: 36, cursor: "pointer", zIndex: 10 }}>✕</button>

      {/* Prev */}
      <button onClick={e => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length); }}
        style={{ position: "absolute", left: 16, background: "none", border: "none", color: "#C4922A", fontSize: 52, cursor: "pointer", zIndex: 10, lineHeight: 1 }}>‹</button>

      <img
        src={img.src}
        alt={img.alt}
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: "88vw", maxHeight: "82vh", objectFit: "contain", boxShadow: "0 0 80px rgba(0,0,0,0.9)" }}
      />

      {/* Caption */}
      <div style={{ marginTop: 16, textAlign: "center" }} onClick={e => e.stopPropagation()}>
        <p style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontSize: 18, color: "#EDE0CE", margin: "0 0 4px" }}>{img.caption}</p>
        <p style={{ fontFamily: "Lato, sans-serif", fontSize: 11, letterSpacing: 2, color: "#C4922A", margin: 0 }}>{idx + 1} / {images.length}</p>
      </div>

      {/* Next */}
      <button onClick={e => { e.stopPropagation(); setIdx(i => (i + 1) % images.length); }}
        style={{ position: "absolute", right: 16, background: "none", border: "none", color: "#C4922A", fontSize: 52, cursor: "pointer", zIndex: 10, lineHeight: 1 }}>›</button>

      {/* Dots */}
      <div style={{ position: "absolute", bottom: 20, display: "flex", gap: 7, flexWrap: "wrap", justifyContent: "center", maxWidth: "80vw" }}>
        {images.map((_, i) => (
          <button key={i} onClick={e => { e.stopPropagation(); setIdx(i); }}
            style={{ width: i === idx ? 22 : 7, height: 7, borderRadius: 4, background: i === idx ? "#C4922A" : "rgba(245,239,230,0.3)", border: "none", cursor: "pointer", transition: "all 0.3s" }} />
        ))}
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function GalleryPage({ setPage }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const filtered = activeCategory === "all"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <div style={{ background: "#F5EFE6", minHeight: "100vh", paddingTop: 80 }}>

      {/* Page header */}
      <div style={{ background: "#2C1F14", padding: "70px 32px", textAlign: "center" }}>
        <AnimBlock>
          <p className="section-label" style={{ textAlign: "center" }}>VISUAL STORIES</p>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(32px, 6vw, 68px)", color: "#F5EFE6", fontWeight: 300, letterSpacing: 3 }}>
            Gallery
          </h1>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: 14, color: "#8C7B6B", maxWidth: 500, margin: "16px auto 0", lineHeight: 1.8 }}>
            A glimpse into the beauty of Sukoon Resorts — from our heritage architecture and rooms to the majestic Karakoram that surrounds us.
          </p>
        </AnimBlock>
      </div>

      {/* Category filter */}
      <div style={{ padding: "32px 32px 8px", textAlign: "center" }}>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {GALLERY_CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              style={{
                padding: "8px 22px", borderRadius: 2, cursor: "pointer",
                border: "1px solid #C4922A",
                background: activeCategory === id ? "#C4922A" : "transparent",
                color: activeCategory === id ? "#F5EFE6" : "#C4922A",
                fontFamily: "Lato, sans-serif", fontSize: 11, letterSpacing: 2,
                fontWeight: 700, transition: "all 0.3s",
              }}
            >
              {label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry-style grid */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 32px 90px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 16,
        }}>
          {filtered.map((img, i) => (
            <AnimBlock key={img.id} delay={i * 0.04}>
              <div
                onClick={() => setLightboxIdx(i)}
                style={{
                  cursor: "zoom-in", overflow: "hidden", borderRadius: 2,
                  background: "#EDE0CE", position: "relative",
                  border: "1px solid #C8B49A",
                  aspectRatio: i % 5 === 0 ? "3/4" : "4/3",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transition: "transform 0.55s ease" }}
                  onMouseOver={e => e.target.style.transform = "scale(1.07)"}
                  onMouseOut={e => e.target.style.transform = "scale(1)"}
                />
                {/* Hover caption overlay */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "linear-gradient(transparent, rgba(30,18,8,0.75))",
                  padding: "24px 14px 14px",
                  opacity: 0, transition: "opacity 0.3s",
                }}
                  onMouseOver={e => e.currentTarget.style.opacity = 1}
                  onMouseOut={e => e.currentTarget.style.opacity = 0}
                >
                  <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 14, color: "#F5EFE6", margin: 0, fontStyle: "italic" }}>{img.caption}</p>
                </div>
              </div>
            </AnimBlock>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: "center", fontFamily: "Lato, sans-serif", color: "#8C7B6B", padding: "60px 0" }}>
            No photos in this category yet.
          </p>
        )}

        {/* Count */}
        <p style={{ textAlign: "center", fontFamily: "Lato, sans-serif", fontSize: 12, color: "#8C7B6B", marginTop: 32, letterSpacing: 1 }}>
          Showing {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          images={filtered}
          startIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}

      <Footer setPage={setPage} />
    </div>
  );
}
