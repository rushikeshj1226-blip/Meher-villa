import type { StaticImageData } from "next/image";

import poolCottages from "@/assets/photos/meher-villa-pool-cottages.jpg";
import swimmingPool from "@/assets/photos/meher-villa-swimming-pool.jpg";
import poolDeck from "@/assets/photos/meher-villa-pool-deck.jpg";
import cottagesGarden from "@/assets/photos/meher-villa-cottages-garden.jpg";
import cottageFront from "@/assets/photos/meher-villa-cottage-front.jpg";
import cottagesLawn from "@/assets/photos/meher-villa-cottages-lawn.jpg";
import cottagesRow from "@/assets/photos/meher-villa-cottages-row.jpg";
import cottageGardenPath from "@/assets/photos/meher-villa-cottage-garden-path.jpg";
import villa3bhk from "@/assets/photos/meher-villa-3bhk-villa.jpg";
import villaGarden from "@/assets/photos/meher-villa-villa-garden.jpg";
import villaPatio from "@/assets/photos/meher-villa-villa-patio.jpg";
import lawnPool from "@/assets/photos/meher-villa-lawn-pool.jpg";
import lawn from "@/assets/photos/meher-villa-lawn.jpg";
import gardenSeating from "@/assets/photos/meher-villa-garden-seating.jpg";
import gardenHills from "@/assets/photos/meher-villa-garden-hills.jpg";
import villaBedroom from "@/assets/photos/meher-villa-villa-bedroom.jpg";
import villaBedroom2 from "@/assets/photos/meher-villa-villa-bedroom-2.jpg";
import cottageRoom from "@/assets/photos/meher-villa-cottage-room.jpg";
import cottageInterior from "@/assets/photos/meher-villa-cottage-interior.jpg";
import cottageDoubleBed from "@/assets/photos/meher-villa-cottage-double-bed.jpg";
import cottageTvExtraBed from "@/assets/photos/meher-villa-cottage-tv-extra-bed.jpg";
import cottageDoorLawn from "@/assets/photos/meher-villa-cottage-door-lawn.jpg";
import cottageRoomLawnView from "@/assets/photos/meher-villa-cottage-room-lawn-view.jpg";
import bathroomSupportRails from "@/assets/photos/meher-villa-bathroom-support-rails.jpg";
import bathroomGreyTiles from "@/assets/photos/meher-villa-bathroom-grey-tiles.jpg";
import bathingArea from "@/assets/photos/meher-villa-bathing-area.jpg";
import bathroomShower from "@/assets/photos/meher-villa-bathroom-shower.jpg";
import diningHall from "@/assets/photos/meher-villa-dining-hall.jpg";
import entranceGate from "@/assets/photos/meher-villa-entrance-gate.jpg";
import nameSign from "@/assets/photos/meher-villa-name-sign.jpg";
// Nearby attractions: free-licensed photos from Wikimedia Commons (credits in `nearby.places`).
import lohagadFort from "@/assets/photos/explore/lohagad-fort-lonavala.jpg";
import bhushiDam from "@/assets/photos/explore/bhushi-dam-lonavala.jpg";
import narayaniDham from "@/assets/photos/explore/narayani-dham-temple-lonavala.jpg";
import visapurFort from "@/assets/photos/explore/visapur-fort-lonavala.jpg";
import khandalaGhat from "@/assets/photos/explore/khandala-ghat-monsoon.jpg";
import bhajaCaves from "@/assets/photos/explore/bhaja-caves-lonavala.jpg";
import wetNJoy from "@/assets/photos/explore/wet-n-joy-water-park-lonavala.jpg";
import tigerPoint from "@/assets/photos/explore/tiger-point-waterfall-lonavala.jpg";

import guestsBirthdayGroup from "@/assets/photos/guests/meher-villa-guests-birthday-group.jpg";
import guestsCookingContest from "@/assets/photos/guests/meher-villa-guests-cooking-contest.jpg";
import guestsLawnGathering from "@/assets/photos/guests/meher-villa-guests-lawn-gathering.jpg";
import guestsFamilyGate from "@/assets/photos/guests/meher-villa-guests-family-gate.jpg";
import guestsFamilyCottage from "@/assets/photos/guests/meher-villa-guests-family-cottage.jpg";
import guestsBirthdayCake from "@/assets/photos/guests/meher-villa-guests-birthday-cake.jpg";
import guestsGardenTea from "@/assets/photos/guests/meher-villa-guests-garden-tea.jpg";
import guestsCoupleCottages from "@/assets/photos/guests/meher-villa-guests-couple-cottages.jpg";
import guestsFriendsCottage from "@/assets/photos/guests/meher-villa-guests-friends-cottage.jpg";
import guestsPoolsideCircle from "@/assets/photos/guests/meher-villa-guests-poolside-circle.jpg";
import guestsBirthdayGarland from "@/assets/photos/guests/meher-villa-guests-birthday-garland.jpg";
import guestsChefTeam from "@/assets/photos/guests/meher-villa-guests-chef-team.jpg";
import guestsGroupGarden from "@/assets/photos/guests/meher-villa-guests-group-garden.jpg";
import guestsFriendsEntrance from "@/assets/photos/guests/meher-villa-guests-friends-entrance.jpg";
import guestsGardenCircle from "@/assets/photos/guests/meher-villa-guests-garden-circle.jpg";
import guestsCoupleVeranda from "@/assets/photos/guests/meher-villa-guests-couple-veranda.jpg";
import guestsKidsCake from "@/assets/photos/guests/meher-villa-guests-kids-cake.jpg";
import birthdayPoster from "@/assets/photos/guests/meher-villa-guests-birthday-video-poster.jpg";
import dancingPoster from "@/assets/photos/guests/meher-villa-guests-dancing-video-poster.jpg";
import eveningLawnPoster from "@/assets/photos/guests/meher-villa-guests-evening-lawn-video-poster.jpg";
import gamesNightPoster from "@/assets/photos/guests/meher-villa-guests-games-night-video-poster.jpg";
import villaWalkPoster from "@/assets/photos/guests/meher-villa-guests-villa-walk-video-poster.jpg";

export type Img = { src: StaticImageData; alt: string };
export type Photo = Img & { caption: string; category: GalleryCategory };
export type GuestPhoto = Img & { caption: string };
// Videos live in public/videos; the poster shows until the guest presses play.
export type Video = { src: string; poster: StaticImageData; caption: string; duration: string };
export type IconName =
  | "paw" | "snow" | "bath" | "tv" | "fridge" | "sun" | "drop" | "wifi" | "pool" | "table"
  | "ball" | "flame" | "plate" | "car" | "user" | "grass" | "pin" | "home" | "clock";

export const villa = {
  name: "Meher Villa",
  tagline: "A pet-friendly villa near Lonavala",
  hostSince: 2017,
  address: {
    street: "Plot No 42, Pawan Nagar, Dongar Wadi, Kevaregaon",
    locality: "Lonavala",
    region: "Maharashtra",
    postalCode: "410401",
    full: "Plot No 42, Pawan Nagar, Dongar Wadi, Kevaregaon, Lonavala, Maharashtra 410401",
  },
  geo: { lat: 18.74072, lng: 73.434685 },
  instagram: { url: "https://www.instagram.com/zerksiss_irani/", handle: "@zerksiss_irani" },
};

export const seo = {
  title: "Meher Villa Lonavala | Pet-Friendly Villa near Lonavala",
  description:
    "Pet-friendly villa near Lonavala with 8 cottages, a 3BHK villa, a pool and a big lawn, 4.4 km from Lonavala station. Check your dates on WhatsApp.",
  ogTitle: "Meher Villa, Lonavala: a pet-friendly villa with a pool",
  ogDescription:
    "Bring the whole family, dog included. Eight cottages, a 3BHK villa, a pool and a big lawn near Bhaja Caves and Lohagad.",
};

export const nav = [
  { label: "Stay", href: "#stay" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Kevaregaon · Lonavala",
  title: "Meher Villa",
  subtitle: "A pet-friendly villa with a pool in Lonavala",
  intro: "Eight cottages and a 3BHK villa around a pool and a big green lawn. Bring the family. Bring the dog.",
  image: { src: poolCottages, alt: "Swimming pool, lawn and wooden cottages at Meher Villa, Lonavala" },
};

export const stay = {
  eyebrow: "Accommodation",
  title: "Our Cottages & Villa",
  intro: "Book a cottage, the villa, or a mix for a bigger group. Every room has air conditioning and an attached bathroom.",
  options: [
    {
      name: "Cottages",
      text: "Eight wooden cottages for 2 guests plus 1 extra, each with a veranda facing the lawn.",
      image: { src: cottageFront, alt: "A wooden cottage with a veranda at Meher Villa" },
      icons: ["snow", "tv", "wifi", "sun"] as IconName[],
    },
    {
      name: "3BHK Villa",
      text: "Three bedrooms with attached bathrooms and a garden all around, ideal for families.",
      image: { src: villa3bhk, alt: "The 3BHK villa with stone walls and a sloping red roof" },
      icons: ["snow", "tv", "fridge", "sun"] as IconName[],
    },
  ],
};

export const galleryIntro = {
  eyebrow: "Gallery",
  title: "Where Weekend Memories Begin",
  intro: "A glimpse of the pool, the cottages, the villa and the lawn, as guests see them.",
};

export const galleryTabs = ["All", "Pool", "Cottages", "Villa", "Lawn & Garden", "Rooms"] as const;
export type GalleryCategory = Exclude<(typeof galleryTabs)[number], "All">;

export const gallery: Photo[] = [
  { src: poolCottages, alt: "Pool, lawn and cottages at Meher Villa", caption: "The pool and the cottages", category: "Pool" },
  { src: cottagesGarden, alt: "Cottages among palms and flowering plants", caption: "Gardens between the cottages", category: "Cottages" },
  { src: villaBedroom, alt: "Villa bedroom opening onto the lawn", caption: "A villa bedroom", category: "Rooms" },
  { src: lawn, alt: "Wide green lawn at Meher Villa", caption: "Room to run, for kids and dogs", category: "Lawn & Garden" },
  { src: villa3bhk, alt: "The 3BHK villa with a stone facade", caption: "The 3BHK villa", category: "Villa" },
  { src: cottageFront, alt: "Front of a wooden cottage with a veranda", caption: "One of eight cottages", category: "Cottages" },
  { src: cottageGardenPath, alt: "Stone path across the lawn between the cottages, with the pool beyond", caption: "The garden path to the pool", category: "Cottages" },
  { src: poolDeck, alt: "Swimming pool and deck with the villa behind", caption: "Poolside", category: "Pool" },
  { src: diningHall, alt: "Dining hall with glass walls and garden views", caption: "The dining hall", category: "Rooms" },
  { src: swimmingPool, alt: "Swimming pool surrounded by palms", caption: "Afternoons by the pool", category: "Pool" },
  { src: cottagesLawn, alt: "Cottages along the lawn among trees", caption: "Cottages on the lawn", category: "Cottages" },
  { src: cottagesRow, alt: "A row of wooden cottages facing the lawn", caption: "The cottage lawn", category: "Cottages" },
  { src: villaGarden, alt: "Stone wall of the villa with the garden and hills", caption: "The villa garden", category: "Villa" },
  { src: villaPatio, alt: "Villa patio with flowers and chairs", caption: "The villa patio", category: "Villa" },
  { src: gardenSeating, alt: "Shaded garden seating under the trees", caption: "Shade for lazy afternoons", category: "Lawn & Garden" },
  { src: gardenHills, alt: "Garden path with hills in the distance", caption: "Hills on the horizon", category: "Lawn & Garden" },
  { src: cottageRoom, alt: "Wooden cottage bedroom with a double bed", caption: "Inside a cottage", category: "Rooms" },
  { src: cottageInterior, alt: "Cottage interior with a double bed, extra bed and wardrobe", caption: "A cottage for 2 + 1", category: "Rooms" },
  { src: cottageDoubleBed, alt: "Cottage double bed with white linen, side table and wardrobe", caption: "A cottage double bed", category: "Rooms" },
  { src: cottageTvExtraBed, alt: "Cottage with a wall-mounted TV, extra single bed and storage bench", caption: "TV and an extra bed", category: "Rooms" },
  { src: cottageDoorLawn, alt: "Cottage door opening onto a veranda chair and the lawn", caption: "Step out onto the lawn", category: "Rooms" },
  { src: cottageRoomLawnView, alt: "Cottage room with a fridge and doors open to the lawn", caption: "From your room to the lawn", category: "Rooms" },
  { src: bathroomSupportRails, alt: "Attached bathroom with a western toilet, washbasin and fold-down support rail", caption: "Bathroom with support rails", category: "Rooms" },
  { src: bathroomShower, alt: "Attached bathroom with a shower, western toilet, washbasin and grab bars", caption: "Shower and grab bars", category: "Rooms" },
  { src: bathroomGreyTiles, alt: "Grey-tiled attached bathroom with a western toilet and grab bar", caption: "An attached bathroom", category: "Rooms" },
  { src: bathingArea, alt: "Bathing area with taps, a bucket, a stool and a grab bar", caption: "The bathing area", category: "Rooms" },
  { src: villaBedroom2, alt: "Villa bedroom with a double bed and TV", caption: "Another villa bedroom", category: "Rooms" },
  { src: entranceGate, alt: "The Meher Villa entrance gate and sign", caption: "Look for this gate", category: "Lawn & Garden" },
];

export const moments = {
  eyebrow: "Guest Moments",
  title: "Real Stays, Real Smiles",
  intro: "Birthdays, family reunions, cooking contests and games nights. A few moments from guests who stayed with us.",
  videos: [
    { src: "/videos/meher-villa-birthday-video.mp4", poster: birthdayPoster, caption: "Birthday cake on the lawn", duration: "0:20" },
    { src: "/videos/meher-villa-dancing-video.mp4", poster: dancingPoster, caption: "Dancing in the dining hall", duration: "0:23" },
    { src: "/videos/meher-villa-evening-lawn-video.mp4", poster: eveningLawnPoster, caption: "Evenings by the pool", duration: "0:18" },
    { src: "/videos/meher-villa-games-night-video.mp4", poster: gamesNightPoster, caption: "Games night", duration: "0:20" },
    { src: "/videos/meher-villa-villa-walk-video.mp4", poster: villaWalkPoster, caption: "A walk past the villa", duration: "0:09" },
  ] satisfies Video[],
  photos: [
    { src: guestsBirthdayGroup, alt: "A large group of guests at a birthday celebration on the lawn", caption: "A birthday on the lawn" },
    { src: guestsCookingContest, alt: "Guests in chef hats and aprons at a cooking activity", caption: "Cooking contest on the veranda" },
    { src: guestsLawnGathering, alt: "Guests seated together on the lawn near the pool", caption: "Get-together by the pool" },
    { src: guestsFamilyGate, alt: "A family with children at the Meher Villa gate", caption: "Family weekend" },
    { src: guestsFamilyCottage, alt: "A family group in front of a wooden cottage", caption: "Family reunion at the cottages" },
    { src: guestsBirthdayCake, alt: "Guests around a birthday cake decorated with flowers and balloons", caption: "Cake time" },
    { src: guestsGardenTea, alt: "Guests chatting over tea in the garden", caption: "Tea in the garden" },
    { src: guestsCoupleCottages, alt: "Monaz Mevawalla of TMKOC at Meher Villa, in front of the cottages", caption: "Monaz Mevawalla - TMKOC" },
    { src: guestsFriendsCottage, alt: "Friends outside a wooden cottage", caption: "Friends' getaway" },
    { src: guestsPoolsideCircle, alt: "Guests relaxing in a circle on the lawn by the pool", caption: "Poolside chats" },
    { src: guestsBirthdayGarland, alt: "Guests celebrating a birthday with a garland and cake", caption: "Celebrating a birthday" },
    { src: guestsChefTeam, alt: "Guests in chef hats on a cottage veranda", caption: "The chef team" },
    { src: guestsGroupGarden, alt: "A group of friends in the garden", caption: "A group day out" },
    { src: guestsFriendsEntrance, alt: "Friends at the villa entrance", caption: "Friends at the villa" },
    { src: guestsGardenCircle, alt: "Guests sitting together on the lawn between the cottages", caption: "Afternoon on the lawn" },
    { src: guestsCoupleVeranda, alt: "A couple on a cottage veranda", caption: "On the cottage veranda" },
    { src: guestsKidsCake, alt: "Children cutting a birthday cake on the lawn", caption: "A kids' birthday party" },
  ] satisfies GuestPhoto[],
};

export const play = {
  eyebrow: "Play",
  title: "Play & Unwind",
  intro: "Days here go slowly: a swim, a game on the lawn, a rematch indoors.",
  items: [
    { icon: "pool" as IconName, title: "Swimming Pool", text: "A pool set in the lawn, with a deck for drying off in the sun." },
    { icon: "table" as IconName, title: "Indoor Games", text: "Table tennis and carrom for afternoons and rainy days." },
    { icon: "ball" as IconName, title: "Lawn Games", text: "Box cricket, badminton and volleyball on the big lawn." },
  ],
};

export const pets = {
  eyebrow: "Pet-friendly stay",
  title: "Bring Your Pet to Meher Villa",
  text: "Most Lonavala weekends mean leaving your dog with a sitter. Here, your pet comes along, with a big lawn to run on and quiet village lanes all around.",
  points: ["Pets welcome", "Big lawn to run on", "No resident animals", "Ground-floor cottages"],
  note: "Tell us your pet's breed and size when you enquire, and we'll confirm the pet terms with your quote.",
  image: { src: lawnPool, alt: "Big green lawn with the pool and cottages at Meher Villa, a pet-friendly villa near Lonavala" },
};

export const day = {
  eyebrow: "Your stay",
  title: "A Day at Meher Villa",
  intro: "Slow mornings, lazy afternoons and long evenings, all without leaving the gate.",
  cards: [
    { title: "Poolside Afternoons", tag: "Afternoon", text: "A swim after a morning at the forts, then tea on the deck.", image: { src: swimmingPool, alt: "Swimming pool with a wooden deck" } },
    { title: "Games on the Lawn", tag: "All day", text: "Box cricket, badminton and volleyball, with the dog joining in.", image: { src: lawn, alt: "Big green lawn between the cottages" } },
    { title: "Dinner Together", tag: "Evening", text: "Meals in the glass-walled dining hall, or a barbecue under the stars.", image: { src: diningHall, alt: "Dining hall with glass walls and garden views" } },
  ],
};

export const amenities = {
  eyebrow: "Amenities",
  title: "Amenities at Our Lonavala Villa",
  intro: "Everything you need for an easy weekend, for the whole family and the dog.",
  items: [
    { icon: "snow" as IconName, title: "AC Rooms", text: "In every cottage and villa room" },
    { icon: "bath" as IconName, title: "Attached Bathrooms", text: "With geyser and solar heating" },
    { icon: "sun" as IconName, title: "24-Hour Hot Water", text: "Round the clock, every day" },
    { icon: "drop" as IconName, title: "RO Drinking Water", text: "Purified and always available" },
    { icon: "wifi" as IconName, title: "Free Wi-Fi", text: "Across the property" },
    { icon: "tv" as IconName, title: "TV", text: "In all cottages and the villa" },
    { icon: "fridge" as IconName, title: "Refrigerator", text: "Keep drinks and snacks cold" },
    { icon: "flame" as IconName, title: "Barbecue", text: "For evenings on the lawn" },
    { icon: "car" as IconName, title: "Parking", text: "On site, inside the gate" },
    { icon: "user" as IconName, title: "Caretaker", text: "On site through your stay" },
  ],
};

export const about = {
  eyebrow: "About",
  title: "A Peaceful Pet-Friendly Villa near Lonavala",
  paragraphs: [
    "Meher Villa sits in Kevaregaon, a quiet village pocket 4.4 km from Lonavala railway station, where the town gives way to fields, forts and monsoon waterfalls. Eight wooden cottages and a 3BHK villa are set around a swimming pool and a wide lawn, so there is room for every kind of weekend.",
    "Every room is air-conditioned, with an attached bathroom, a TV, a refrigerator, hot water round the clock and RO drinking water. And yes, your dog can come too: pets are welcome, and our caretaker is on site to help you settle in.",
  ],
  stats: [
    { value: "8", label: "Cottages" },
    { value: "3BHK", label: "Family villa" },
    { value: "2017", label: "Hosting since" },
  ],
  cards: [
    { title: "Gardens & Lawn", text: "Shaded seating, flowering beds and open grass between the cottages.", image: { src: gardenSeating, alt: "Shaded garden seating under the trees" } },
    { title: "Hill Views", text: "The Sahyadri hills on the horizon, green from June to October.", image: { src: gardenHills, alt: "Garden path with the Lonavala hills behind" } },
  ],
};

export const location = {
  eyebrow: "Location",
  title: "How to Reach Meher Villa",
  intro:
    "Meher Villa is in Kevaregaon, on the quiet side of Lonavala towards Lohagad Fort, 4.4 km from Lonavala railway station.",
  distances: [
    { from: "Lonavala station", value: "4.4 km" },
    { from: "From Pune", value: "1.5 hrs" },
    { from: "From Mumbai", value: "2+ hrs" },
  ],
  sections: [
    {
      title: "By Car",
      text: "From Mumbai, take the Mumbai–Pune Expressway to Lonavala. From Pune, take the Expressway or the old Mumbai–Pune highway. Then follow our Google Maps pin to Pawan Nagar, Dongar Wadi. The last stretch is a village road with rough patches, especially after rain, so drive slowly; our caretaker will happily guide you in on the phone.",
    },
    {
      title: "By Train",
      text: "Lonavala station is 4.4 km away, served by express trains from Mumbai and local trains from Pune. Autos and cabs are available outside the station.",
    },
    {
      title: "In the Monsoon",
      text: "June to September is the most beautiful time here, and the wettest. Plan to arrive in daylight, and expect slower traffic near the waterfalls on weekends.",
    },
  ],
  gateImage: { src: entranceGate, alt: "The Meher Villa entrance gate with the name sign" },
};

export const nearby = {
  eyebrow: "Explore",
  title: "Things to Do near Meher Villa, Lonavala",
  intro: "Forts, caves, waterfalls and viewpoints, most within a short drive. Our caretaker knows which places get crowded on which days.",
  places: [
    {
      name: "Lohagad Fort",
      distance: "Close by",
      text: "A hill fort with long stone stairways and the narrow scorpion's-tail ridge, at its best in the monsoon and winter.",
      image: { src: lohagadFort, alt: "The green scorpion's-tail ridge of Lohagad Fort in the monsoon" },
      credit: { author: "Ramji R", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", source: "https://commons.wikimedia.org/wiki/File:Lohagad_fort_N-MH-M8-6.JPG" },
    },
    {
      name: "Bhushi Dam",
      distance: "7 km",
      text: "In the monsoon, water spills over the dam steps and everyone wades in. Go early on weekends.",
      image: { src: bhushiDam, alt: "Bhushi Dam lake surrounded by misty green hills" },
      credit: { author: "Vivek Shrivastava", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", source: "https://commons.wikimedia.org/wiki/File:Bhushi_Dam_-_Lonavala.jpg" },
    },
    {
      name: "Narayani Dham Temple",
      distance: "7.2 km",
      text: "A large white marble temple complex, peaceful in the early morning.",
      image: { src: narayaniDham, alt: "White marble facade of Narayani Dham Temple, Lonavala" },
      credit: { author: "Aditi9027", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Narayani_Dham_Temple.jpg" },
    },
    {
      name: "Visapur Fort",
      distance: "9.2 km",
      text: "Lohagad's bigger, wilder neighbour, with a wide plateau and monsoon streams.",
      image: { src: visapurFort, alt: "Visapur Fort's green hilltop plateau in the rains" },
      credit: { author: "Abhijeet Safai", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", source: "https://commons.wikimedia.org/wiki/File:Visapur.JPG" },
    },
    {
      name: "Khandala Ghat Viewpoint",
      distance: "10.2 km",
      text: "Sweeping views over the ghat and the railway line winding through the valley.",
      image: { src: khandalaGhat, alt: "Green slopes and the ghat road at Khandala during the rains" },
      credit: { author: "Gayatri Priyadarshini", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Khandala_ghat_during_rains.jpg" },
    },
    {
      name: "Bhaja Caves",
      distance: "11.2 km",
      text: "Rock-cut Buddhist caves from around the 2nd century BCE, with a waterfall nearby in the rains.",
      image: { src: bhajaCaves, alt: "Carved rock-cut facades of the Bhaja Caves near Lonavala" },
      credit: { author: "L Ram Vidhya Sagar", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", source: "https://commons.wikimedia.org/wiki/File:Bhaja_Caves_IMG_5599.JPG" },
    },
    {
      name: "Wet N Joy Water Park",
      distance: "13.1 km",
      text: "Slides, wave pools and rides for a full day out with the kids.",
      image: { src: wetNJoy, alt: "Water slides and pool at Wet N Joy Water Park, Lonavala" },
      credit: { author: "Aashish.mogul", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Wet_n_joy.jpg" },
    },
    {
      name: "Tiger Point",
      distance: "13.3 km",
      text: "A cliff-edge viewpoint famous for monsoon mist and waterfalls.",
      image: { src: tigerPoint, alt: "Monsoon waterfall at Tiger Point, Lonavala" },
      credit: { author: "Sobarwiki", license: "Public domain", licenseUrl: "", source: "https://commons.wikimedia.org/wiki/File:Tiger_point-Lonavla.JPG" },
    },
  ],
};

export const houseRules = {
  eyebrow: "Good to know",
  title: "House Rules",
  rules: [
    { title: "ID", text: "The guest who books must be 18 or older. Carry a passport, Aadhaar or other government photo ID; local IDs are accepted." },
    { title: "Groups", text: "Families and groups of friends, including all-male groups, are welcome." },
    { title: "Parties", text: "Private parties and events are not allowed. Please keep music low so everyone can enjoy the quiet." },
    { title: "Pets", text: "Welcome. Keep them on a lead in shared areas and clean up after them." },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  title: "Meher Villa Lonavala FAQs",
  items: [
    { q: "Is Meher Villa pet-friendly?", a: "Yes. Pets are welcome at Meher Villa, and no animals live on the property. Tell us your pet's breed and size when you enquire so we can get ready for them." },
    { q: "Are there pet charges or breed limits?", a: "Tell us your pet's breed and size when you enquire, and we'll confirm the pet terms with your quote." },
    { q: "What are the stay options?", a: "Eight cottages, each for 2 guests plus 1 extra, and a 3BHK villa. Every room has air conditioning and an attached bathroom. Tell us your group size and we'll suggest the right mix." },
    { q: "Where is Meher Villa, and how far is it from Lonavala station?", a: "Meher Villa is in Kevaregaon (Pawan Nagar, Dongar Wadi), Lonavala 410401. It is 4.4 km from Lonavala railway station and about 5 km from the town centre." },
    { q: "How do I reach Meher Villa from Mumbai or Pune?", a: "Drive to Lonavala on the Mumbai–Pune Expressway and follow our Google Maps pin. It is a little over two hours from Mumbai and about an hour and a half from Pune. By train, get off at Lonavala and take an auto or cab." },
    { q: "Is the road to the villa good?", a: "The last stretch is a village road with some rough patches, especially after rain. Drive slowly; cars with good ground clearance are the most comfortable, and our caretaker can guide you in by phone." },
    { q: "Is there a swimming pool?", a: "Yes. Meher Villa has a swimming pool set in the lawn, shared by guests staying at the property." },
    { q: "What games are there?", a: "Table tennis and carrom indoors, and box cricket, badminton and volleyball outdoors on the lawn." },
    { q: "Is food available?", a: "Yes. Meals are served in our dining hall, and a barbecue is available for evenings." },
    { q: "Is there hot water, drinking water and Wi-Fi?", a: "Yes. Hot water runs 24 hours from geysers and solar heaters, drinking water is RO-purified, and Wi-Fi is free." },
    { q: "What ID do I need?", a: "The guest who books must be 18 or older. Bring a passport, Aadhaar or other government photo ID; local IDs are accepted." },
    { q: "How do I book?", a: "Fill in the enquiry form on this page and swipe to send. It opens WhatsApp with your dates and details ready, and we reply with availability and the exact price." },
  ],
};

export const enquiry = {
  eyebrow: "Book your stay",
  title: "Check Availability",
  intro: "Tell us your dates and we'll reply on WhatsApp with availability and the exact price.",
  image: { src: nameSign, alt: "Wooden Meher Villa name sign set in the red stone entrance wall" },
};

export const footer = {
  about: "A quiet, pet-friendly retreat of cottages and a villa near Lonavala, made for unhurried weekends.",
  columns: [
    { title: "Stay", links: [{ label: "Cottages & Villa", href: "#stay" }, { label: "Gallery", href: "#gallery" }, { label: "Amenities", href: "#amenities" }, { label: "Pets", href: "#pets" }] },
    { title: "Plan", links: [{ label: "Location", href: "#location" }, { label: "Things to Do", href: "#explore" }, { label: "House Rules", href: "#rules" }, { label: "FAQ", href: "#faq" }] },
  ],
};

export const messages = {
  general: "Hi Meher Villa! I'd like to check availability for my dates.",
  pets: "Hi Meher Villa! I'm planning a stay with my pet. Is the villa available on my dates?",
  directions: "Hi Meher Villa! Could you share directions to the villa?",
};
