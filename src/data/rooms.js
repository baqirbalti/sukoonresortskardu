// data/rooms.js
import { IMGS } from "../assets/images.js";

// Common amenities shared across all suites to keep the list clean
const COMMON_AMENITIES = [
  "Breakfast included",
  "High-speed Free Wi-Fi",
  "Free Parking available on premises",
  "Electricity and Generator backup 24/7",
  "Reliable hot water supply at all times",
  "Complimentary water & refreshments on arrival",
  "24-hour security",
  
];

export const ROOMS = [
  {
    id: "Executive-Villa",
    name: "Executive Villa",
    category: "Villa",
    price: "PKR 15,000",
    priceNum: 15000,
    // Added back for the RoomCard:
    beds: "1 Double",
    size: "34 m² / 366 sqft",
    view: "Mountain View",
    heroImg: IMGS.hero02,
    gallery: [IMGS.hero02, IMGS.executivevilla03, IMGS.executivevilla02, IMGS.executivevilla04, IMGS.executivevilla05, IMGS.executivevilla06, IMGS.executivevilla07],
    desc: "A cozy and elegant space perfectly suited for a peaceful getaway.",
    longDesc: "The Executive Villa is ideal for those looking for comfort and simplicity. With soft interiors, clean finishes, and breathtaking glimpses of the surrounding mountains, it offers just the right balance of ease and connection to the landscape. Everything you need, thoughtfully in place.",
    measurements: [
      "Total Area: 34 m² / 366 sqft",
      "Bedroom: 1 double bed / 2 single bed"
    ],
    facilities: [
      "Breakfast included",
      "Ensuite bathroom", 
      "Landmark & Inner Courtyard View",     
      "Private entrance",
      "Entire unit located on ground floor"

    ],
    amenities: COMMON_AMENITIES,
    extra: [
      "Heating (seasonal)",
      "Laundary service",
      "Extra	mattress	&	breakfast	—	Rs	3,000	per	person",
      "Bonfire / BBQ arrangements on request"
    ]
  },
  {
    id: "deluxe luxary suite",
    name: "Deluxe Luxary Suite",
    category: "Deluxe",
    price: "PKR 20,000",
    priceNum: 20000,
    // Added back for the RoomCard:
    beds: "1 Double, 2 Futons",
    size: "73 m² / 787 sqft",
    view: "Mountain & Pool View",

    heroImg: IMGS.hero03,
    gallery: [IMGS.hero03, IMGS.deluxeluxarysuite01, IMGS.deluxeluxarysuite02, IMGS.deluxeluxarysuite03, IMGS.deluxeluxarysuite04, IMGS.deluxeluxarysuite05, IMGS.deluxeluxarysuite06, IMGS.deluxeluxarysuite07, IMGS.deluxeluxarysuite08, IMGS.deluxeluxarysuite0],
    desc: "Spacious and luxurious, designed for families or larger groups.",
    longDesc: "Unique round design, airy living space, and stylish lounge setup—ideal for up to 4 adults to unwind and enjoy a serene Skardu escape.",
    measurements: [
      "Total Area: 72 m²",
      "Bedroom 1: 1 Extra-large double bed & 2 Futon beds",
    ],
    facilities: [
      "Balcony with Mountain, Pool & Garden views",
      "Dedicated Seating Area & Desk",
      "Sofa & Electric kettle",
      "Ensuite bathroom",
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
    id: "4 Bed Chalet",
    name: "4 Bed Chalet",
    category: "Chalet",
    price: "PKR 40,000",
    priceNum: 40000,
    // Added back for the RoomCard:
    beds: "1 Double, 2 Futons",
    size: "72 m²",
    view: "Private Patio View",

    heroImg: IMGS.fbedchalet09,
    gallery: [IMGS.fbedchalet09, IMGS.fbedchalet01, IMGS.fbedchalet02, IMGS.fbedchalet04, IMGS.fbedchalet06, IMGS.fbedchalet07, IMGS.fbedchalet08],
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
    category: "Suite",
    price: "PKR 50,000",
    priceNum: 50000,
    // Added back for the RoomCard:
    beds: "2 Bedrooms",
    size: "91 m²",
    view: "Panoramic View",

    heroImg: IMGS.kingsuite01,
    gallery: [IMGS.kingsuite01, IMGS.kingsuite02, IMGS.kingsuite03,   IMGS.kingsuite04, IMGS.kingsuite05, IMGS.kingsuite06],
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
  { id: 1, src: IMGS.exectivesuite02, category: "exterior", caption: "Resort overview with Skardu backdrop", alt: "Aerial view of Sukoon Resorts" },
  { id: 2, src: IMGS.ext02, category: "exterior", caption: "Fort-style building exterior at dusk", alt: "Fort-style building" },
  { id: 3, src: IMGS.hero01, category: "exterior", caption: "The resort grounds and outdoor pool", alt: "Resort grounds" },
  { id: 4, src: IMGS.hero02, category: "exterior", caption: "Circular huts at twilight", alt: "Circular huts at night" },
  { id: 5, src: IMGS.hero03, category: "exterior", caption: "Sunset over the Karakoram", alt: "Sunset view" },
  { id: 6, src: IMGS.exteriorfullview, category: "rooms", caption: "Executive Suite — skylight bedroom", alt: "Executive suite bedroom" },
  { id: 7, src: IMGS.exectiveroom1, category: "rooms", caption: "Executive Suite — king bedroom", alt: "Executive suite" },
  { id: 10, src: IMGS.deluxeluxarysuite03, category: "rooms", caption: "Deluxe Room — king bedroom", alt: "Deluxe room" },
  { id: 11, src: IMGS.kingsuite04, category: "rooms", caption: "King Suite — bathroom", alt: "King suite bathroom" },
  { id: 13, src: IMGS.familyvilla02, category: "rooms", caption: "Family Villa — en-suite bathroom", alt: "Family villa bathroom" },
  { id: 14, src: IMGS.gallery02, category: "dining", caption: "Heritage restaurant — domed ceiling dining hall", alt: "Restaurant interior" },
  { id: 15, src: IMGS.gallery03, category: "rooms", caption: "Lounge area with crimson sofas", alt: "Lounge area" },
  { id: 16, src: IMGS.gallery16, category: "rooms", caption: "Warm amber bathroom fixtures", alt: "Bathroom fixtures" },
  { id: 20, src: IMGS.executivevilla03, category: "rooms", caption: "Executive Villa — bedroom", alt: "Executive villa bedroom" },
  { id: 24, src: IMGS.executivevilla06, category: "rooms", caption: "Executive Villa — dining room", alt: "Executive villa dining room" },
  { id: 25, src: IMGS.executivevilla07, category: "rooms", caption: "Executive Villa — kitchen", alt: "Executive villa kitchen" },
  { id: 26, src: IMGS.executivevilla02, category: "rooms", caption: "Executive Villa — bedroom", alt: "Executive villa bedroom" },
  { id: 26, src: IMGS.kingsuite01, category: "rooms", caption: "King Suite — living room", alt: "King suite living room" },
  { id: 35, src: IMGS.deluxeluxarysuite04, category: "rooms", caption: "Deluxe Luxary Suite — dining room", alt: "Deluxe Luxary Suite dining room" },
  { id: 41, src: IMGS.fbedchalet01, category: "rooms", caption: "Family Chalet — living room", alt: "Family Chalet living room" },
  { id: 45, src: IMGS.fbedchalet05, category: "rooms", caption: "Family Chalet — kitchen", alt: "Family Chalet kitchen" },
 ]