// data/rooms.js
import { IMGS } from "../assets/images.js";

// Common amenities shared across all suites to keep the list clean
const COMMON_AMENITIES = [
  "High-speed Free Wi-Fi",
  "Free premium toiletries",
  "Shower & En-suite Toilet",
  "Fresh Towels & Linen",
  "Slippers & Wardrobe",
  "Ironing facilities & Pants press",
  "Heating & Fan",
  "Wake-up service",
  "Executive lounge access",
  "Socket near the bed"
];

export const ROOMS = [
  {
    id: "executive-suite",
    name: "Executive Suite",
    category: "Suite",
    price: "PKR 25,000",
    priceNum: 25000,
    // Added back for the RoomCard:
    beds: "1 Double, 1 Futon",
    size: "26 m²",
    view: "Mountain View",
    
    heroImg: IMGS.hero02,
    gallery: [IMGS.hero02, IMGS.hero03, IMGS.hero01],
    desc: "A cozy and elegant space perfectly suited for a peaceful getaway.",
    longDesc: "The Executive Suite is ideal for those looking for comfort and simplicity. With soft interiors, clean finishes, and breathtaking glimpses of the surrounding mountains, it offers just the right balance of ease and connection to the landscape. Everything you need, thoughtfully in place.",
    measurements: [
      "Total Area: 26 m²",
      "Bedroom: 1 Extra-large double bed",
      "Additional: 1 Futon bed"
    ],
    facilities: [
      "Balcony with Mountain, Pool & Garden views",
      "Landmark & Inner courtyard view",
      "Ensuite bathroom",
      "Barbecue & Terrace access",
      "Private entrance",
      "Entire unit located on ground floor",
      "Entire unit wheelchair accessible"
    ],
    amenities: COMMON_AMENITIES,
    extra: [
      "Towels/sheets available (extra fee)",
      "Outdoor furniture & dining area",
      "Clothes rack & Drying rack"
    ]
  },
  {
    id: "deluxe-suite",
    name: "Deluxe Suite",
    category: "Hut",
    price: "PKR 35,000",
    priceNum: 35000,
    // Added back for the RoomCard:
    beds: "1 Double, 2 Futons",
    size: "72 m²",
    view: "Mountain & Pool View",

    heroImg: IMGS.hero03,
    gallery: [IMGS.hero03, IMGS.hero01, IMGS.hero02],
    desc: "Spacious and luxurious, designed for families or larger groups.",
    longDesc: "Our Deluxe Suite offers expansive living spaces with dedicated seating areas. Designed to offer value without losing the view, it is fully equipped to make your extended stays in Skardu highly comfortable.",
    measurements: [
      "Total Area: 72 m²",
      "Bedroom 1: 1 Extra-large double bed & 2 Futon beds",
      "Living Room: 2 Sofa beds"
    ],
    facilities: [
      "Balcony with Mountain, Pool & Garden views",
      "Dedicated Seating Area & Desk",
      "Sofa & Electric kettle",
      "Ensuite bathroom",
      "Barbecue & Terrace access",
      "Private entrance",
      "Entire unit located on ground floor"
    ],
    amenities: COMMON_AMENITIES,
    extra: [
      "Towels/sheets available (extra fee)",
      "Outdoor furniture & dining area",
      "Clothes rack & Drying rack"
    ]
  },
  {
    id: "deluxe-king-suite",
    name: "Deluxe King Suite",
    category: "Villa",
    price: "PKR 40,000",
    priceNum: 40000,
    // Added back for the RoomCard:
    beds: "1 Double, 2 Futons",
    size: "72 m²",
    view: "Private Patio View",

    heroImg: IMGS.hero01,
    gallery: [IMGS.hero01, IMGS.hero02, IMGS.hero03],
    desc: "Premium comfort featuring climate control and private patio access.",
    longDesc: "The Deluxe King Suite blends traditional charm with modern necessities like air-conditioning. Step out onto your private patio to enjoy the crisp mountain air and sweeping valley views.",
    measurements: [
      "Total Area: 72 m²",
      "Bedroom 1: 1 Extra-large double bed & 2 Futon beds",
      "Living Room: 1 Sofa bed"
    ],
    facilities: [
      "Air conditioning",
      "Private Patio with Barbecue",
      "Mountain, Pool & Garden views",
      "Dedicated Seating Area & Desk",
      "Electric kettle",
      "Entire unit located on ground floor",
      "Entire unit wheelchair accessible"
    ],
    amenities: COMMON_AMENITIES,
    extra: [
      "Towels/sheets available (extra fee)",
      "Outdoor furniture & dining area",
      "Clothes rack & Drying rack"
    ]
  },
  {
    id: "king-suite",
    name: "King Suite",
    category: "Deluxe",
    price: "PKR 50,000",
    priceNum: 50000,
    // Added back for the RoomCard:
    beds: "2 Bedrooms",
    size: "91 m²",
    view: "Panoramic View",

    heroImg: IMGS.hero02,
    gallery: [IMGS.hero02, IMGS.hero01, IMGS.hero03],
    desc: "Our largest accommodation, offering multiple bedrooms for ultimate privacy.",
    longDesc: "The pinnacle of Sukoon Resorts. The King Suite offers two separate bedrooms and a spacious living room. It's the perfect sanctuary for large families seeking the highest level of comfort and privacy in the Karakoram.",
    measurements: [
      "Total Area: 91 m²",
      "Bedroom 1: 1 Extra-large double bed",
      "Bedroom 2: 2 Single beds",
      "Living Room: 1 Sofa bed"
    ],
    facilities: [
      "Interconnected room(s) available",
      "Balcony & Private Patio",
      "Mountain, Pool & Landmark views",
      "Dedicated Seating Area",
      "Ensuite bathroom",
      "Terrace access & Barbecue",
      "Entire unit located on ground floor"
    ],
    amenities: COMMON_AMENITIES,
    extra: [
      "Towels/sheets available (extra fee)",
      "Outdoor furniture & dining area",
      "Clothes rack & Drying rack"
    ]
  }
];

// ============================================
// DO NOT DELETE: Required for the Gallery Page
// ============================================
export const GALLERY_CATEGORIES = [
  { id: "all", label: "All Photos" },
  { id: "exterior", label: "Resort Exterior" },
  { id: "rooms", label: "Rooms" },
  { id: "dining", label: "Dining" },
  { id: "pool", label: "Pool & Grounds" },
  { id: "events", label: "Events" },
];

export const GALLERY_IMAGES = [
  { id: 1, src: IMGS.ext01, category: "exterior", caption: "Resort overview with Karakoram backdrop", alt: "Aerial view of Sukoon Resorts" },
  { id: 2, src: IMGS.ext02, category: "exterior", caption: "Fort-style building exterior at dusk", alt: "Fort-style building" },
  { id: 3, src: IMGS.hero01, category: "exterior", caption: "The resort grounds and outdoor pool", alt: "Resort grounds" },
  { id: 4, src: IMGS.hero02, category: "exterior", caption: "Circular huts at twilight", alt: "Circular huts at night" },
  { id: 5, src: IMGS.hero03, category: "exterior", caption: "Sunset over the Karakoram", alt: "Sunset view" },
  { id: 6, src: IMGS.room4, category: "rooms", caption: "Executive Suite — skylight bedroom", alt: "Executive suite bedroom" },
  { id: 7, src: IMGS.exectiveroom1, category: "rooms", caption: "Executive Suite — king bedroom", alt: "Executive suite" },
  { id: 8, src: IMGS.exectiveroom01, category: "rooms", caption: "Executive Suite — bathroom", alt: "Executive suite bathroom" },
  { id: 9, src: IMGS.excetivesuite02, category: "rooms", caption: "Executive Suite — vanity", alt: "Vanity mirror" },
  { id: 10, src: IMGS.deluxroom1, category: "rooms", caption: "Deluxe Room — king bedroom", alt: "Deluxe room" },
  { id: 11, src: IMGS.delux01, category: "rooms", caption: "Deluxe Room — bathroom", alt: "Deluxe bathroom" },
  { id: 12, src: IMGS.familyvilla1, category: "rooms", caption: "Family Villa — master bedroom", alt: "Family villa bedroom" },
  { id: 13, src: IMGS.familyvilla02, category: "rooms", caption: "Family Villa — en-suite bathroom", alt: "Family villa bathroom" },
  { id: 14, src: IMGS.gallery02, category: "dining", caption: "Heritage restaurant — domed ceiling dining hall", alt: "Restaurant interior" },
  { id: 15, src: IMGS.gallery03, category: "rooms", caption: "Lounge area with crimson sofas", alt: "Lounge area" },
  { id: 16, src: IMGS.gallery05, category: "rooms", caption: "Warm amber bathroom fixtures", alt: "Bathroom fixtures" },
  { id: 17, src: IMGS.gallery10, category: "pool", caption: "Outdoor pool with mountain views", alt: "Outdoor pool" },
  { id: 18, src: IMGS.gallery16, category: "pool", caption: "Pool and hut row at dusk", alt: "Pool view" },
];