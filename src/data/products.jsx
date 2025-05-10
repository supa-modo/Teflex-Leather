// Brand data collection
export const brands = {
  kingsman: {
    id: "kingsman",
    name: "KINGSMAN",
    tagline: "Elegance in every detail",
    description: "Our premium line of executive leather goods, crafted for the distinguished gentleman. The Kingsman collection embodies sophistication, precision, and timeless style.",
    longDescription: "Inspired by the refined aesthetics of bespoke British tailoring, the Kingsman collection represents the pinnacle of our craftsmanship. Each piece is meticulously handcrafted using the finest full-grain leather, featuring elegant brass hardware and our signature hand-stitched details. The collection is designed for the modern professional who demands both impeccable style and practical functionality.",
    heroImage: "/shoe-01.jpg",
    accentColor: "bg-leather-dark"
  },
  nachuchi: {
    id: "nachuchi",
    name: "NACHUCHI",
    tagline: "Contemporary African luxury",
    description: "A fusion of traditional East African artistry and contemporary design. NaChuchi celebrates our heritage with modern sensibilities.",
    longDescription: "NaChuchi, meaning 'of our heritage' in Swahili, is our tribute to East African craftsmanship. This collection combines traditional techniques with contemporary design elements, creating pieces that are both culturally rich and modern in appeal. We use locally sourced leather with natural variations in texture and color, celebrating the authentic character of each hide. The collection features distinctive patterns inspired by East African art and architecture.",
    heroImage: "/shoe-8.jpg",
    accentColor: "bg-leather-light"
  },
  savanna: {
    id: "savanna",
    name: "SAVANNA",
    tagline: "Rugged elegance for the adventurer",
    description: "Durable, weather-resistant leather goods designed for the modern explorer. Savanna combines functionality with sophisticated safari-inspired aesthetics.",
    longDescription: "The Savanna collection draws inspiration from the untamed beauty of the East African landscape. Crafted from rugged, oil-tanned leather that develops a rich patina over time, these pieces are designed to withstand the elements while maintaining their elegant appeal. Each item features reinforced stitching, weather-resistant treatments, and practical design elements that cater to both urban professionals and outdoor enthusiasts.",
    heroImage: "/shoe-2.jpg",
    accentColor: "bg-accent-default"
  },
  karavan: {
    id: "karavan",
    name: "KARAVAN",
    tagline: "Affordability and style",
    description: "Our accessible line of quality leather goods, offering the perfect balance of affordability and craftsmanship for everyday use.",
    longDescription: "The Karavan collection makes our quality leather goods accessible to a wider audience without compromising on craftsmanship. Using carefully selected leather and efficient production techniques, we've created a line that offers excellent value while maintaining our commitment to quality. These pieces feature clean, contemporary designs with simplified construction, making them perfect for everyday use.",
    heroImage: "/bag-2.jpg",
    accentColor: "bg-primary-500"
  }
};

// Sample product data
export const products = [
    {
      id: 1,
      name: "Executive Oxford Shoes",
      description: "Premium handcrafted oxford shoes with a sleek design and comfortable fit.",
      price: 249.99,
      imageUrl: "/shoe-01.jpg",
      category: "Footwear",
      brand: "Kingsman",
      featured: true,
      details: {
        material: "Full-grain leather",
        sole: "Leather with rubber grip",
        lining: "Calfskin leather",
        color: "Dark Brown"
      }
    },
    {
      id: 2,
      name: "Classic Leather Briefcase",
      description: "Elegant leather briefcase with multiple compartments for the modern professional.",
      price: 329.99,
      imageUrl: "/bag-1.jpg",
      category: "Bags",
      brand: "Kingsman",
      featured: true,
      details: {
        material: "Premium cowhide leather",
        hardware: "Brass fittings",
        dimensions: "15\" x 11\" x 4\"",
        color: "Cognac"
      }
    },
    {
      id: 3,
      name: "Handcrafted Belt",
      description: "Meticulously crafted leather belt with a timeless design.",
      price: 89.99,
      imageUrl: "/belt-1.jpg",
      category: "Accessories",
      brand: "Kingsman",
      featured: false,
      details: {
        material: "Full-grain leather",
        buckle: "Solid brass",
        width: "1.25 inches",
        color: "Black"
      }
    },
    {
      id: 4,
      name: "Safari Leather Boots",
      description: "Rugged yet refined boots perfect for both urban and outdoor adventures.",
      price: 279.99,
      imageUrl: "/shoe-2.jpg",
      category: "Footwear",
      brand: "Savanna",
      featured: true,
      details: {
        material: "Oil-tanned leather",
        sole: "Vibram rubber",
        lining: "Moisture-wicking fabric",
        color: "Tan"
      }
    },
    {
      id: 5,
      name: "Slim Leather Wallet",
      description: "Minimalist wallet with RFID protection and premium leather construction.",
      price: 69.99,
      imageUrl: "/wallet-1.jpg",
      category: "Accessories",
      brand: "NaChuchi",
      featured: false,
      details: {
        material: "Vegetable-tanned leather",
        capacity: "6 cards, bills",
        dimensions: "4\" x 3\"",
        color: "Chestnut"
      }
    },
    {
      id: 6,
      name: "Leather Messenger Bag",
      description: "Versatile messenger bag with adjustable strap and multiple pockets.",
      price: 199.99,
      imageUrl: "/bag-2.jpg",
      category: "Bags",
      brand: "Karavan",
      featured: true,
      details: {
        material: "Full-grain leather",
        hardware: "Antique brass",
        dimensions: "14\" x 10\" x 3\"",
        color: "Dark Brown"
      }
    },
    {
      id: 7,
      name: "Handmade Leather Loafers",
      description: "Comfortable slip-on loafers with hand-stitched details.",
      price: 189.99,
      imageUrl: "/shoe-8.jpg",
      category: "Footwear",
      brand: "NaChuchi",
      featured: false,
      details: {
        material: "Soft calfskin leather",
        sole: "Leather with rubber inserts",
        lining: "Leather",
        color: "Burgundy"
      }
    },
    {
      id: 8,
      name: "Leather Travel Duffel",
      description: "Spacious duffel bag perfect for weekend getaways or business trips.",
      price: 349.99,
      imageUrl: "/bag-3.jpg",
      category: "Bags",
      brand: "Savanna",
      featured: true,
      details: {
        material: "Buffalo leather",
        hardware: "Brass with zipper closure",
        dimensions: "22\" x 12\" x 10\"",
        color: "Vintage Brown"
      }
    },
    {
      id: 9,
      name: "Classic Derby Shoes",
      description: "Timeless derby shoes with Goodyear welt construction for durability.",
      price: 229.99,
      imageUrl: "/shoe-9.jpg",
      category: "Footwear",
      brand: "Kingsman",
      featured: false,
      details: {
        material: "Full-grain leather",
        sole: "Leather with rubber heel",
        lining: "Leather",
        color: "Black"
      }
    },
    {
      id: 10,
      name: "Leather Card Holder",
      description: "Slim and elegant card holder for essential cards.",
      price: 49.99,
      imageUrl: "/wallet-2.jpg",
      category: "Accessories",
      brand: "Karavan",
      featured: false,
      details: {
        material: "Vegetable-tanned leather",
        capacity: "4-6 cards",
        dimensions: "4\" x 2.75\"",
        color: "Tan"
      }
    },
    {
      id: 11,
      name: "Handcrafted Leather Sandals",
      description: "Comfortable and stylish sandals for casual wear.",
      price: 119.99,
      imageUrl: "/shoe-02.jpg",
      category: "Footwear",
      brand: "NaChuchi",
      featured: true,
      details: {
        material: "Full-grain leather",
        sole: "Rubber",
        lining: "Leather",
        color: "Brown"
      }
    },
    {
      id: 12,
      name: "Executive Leather Backpack",
      description: "Sophisticated backpack designed for the modern professional.",
      price: 289.99,
      imageUrl: "/bag-4.jpg",
      category: "Bags",
      brand: "Kingsman",
      featured: true,
      details: {
        material: "Premium cowhide leather",
        hardware: "Antique brass",
        dimensions: "16\" x 12\" x 5\"",
        color: "Black"
      }
    }
  ];