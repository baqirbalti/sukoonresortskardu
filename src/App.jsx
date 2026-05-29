// App.jsx — Main router (no external router library needed)
import { useState } from "react";
import "./styles.css";

import Navbar        from "./components/Navbar.jsx";
import WhatsAppFAB   from "./components/WhatsAppFAB.jsx";
import HomePage      from "./pages/HomePage.jsx";
import RoomsPage     from "./pages/RoomsPage.jsx";
import RoomDetailPage from "./pages/RoomDetailPage.jsx";
import GalleryPage   from "./pages/GalleryPage.jsx";
import AmenitiesPage from "./pages/AmenitiesPage.jsx";
import AboutPage     from "./pages/AboutPage.jsx";
import ContactPage   from "./pages/ContactPage.jsx";

export default function App() {
  const [page,   setPage]   = useState("home");
  const [roomId, setRoomId] = useState("standard-hut");

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar page={page} setPage={navigate} />

      {page === "home"        && <HomePage      setPage={navigate} setRoomId={setRoomId} />}
      {page === "rooms"       && <RoomsPage     setPage={navigate} setRoomId={setRoomId} />}
      {page === "room-detail" && <RoomDetailPage roomId={roomId}   setPage={navigate} setRoomId={setRoomId} />}
      {page === "gallery"     && <GalleryPage   setPage={navigate} />}
      {page === "amenities"   && <AmenitiesPage setPage={navigate} />}
      {page === "about"       && <AboutPage     setPage={navigate} />}
      {page === "contact"     && <ContactPage   setPage={navigate} />}

      <WhatsAppFAB />
    </>
  );
}
