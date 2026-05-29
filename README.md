# 🏔 Sukoon Resorts — Website

A fully frontend-only luxury hotel website for **Sukoon Resorts**, Skardu, Gilgit-Baltistan, Pakistan.

---

## 📁 Project Structure

```
sukoon-resorts/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json              ← SPA routing for Vercel
└── src/
    ├── App.jsx              ← Main router
    ├── main.jsx             ← Vite entry point
    ├── styles.css           ← Global CSS variables & utilities
    ├── config.js            ← ⚙️ EDIT THIS — hotel name, WhatsApp number, etc.
    ├── assets/
    │   └── images.js        ← All images as base64 (no CDN needed)
    ├── data/
    │   └── rooms.js         ← ⚙️ EDIT THIS — room info, prices, gallery images
    ├── components/
    │   ├── AnimBlock.jsx    ← Scroll-triggered animation wrapper
    │   ├── Navbar.jsx       ← Top nav with scroll shrink + hamburger
    │   ├── Footer.jsx       ← Site footer
    │   ├── RoomCard.jsx     ← Reusable room card
    │   ├── BookingWidget.jsx← Date picker + WhatsApp booking
    │   └── WhatsAppFAB.jsx  ← Floating WhatsApp button
    └── pages/
        ├── HomePage.jsx     ← Hero slider, welcome, rooms, amenities, testimonials
        ├── RoomsPage.jsx    ← All rooms with category filter
        ├── RoomDetailPage.jsx ← Individual room + gallery lightbox + booking
        ├── GalleryPage.jsx  ← Full photo gallery with category filter
        ├── AmenitiesPage.jsx← All facilities with alternating layout
        ├── AboutPage.jsx    ← Hotel story and design philosophy
        └── ContactPage.jsx  ← Contact info + enquiry form
```

---

## ⚙️ Setup Instructions

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

---

## 🔧 Customisation

### Update WhatsApp number & hotel info
Edit `src/config.js`:
```js
export const WHATSAPP_NUMBER = "923001234567"; // Your real number (no +)
export const HOTEL_NAME = "Sukoon Resorts";
export const HOTEL_PHONE = "+92 300 123 4567";
export const HOTEL_EMAIL = "info@sukoonresorts.com";
```

### Update room prices, names, descriptions
Edit `src/data/rooms.js` — each room object has:
- `name`, `price`, `category`, `beds`, `size`, `view`, `maxGuests`
- `heroImg` — main card image
- `gallery` — array of 4 images shown in lightbox
- `desc`, `longDesc`, `amenities`, `highlights`

### Add photos to gallery
In `src/data/rooms.js`, add to `GALLERY_IMAGES`:
```js
{ id: 19, src: IMGS.yourNewImage, category: "events", caption: "Your caption", alt: "Alt text" }
```
And add the new image to `src/assets/images.js`.

---

## 🚀 Deploy to Vercel

1. Push project to GitHub
2. Connect repo on [vercel.com](https://vercel.com)
3. Settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Node version:** 18
4. The `vercel.json` handles SPA routing automatically

---

## 📱 WhatsApp Booking Flow

When a guest selects dates + guests and clicks "Book on WhatsApp", they get sent a pre-filled polite message like:

```
Assalamu Alaikum! 🌿

I would like to make a reservation at Sukoon Resorts.

🏨 Room: Executive Suite
📅 Check-in: Monday, 15 July 2025
📅 Check-out: Thursday, 18 July 2025
🌙 Nights: 3
👥 Guests: 2

Could you please confirm availability and share the booking details?

Thank you! 🙏
```
