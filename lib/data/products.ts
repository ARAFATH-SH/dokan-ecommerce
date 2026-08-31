import { Product } from "@/lib/types";

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface RawProduct {
  title: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  keyword: string;
  lock: number;
  rating: number;
  reviewCount: number;
  soldCount: number;
  location: string;
  description: string;
  highlights: string[];
  stock: number;
  freeShipping: boolean;
}

const raw: RawProduct[] = [
  {
    title: "Nova Wireless Over Ear Headphones",
    categorySlug: "electronics",
    price: 2450,
    originalPrice: 3200,
    keyword: "headphones",
    lock: 201,
    rating: 4.6,
    reviewCount: 328,
    soldCount: 1200,
    location: "Dhaka",
    description:
      "Nova headphones deliver rich sound with deep bass and clear vocals. The ear cushions are padded for long listening sessions and the headband folds flat for easy storage in a bag.",
    highlights: [
      "Up to 30 hours of playback on a single charge",
      "Soft memory foam ear cushions",
      "Built in microphone for calls",
      "Foldable design for travel"
    ],
    stock: 42,
    freeShipping: true
  },
  {
    title: "Pulse Smart Fitness Band",
    categorySlug: "electronics",
    price: 1650,
    originalPrice: 2100,
    keyword: "smartwatch",
    lock: 202,
    rating: 4.4,
    reviewCount: 210,
    soldCount: 860,
    location: "Chattogram",
    description:
      "Track your steps, heart rate and sleep with the Pulse smart band. The display stays readable outdoors and the battery lasts up to a week between charges.",
    highlights: [
      "Heart rate and sleep tracking",
      "Water resistant up to 50 meters",
      "Seven day battery life",
      "Notifications for calls and messages"
    ],
    stock: 65,
    freeShipping: true
  },
  {
    title: "Aria 20W Bluetooth Speaker",
    categorySlug: "electronics",
    price: 1890,
    keyword: "speaker",
    lock: 203,
    rating: 4.5,
    reviewCount: 154,
    soldCount: 540,
    location: "Dhaka",
    description:
      "The Aria speaker fills a room with balanced sound and pairs instantly with any bluetooth device. Its shell resists splashes so it can travel from the kitchen to the yard.",
    highlights: [
      "20 watts of clear, balanced sound",
      "Splash resistant housing",
      "12 hour rechargeable battery",
      "Pairs with two devices at once"
    ],
    stock: 38,
    freeShipping: true
  },
  {
    title: "Lumen 10000mAh Power Bank",
    categorySlug: "electronics",
    price: 990,
    originalPrice: 1300,
    keyword: "powerbank",
    lock: 204,
    rating: 4.3,
    reviewCount: 402,
    soldCount: 1890,
    location: "Gazipur",
    description:
      "Charge your phone twice over with the Lumen power bank. Dual output ports let you charge two devices together, and the compact body slips easily into a pocket.",
    highlights: [
      "10000mAh capacity",
      "Two output ports for dual charging",
      "LED indicator shows remaining charge",
      "Compact and pocket friendly"
    ],
    stock: 120,
    freeShipping: true
  },
  {
    title: "Vista 24 Inch LED Monitor",
    categorySlug: "electronics",
    price: 12500,
    keyword: "monitor",
    lock: 205,
    rating: 4.7,
    reviewCount: 96,
    soldCount: 210,
    location: "Dhaka",
    description:
      "Work and watch in comfort with the Vista monitor. The full HD panel keeps text sharp and colors natural, while slim bezels make it easy to set up a dual screen desk.",
    highlights: [
      "24 inch full HD display",
      "Slim bezel design",
      "HDMI and VGA inputs",
      "Adjustable tilt stand"
    ],
    stock: 24,
    freeShipping: false
  },
  {
    title: "Men Cotton Casual Shirt",
    categorySlug: "fashion",
    price: 890,
    keyword: "mensshirt",
    lock: 211,
    rating: 4.2,
    reviewCount: 176,
    soldCount: 940,
    location: "Narayanganj",
    description:
      "Cut from breathable cotton, this shirt is easy to dress up or down. The regular fit works well for the office or a weekend outing.",
    highlights: [
      "100 percent cotton fabric",
      "Regular fit for all day comfort",
      "Machine washable",
      "Available in five colors"
    ],
    stock: 150,
    freeShipping: true
  },
  {
    title: "Women Floral Summer Dress",
    categorySlug: "fashion",
    price: 1450,
    originalPrice: 1900,
    keyword: "summerdress",
    lock: 212,
    rating: 4.5,
    reviewCount: 231,
    soldCount: 780,
    location: "Dhaka",
    description:
      "Light and airy, this floral dress is made for warm days. The flowing hem and adjustable waist tie keep the fit comfortable from morning to evening.",
    highlights: [
      "Lightweight breathable fabric",
      "Adjustable waist tie",
      "Machine washable",
      "True to size fit"
    ],
    stock: 88,
    freeShipping: true
  },
  {
    title: "Unisex Denim Jacket",
    categorySlug: "fashion",
    price: 2200,
    keyword: "denimjacket",
    lock: 213,
    rating: 4.4,
    reviewCount: 118,
    soldCount: 410,
    location: "Dhaka",
    description:
      "A classic denim jacket that layers over almost anything. Sturdy stitching and a slightly relaxed cut make it a piece you can wear for years.",
    highlights: [
      "Heavyweight denim fabric",
      "Relaxed unisex fit",
      "Button front closure",
      "Reinforced stitching"
    ],
    stock: 56,
    freeShipping: true
  },
  {
    title: "Men Slim Fit Chino Trouser",
    categorySlug: "fashion",
    price: 1150,
    keyword: "chinotrouser",
    lock: 214,
    rating: 4.1,
    reviewCount: 89,
    soldCount: 320,
    location: "Chattogram",
    description:
      "These chinos hold their shape through the day thanks to a cotton blend with just enough stretch. A clean, tailored line works for both the office and casual outings.",
    highlights: [
      "Cotton blend with stretch",
      "Slim tailored fit",
      "Four pocket design",
      "Available in four colors"
    ],
    stock: 110,
    freeShipping: true
  },
  {
    title: "Women Knit Cardigan",
    categorySlug: "fashion",
    price: 1350,
    keyword: "cardigan",
    lock: 215,
    rating: 4.3,
    reviewCount: 74,
    soldCount: 265,
    location: "Dhaka",
    description:
      "A soft knit cardigan that layers easily over shirts and dresses. The open front and ribbed cuffs give it a relaxed, easy to wear shape.",
    highlights: [
      "Soft knit fabric",
      "Open front design",
      "Ribbed cuffs and hem",
      "Hand wash recommended"
    ],
    stock: 70,
    freeShipping: true
  },
  {
    title: "Woven Cotton Throw Blanket",
    categorySlug: "home-living",
    price: 1200,
    keyword: "throwblanket",
    lock: 221,
    rating: 4.6,
    reviewCount: 143,
    soldCount: 520,
    location: "Dhaka",
    description:
      "This throw blanket adds texture and warmth to a sofa or bed. Woven from soft cotton yarn, it is light enough for year round use.",
    highlights: [
      "Woven cotton yarn",
      "Fits sofas and single beds",
      "Fringed edge detail",
      "Machine washable on gentle cycle"
    ],
    stock: 60,
    freeShipping: true
  },
  {
    title: "Ceramic Table Lamp",
    categorySlug: "home-living",
    price: 1850,
    keyword: "tablelamp",
    lock: 222,
    rating: 4.5,
    reviewCount: 61,
    soldCount: 180,
    location: "Dhaka",
    description:
      "A hand finished ceramic base gives this table lamp a warm, grounded look. The linen shade softens the light for a calm reading corner or bedside table.",
    highlights: [
      "Hand finished ceramic base",
      "Linen fabric shade",
      "In line on and off switch",
      "Suitable for LED or standard bulbs"
    ],
    stock: 34,
    freeShipping: false
  },
  {
    title: "Non Stick Cookware Set 5 Pieces",
    categorySlug: "home-living",
    price: 3400,
    originalPrice: 4200,
    keyword: "cookware",
    lock: 223,
    rating: 4.7,
    reviewCount: 205,
    soldCount: 690,
    location: "Chattogram",
    description:
      "This five piece set covers everything from a quick fry to a slow simmer. The non stick coating means less oil is needed and clean up takes minutes.",
    highlights: [
      "Five piece cookware set",
      "Non stick coating",
      "Heat resistant handles",
      "Compatible with gas and electric stoves"
    ],
    stock: 45,
    freeShipping: true
  },
  {
    title: "Bamboo Storage Basket Set",
    categorySlug: "home-living",
    price: 950,
    keyword: "basket",
    lock: 224,
    rating: 4.3,
    reviewCount: 52,
    soldCount: 210,
    location: "Dhaka",
    description:
      "Keep shelves and closets tidy with this set of three bamboo baskets. Each one is woven by hand and sized to nest inside the next for easy storage.",
    highlights: [
      "Set of three nesting baskets",
      "Hand woven bamboo",
      "Built in carry handles",
      "Lightweight and durable"
    ],
    stock: 80,
    freeShipping: true
  },
  {
    title: "Memory Foam Pillow Pair",
    categorySlug: "home-living",
    price: 1650,
    keyword: "pillow",
    lock: 225,
    rating: 4.6,
    reviewCount: 168,
    soldCount: 610,
    location: "Dhaka",
    description:
      "This pair of memory foam pillows contours to your head and neck for steady support through the night. The cover is removable and machine washable.",
    highlights: [
      "Contouring memory foam core",
      "Removable washable cover",
      "Set of two pillows",
      "Retains shape over time"
    ],
    stock: 95,
    freeShipping: true
  },
  {
    title: "Vitamin C Brightening Serum",
    categorySlug: "beauty-care",
    price: 750,
    keyword: "serum",
    lock: 231,
    rating: 4.5,
    reviewCount: 289,
    soldCount: 1340,
    location: "Dhaka",
    description:
      "This lightweight serum absorbs quickly and works to even out skin tone with regular use. A little goes a long way in a morning or evening routine.",
    highlights: [
      "Formulated with vitamin C",
      "Lightweight, fast absorbing",
      "Suitable for daily use",
      "30 milliliter bottle"
    ],
    stock: 140,
    freeShipping: true
  },
  {
    title: "Herbal Shampoo and Conditioner Set",
    categorySlug: "beauty-care",
    price: 680,
    keyword: "shampoo",
    lock: 232,
    rating: 4.2,
    reviewCount: 132,
    soldCount: 560,
    location: "Chattogram",
    description:
      "Made with a blend of herbal extracts, this shampoo and conditioner set cleans gently while leaving hair soft and easy to manage.",
    highlights: [
      "Herbal extract formula",
      "Sulfate free cleansing",
      "Shampoo and conditioner pair",
      "Suitable for daily wash"
    ],
    stock: 100,
    freeShipping: true
  },
  {
    title: "Matte Finish Lipstick Set",
    categorySlug: "beauty-care",
    price: 890,
    keyword: "lipstick",
    lock: 233,
    rating: 4.4,
    reviewCount: 201,
    soldCount: 720,
    location: "Dhaka",
    description:
      "A set of four matte lipsticks in everyday shades. The formula glides on smoothly and stays put through a full day.",
    highlights: [
      "Set of four matte shades",
      "Long wearing formula",
      "Smooth, even application",
      "Lightweight on the lips"
    ],
    stock: 75,
    freeShipping: true
  },
  {
    title: "Aloe Vera Soothing Gel",
    categorySlug: "beauty-care",
    price: 320,
    keyword: "aloevera",
    lock: 234,
    rating: 4.3,
    reviewCount: 96,
    soldCount: 480,
    location: "Dhaka",
    description:
      "This gel cools and soothes skin after sun exposure or a long day. It absorbs quickly without leaving a sticky residue.",
    highlights: [
      "Soothing aloe vera base",
      "Fast absorbing gel texture",
      "Suitable for face and body",
      "200 gram jar"
    ],
    stock: 160,
    freeShipping: true
  },
  {
    title: "Rose Water Facial Toner",
    categorySlug: "beauty-care",
    price: 410,
    keyword: "rosewater",
    lock: 235,
    rating: 4.1,
    reviewCount: 68,
    soldCount: 310,
    location: "Dhaka",
    description:
      "A gentle toner distilled from rose petals that refreshes skin and preps it for the next step in your routine.",
    highlights: [
      "Distilled rose petal water",
      "Alcohol free formula",
      "Refreshes and preps skin",
      "200 milliliter bottle"
    ],
    stock: 130,
    freeShipping: true
  },
  {
    title: "Yoga Mat with Carry Strap",
    categorySlug: "sports-outdoor",
    price: 990,
    keyword: "yogamat",
    lock: 241,
    rating: 4.5,
    reviewCount: 174,
    soldCount: 640,
    location: "Dhaka",
    description:
      "A cushioned yoga mat with enough grip to hold steady through a full practice. The included strap makes it easy to carry to a class or the park.",
    highlights: [
      "6 millimeter cushioned thickness",
      "Non slip textured surface",
      "Includes carry strap",
      "Rolls up for easy storage"
    ],
    stock: 85,
    freeShipping: true
  },
  {
    title: "Adjustable Dumbbell Set",
    categorySlug: "sports-outdoor",
    price: 3200,
    keyword: "dumbbell",
    lock: 242,
    rating: 4.6,
    reviewCount: 112,
    soldCount: 305,
    location: "Gazipur",
    description:
      "This adjustable set replaces a full rack of weights with two dumbbells that scale from light to heavy. A twist lock keeps plates secure during a workout.",
    highlights: [
      "Adjustable from 2.5 to 20 kilograms",
      "Twist lock plate system",
      "Compact storage footprint",
      "Pair of dumbbells included"
    ],
    stock: 30,
    freeShipping: false
  },
  {
    title: "Trail Running Shoes",
    categorySlug: "sports-outdoor",
    price: 2650,
    originalPrice: 3300,
    keyword: "runningshoes",
    lock: 243,
    rating: 4.5,
    reviewCount: 198,
    soldCount: 590,
    location: "Dhaka",
    description:
      "Built for uneven ground, these trail shoes grip loose surfaces while keeping your stride cushioned. Breathable mesh keeps feet cool on longer runs.",
    highlights: [
      "Grippy outsole for loose terrain",
      "Breathable mesh upper",
      "Cushioned midsole",
      "Reinforced toe cap"
    ],
    stock: 68,
    freeShipping: true
  },
  {
    title: "Insulated Sports Water Bottle",
    categorySlug: "sports-outdoor",
    price: 450,
    keyword: "waterbottle",
    lock: 244,
    rating: 4.4,
    reviewCount: 240,
    soldCount: 980,
    location: "Dhaka",
    description:
      "Double wall insulation keeps drinks cold for hours, even during a long hike or gym session. The wide mouth makes it easy to add ice.",
    highlights: [
      "Double wall vacuum insulation",
      "Keeps drinks cold up to 24 hours",
      "Leak proof lid",
      "750 milliliter capacity"
    ],
    stock: 200,
    freeShipping: true
  },
  {
    title: "Foldable Camping Chair",
    categorySlug: "sports-outdoor",
    price: 1400,
    keyword: "campingchair",
    lock: 245,
    rating: 4.2,
    reviewCount: 58,
    soldCount: 190,
    location: "Chattogram",
    description:
      "This camping chair folds down to the size of an umbrella and sets up in seconds. A side pocket keeps a drink or phone within reach.",
    highlights: [
      "Folds flat for storage",
      "Sturdy steel frame",
      "Side pocket for accessories",
      "Includes a carry bag"
    ],
    stock: 55,
    freeShipping: true
  },
  {
    title: "Leather Laptop Backpack",
    categorySlug: "bags-shoes",
    price: 2900,
    keyword: "backpack",
    lock: 251,
    rating: 4.6,
    reviewCount: 187,
    soldCount: 520,
    location: "Dhaka",
    description:
      "A padded laptop compartment and structured leather exterior make this backpack equally suited for the office or a weekend trip.",
    highlights: [
      "Fits laptops up to 15 inches",
      "Water resistant leather exterior",
      "Padded shoulder straps",
      "Multiple interior pockets"
    ],
    stock: 40,
    freeShipping: true
  },
  {
    title: "Canvas Tote Bag",
    categorySlug: "bags-shoes",
    price: 750,
    keyword: "totebag",
    lock: 252,
    rating: 4.3,
    reviewCount: 94,
    soldCount: 410,
    location: "Dhaka",
    description:
      "A sturdy canvas tote that holds its shape through daily use. Reinforced handles make it comfortable to carry even when fully loaded.",
    highlights: [
      "Heavy duty canvas fabric",
      "Reinforced stitched handles",
      "Interior zip pocket",
      "Machine washable"
    ],
    stock: 120,
    freeShipping: true
  },
  {
    title: "Men Formal Leather Shoes",
    categorySlug: "bags-shoes",
    price: 3100,
    keyword: "leathershoes",
    lock: 253,
    rating: 4.5,
    reviewCount: 141,
    soldCount: 360,
    location: "Narayanganj",
    description:
      "These formal shoes are built from genuine leather with a cushioned insole that stays comfortable through a full work day.",
    highlights: [
      "Genuine leather upper",
      "Cushioned insole",
      "Slip resistant sole",
      "Available in three colors"
    ],
    stock: 50,
    freeShipping: true
  },
  {
    title: "Women Ankle Strap Sandals",
    categorySlug: "bags-shoes",
    price: 1650,
    keyword: "sandals",
    lock: 254,
    rating: 4.2,
    reviewCount: 76,
    soldCount: 280,
    location: "Dhaka",
    description:
      "A low block heel and adjustable ankle strap make these sandals comfortable for long days on your feet without giving up style.",
    highlights: [
      "Adjustable ankle strap",
      "Low block heel",
      "Cushioned footbed",
      "Available in four colors"
    ],
    stock: 65,
    freeShipping: true
  },
  {
    title: "Kids School Backpack",
    categorySlug: "bags-shoes",
    price: 1250,
    keyword: "kidsbackpack",
    lock: 255,
    rating: 4.6,
    reviewCount: 122,
    soldCount: 470,
    location: "Dhaka",
    description:
      "Sized for younger students, this backpack has padded straps and enough room for books, a lunch box and a water bottle.",
    highlights: [
      "Padded adjustable straps",
      "Main compartment plus side pockets",
      "Reflective safety strip",
      "Lightweight build"
    ],
    stock: 90,
    freeShipping: true
  },
  {
    title: "Organic Basmati Rice 5kg",
    categorySlug: "groceries",
    price: 780,
    keyword: "rice",
    lock: 261,
    rating: 4.7,
    reviewCount: 310,
    soldCount: 1600,
    location: "Dhaka",
    description:
      "Long grain basmati rice grown without synthetic fertilizers. Each grain cooks up light and fluffy with a natural aroma.",
    highlights: [
      "5 kilogram pack",
      "Grown without synthetic fertilizers",
      "Long grain, aromatic variety",
      "Sealed for freshness"
    ],
    stock: 220,
    freeShipping: true
  },
  {
    title: "Cold Pressed Mustard Oil 1L",
    categorySlug: "groceries",
    price: 320,
    keyword: "mustardoil",
    lock: 262,
    rating: 4.5,
    reviewCount: 158,
    soldCount: 890,
    location: "Dhaka",
    description:
      "Extracted using a traditional cold press method, this mustard oil keeps its natural pungency and flavor for everyday cooking.",
    highlights: [
      "Cold pressed extraction",
      "1 liter bottle",
      "No added preservatives",
      "Suitable for cooking and frying"
    ],
    stock: 180,
    freeShipping: true
  },
  {
    title: "Mixed Dry Fruits Pack 500g",
    categorySlug: "groceries",
    price: 890,
    keyword: "dryfruits",
    lock: 263,
    rating: 4.6,
    reviewCount: 122,
    soldCount: 540,
    location: "Chattogram",
    description:
      "A mix of almonds, cashews, raisins and walnuts, sorted and packed for a quick snack or a topping for breakfast.",
    highlights: [
      "500 gram mixed pack",
      "Almonds, cashews, raisins and walnuts",
      "Sorted and cleaned",
      "Resealable pack"
    ],
    stock: 95,
    freeShipping: true
  },
  {
    title: "Natural Honey 500g",
    categorySlug: "groceries",
    price: 550,
    keyword: "honey",
    lock: 264,
    rating: 4.7,
    reviewCount: 205,
    soldCount: 760,
    location: "Sylhet",
    description:
      "Raw, unprocessed honey collected from wildflower fields. No sugar or syrup is added during packing.",
    highlights: [
      "500 gram glass jar",
      "Raw and unprocessed",
      "No added sugar",
      "Collected from wildflower fields"
    ],
    stock: 140,
    freeShipping: true
  },
  {
    title: "Assorted Spice Box Set",
    categorySlug: "groceries",
    price: 640,
    keyword: "spices",
    lock: 265,
    rating: 4.4,
    reviewCount: 84,
    soldCount: 350,
    location: "Dhaka",
    description:
      "A set of seven everyday spices in a stainless steel box with a clear lid, so you can see and reach for what you need while cooking.",
    highlights: [
      "Seven spice stainless steel box",
      "Clear lid for quick identification",
      "Includes turmeric, cumin and more",
      "Compact countertop size"
    ],
    stock: 110,
    freeShipping: true
  },
  {
    title: "Building Blocks Set 200 Pieces",
    categorySlug: "toys-kids",
    price: 1150,
    keyword: "buildingblocks",
    lock: 271,
    rating: 4.6,
    reviewCount: 176,
    soldCount: 620,
    location: "Dhaka",
    description:
      "This 200 piece block set encourages open ended building and problem solving. Pieces are compatible with most major block brands.",
    highlights: [
      "200 interlocking pieces",
      "Compatible with major block brands",
      "Comes with a storage box",
      "Recommended for ages 4 and up"
    ],
    stock: 100,
    freeShipping: true
  },
  {
    title: "Remote Control Racing Car",
    categorySlug: "toys-kids",
    price: 1450,
    keyword: "rccar",
    lock: 272,
    rating: 4.4,
    reviewCount: 133,
    soldCount: 480,
    location: "Dhaka",
    description:
      "This racing car reaches full speed in seconds and handles sharp turns without tipping. The rechargeable battery is included.",
    highlights: [
      "Rechargeable battery included",
      "Full function remote control",
      "Durable shockproof shell",
      "Recommended for ages 6 and up"
    ],
    stock: 60,
    freeShipping: true
  },
  {
    title: "Soft Plush Teddy Bear",
    categorySlug: "toys-kids",
    price: 650,
    keyword: "teddybear",
    lock: 273,
    rating: 4.7,
    reviewCount: 210,
    soldCount: 900,
    location: "Dhaka",
    description:
      "Made from soft plush fabric, this teddy bear is a gentle companion for nap time or play time, and it is machine washable.",
    highlights: [
      "Soft plush fabric",
      "Machine washable",
      "35 centimeters tall",
      "Suitable from birth"
    ],
    stock: 150,
    freeShipping: true
  },
  {
    title: "Educational Puzzle Board",
    categorySlug: "toys-kids",
    price: 480,
    keyword: "puzzle",
    lock: 274,
    rating: 4.3,
    reviewCount: 67,
    soldCount: 290,
    location: "Chattogram",
    description:
      "A wooden puzzle board that helps young children learn shapes, numbers and letters through hands on play.",
    highlights: [
      "Solid wood construction",
      "Teaches shapes, numbers and letters",
      "Non toxic paint finish",
      "Recommended for ages 2 and up"
    ],
    stock: 130,
    freeShipping: true
  },
  {
    title: "Kids Art and Craft Kit",
    categorySlug: "toys-kids",
    price: 720,
    keyword: "artkit",
    lock: 275,
    rating: 4.5,
    reviewCount: 98,
    soldCount: 340,
    location: "Dhaka",
    description:
      "This kit includes crayons, paper, stickers and safety scissors so children can start creating right away.",
    highlights: [
      "All in one craft supplies",
      "Child safe scissors included",
      "Reusable storage case",
      "Recommended for ages 5 and up"
    ],
    stock: 105,
    freeShipping: true
  }
];

export const products: Product[] = raw.map((item, index) => {
  const categoryImages: Record<string, string[]> = {
    electronics: [
      "1496181133206-80ce9b88a853",
      "1505740420928-5e560c06d30e",
      "1546868871-7041f2a55e12",
      "1583394838336-acd977736f90",
      "1523275335684-37898b6baf30",
    ],
    fashion: [
      "1515886657613-9f3515b0c78f",
      "1529139574466-a30ac1702f2b",
      "1434389670869-c8c5c5c96318",
      "1551028719-00167b16eac5",
    ],
    "home-living": [
      "1583847268964-b185b1745484",
      "1513694203232-719a280e022f",
      "1505691938895-1758d7feb511",
      "1524758631624-e2822e304c36",
    ],
    "beauty-care": [
      "1596462502278-27bfdc403348",
      "1556228578-0d85b1a4d571",
      "1617897903246-719242758050",
    ],
    "sports-outdoor": [
      "1515523110800-9415d13b84a8",
      "1517836357463-d25dfeac3438",
      "1483721310020-03333e577078",
    ],
    "toys-kids": [
      "1596461404969-9ae70f2830c1",
      "1587654780291-39c9404d746b",
    ],
    groceries: [
      "1542838132-92c53300491e",
      "1578916171728-46686eac8d58",
      "1587049352851-8d4e89134782",
    ]
  };

  const images = categoryImages[item.categorySlug] || categoryImages["electronics"];
  const imageId = images[(item.lock + index) % images.length];

  const slug = slugify(item.title);
  const image = `https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&w=800&q=80`;
  const gallery = [
    image,
    `https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&w=800&q=80&sat=-100`,
    `https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&w=800&q=80&con=2`
  ];
  return {
    id: `p-${index + 1}`,
    slug,
    title: item.title,
    categorySlug: item.categorySlug,
    price: item.price,
    originalPrice: item.originalPrice,
    currency: "BDT",
    rating: item.rating,
    reviewCount: item.reviewCount,
    soldCount: item.soldCount,
    image,
    gallery,
    description: item.description,
    highlights: item.highlights,
    stock: item.stock,
    location: item.location,
    freeShipping: item.freeShipping
  };
});

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getDealProducts(): Product[] {
  return products.filter((p) => p.originalPrice && p.originalPrice > p.price);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, limit);
}
