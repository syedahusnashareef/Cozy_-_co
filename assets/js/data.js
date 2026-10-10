const categories = [
  {
    "name": "Coffee",
    "category": "Coffee",
    "note": "Slow-sipped favourites",
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=90"
  },
  {
    "name": "French Fries",
    "category": "French Fries",
    "note": "Golden, crisp & seasoned",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=90"
  },
  {
    "name": "Burgers",
    "category": "Burgers",
    "note": "Indian-inspired favourites",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=90"
  },
  {
    "name": "Beverages",
    "category": "Beverages",
    "note": "Chilled and refreshing",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1200&q=90"
  },
  {
    "name": "Pizza",
    "category": "Pizza",
    "note": "Cheesy oven-baked comfort",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=90"
  },
  {
    "name": "Waffles",
    "category": "Waffles",
    "note": "Warm, golden & indulgent",
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=90"
  },
  {
    "name": "Croissants",
    "category": "Croissants",
    "note": "Buttery bakery favourites",
    "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=90"
  },
  {
    "name": "Croutons & Starters",
    "category": "Croutons & Starters",
    "note": "Crispy bites to share",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=90"
  },
  {
    "name": "Desserts",
    "category": "Desserts",
    "note": "A little sweet moment",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=90"
  },
  {
    "name": "Sandwiches & Pasta",
    "category": "Sandwiches & Pasta",
    "note": "Comfort classics",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=90"
  }
];
window.COZY_CATEGORIES = categories;
window.COZY_MENU = [
  {
    "id": "cozy-1",
    "name": "Classic Cappuccino",
    "category": "Coffee",
    "price": 249,
    "description": "Espresso topped with silky milk foam.",
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=90",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-2",
    "name": "Café Latte",
    "category": "Coffee",
    "price": 269,
    "description": "Smooth espresso with steamed milk.",
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=90",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-3",
    "name": "Caramel Latte",
    "category": "Coffee",
    "price": 299,
    "description": "Creamy latte with caramel sweetness.",
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=90",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-4",
    "name": "Café Mocha",
    "category": "Coffee",
    "price": 319,
    "description": "Espresso, chocolate and steamed milk.",
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=90",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-5",
    "name": "Hazelnut Iced Coffee",
    "category": "Coffee",
    "price": 329,
    "description": "Chilled coffee with mellow hazelnut notes.",
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=90",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-6",
    "name": "Cozy Signature Cold Coffee",
    "category": "Coffee",
    "price": 349,
    "description": "A thick café-style cold coffee with a creamy finish.",
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=90",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-7",
    "name": "Classic Salted Fries",
    "category": "French Fries",
    "price": 229,
    "description": "Golden fries with a light seasoning.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=90",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-8",
    "name": "Peri Peri Fries",
    "category": "French Fries",
    "price": 249,
    "description": "Crispy fries tossed in peri-peri spice.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=90",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-9",
    "name": "Tandoori Masala Fries",
    "category": "French Fries",
    "price": 269,
    "description": "Indian-style masala with a smoky kick.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-10",
    "name": "Cheesy Loaded Fries",
    "category": "French Fries",
    "price": 329,
    "description": "Fries covered with creamy cheese sauce.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-11",
    "name": "Chilli Cheese Fries",
    "category": "French Fries",
    "price": 349,
    "description": "A spicy, cheesy loaded favourite.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-12",
    "name": "Truffle Herb Fries",
    "category": "French Fries",
    "price": 399,
    "description": "Herbs and a rich truffle-style finish.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-13",
    "name": "Indian Aloo Tikki Burger",
    "category": "Burgers",
    "price": 249,
    "description": "Crispy potato tikki, fresh vegetables and house sauce.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-14",
    "name": "Paneer Tikka Burger",
    "category": "Burgers",
    "price": 299,
    "description": "Tandoori paneer, crunchy salad and mint sauce.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-15",
    "name": "Masala Veg Cheese Burger",
    "category": "Burgers",
    "price": 279,
    "description": "Spiced vegetable patty with melted cheese.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-16",
    "name": "Tandoori Crunch Burger",
    "category": "Burgers",
    "price": 329,
    "description": "Smoky Indian-inspired flavours with a crunchy patty.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-17",
    "name": "Double Cheese Veg Burger",
    "category": "Burgers",
    "price": 379,
    "description": "A hearty veg patty with double cheese.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-18",
    "name": "Spicy Peri Peri Burger",
    "category": "Burgers",
    "price": 349,
    "description": "A spicy patty, fresh salad and creamy peri-peri sauce.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-19",
    "name": "Classic Lemon Mint Cooler",
    "category": "Beverages",
    "price": 229,
    "description": "Fresh lime and mint over ice.",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-20",
    "name": "Blue Lagoon Citrus Cooler",
    "category": "Beverages",
    "price": 249,
    "description": "A bright citrus cooler served chilled.",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-21",
    "name": "Watermelon Mint Cooler",
    "category": "Beverages",
    "price": 259,
    "description": "Watermelon and mint blended fresh-style.",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-22",
    "name": "Mango Cream Shake",
    "category": "Beverages",
    "price": 299,
    "description": "A creamy mango shake.",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-23",
    "name": "Chocolate Thick Shake",
    "category": "Beverages",
    "price": 329,
    "description": "A rich chocolate milkshake.",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-24",
    "name": "Strawberry Milkshake",
    "category": "Beverages",
    "price": 299,
    "description": "Strawberry flavour blended until smooth.",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-25",
    "name": "Margherita Cheese Pizza",
    "category": "Pizza",
    "price": 299,
    "description": "Tomato, mozzarella and fragrant herbs.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-26",
    "name": "Farmhouse Veg Pizza",
    "category": "Pizza",
    "price": 349,
    "description": "Capsicum, onion, tomato and mushrooms.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-27",
    "name": "Paneer Tikka Pizza",
    "category": "Pizza",
    "price": 399,
    "description": "Tandoori paneer, peppers and cheese.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-28",
    "name": "Peri Peri Corn Pizza",
    "category": "Pizza",
    "price": 349,
    "description": "Sweet corn, peppers and peri-peri seasoning.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-29",
    "name": "Four Cheese Pizza",
    "category": "Pizza",
    "price": 499,
    "description": "A rich blend of four cheeses.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-30",
    "name": "Chilli Paneer Pizza",
    "category": "Pizza",
    "price": 429,
    "description": "Indian-style chilli paneer with a cheesy finish.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-31",
    "name": "Belgian Chocolate Waffle",
    "category": "Waffles",
    "price": 299,
    "description": "Warm waffle with chocolate drizzle.",
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-32",
    "name": "Nutella Crunch Waffle",
    "category": "Waffles",
    "price": 349,
    "description": "Chocolate-hazelnut spread and crunchy topping.",
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-33",
    "name": "Oreo Cream Waffle",
    "category": "Waffles",
    "price": 329,
    "description": "Cookie crumble with a smooth cream finish.",
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-34",
    "name": "Brownie Blast Waffle",
    "category": "Waffles",
    "price": 399,
    "description": "Brownie pieces and a generous chocolate finish.",
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-35",
    "name": "Strawberry Cream Waffle",
    "category": "Waffles",
    "price": 329,
    "description": "Strawberry and cream over a golden waffle.",
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-36",
    "name": "Lotus Biscoff Waffle",
    "category": "Waffles",
    "price": 449,
    "description": "Caramelised biscuit spread with a delicate crunch.",
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-37",
    "name": "Classic Butter Croissant",
    "category": "Croissants",
    "price": 249,
    "description": "Flaky, golden layers with a buttery centre.",
    "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-38",
    "name": "Chocolate Filled Croissant",
    "category": "Croissants",
    "price": 299,
    "description": "A crisp croissant with chocolate filling.",
    "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-39",
    "name": "Almond Croissant",
    "category": "Croissants",
    "price": 329,
    "description": "Toasted almond topping and a delicate crumb.",
    "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-40",
    "name": "Paneer Tikka Croissant",
    "category": "Croissants",
    "price": 349,
    "description": "A savoury Indian-inspired paneer filling.",
    "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-41",
    "name": "Cheese & Herb Croissant",
    "category": "Croissants",
    "price": 319,
    "description": "Melted cheese with aromatic herbs.",
    "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-42",
    "name": "Chocolate Almond Croissant",
    "category": "Croissants",
    "price": 379,
    "description": "Chocolate filling with toasted almond pieces.",
    "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-43",
    "name": "Herb Garlic Croutons",
    "category": "Croutons & Starters",
    "price": 229,
    "description": "Toasted bread bites with garlic and herbs.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-44",
    "name": "Cheesy Crouton Bowl",
    "category": "Croutons & Starters",
    "price": 269,
    "description": "Golden croutons finished with melted cheese.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-45",
    "name": "Masala Crouton Chaat",
    "category": "Croutons & Starters",
    "price": 249,
    "description": "Crispy croutons tossed in Indian-style masala.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-46",
    "name": "Chilli Cheese Toast Bites",
    "category": "Croutons & Starters",
    "price": 279,
    "description": "Toasted bites with cheese and a gentle chilli kick.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-47",
    "name": "Loaded Nachos",
    "category": "Croutons & Starters",
    "price": 329,
    "description": "Crispy nachos with cheese and savoury toppings.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-48",
    "name": "Crispy Veg Pops",
    "category": "Croutons & Starters",
    "price": 299,
    "description": "Golden vegetable bites served with dip.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-49",
    "name": "Classic Fudge Brownie",
    "category": "Desserts",
    "price": 249,
    "description": "A rich brownie with a fudgy centre.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-50",
    "name": "Chocolate Lava Cake",
    "category": "Desserts",
    "price": 299,
    "description": "Warm chocolate cake with a molten centre.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-51",
    "name": "New York Cheesecake",
    "category": "Desserts",
    "price": 399,
    "description": "Creamy cheesecake on a buttery crumb base.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-52",
    "name": "Red Velvet Cake Slice",
    "category": "Desserts",
    "price": 329,
    "description": "Soft red velvet with a creamy frosting.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-53",
    "name": "Brownie Sundae",
    "category": "Desserts",
    "price": 349,
    "description": "Brownie pieces with ice cream and chocolate sauce.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-54",
    "name": "Choco Chip Cookie Stack",
    "category": "Desserts",
    "price": 229,
    "description": "Chocolate-chip cookies for a sweet bite.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-55",
    "name": "Grilled Paneer Sandwich",
    "category": "Sandwiches & Pasta",
    "price": 299,
    "description": "Grilled paneer, peppers and toasted bread.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-56",
    "name": "Corn Cheese Sandwich",
    "category": "Sandwiches & Pasta",
    "price": 269,
    "description": "Sweet corn and melted cheese in toasted bread.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-57",
    "name": "Tandoori Veg Sandwich",
    "category": "Sandwiches & Pasta",
    "price": 289,
    "description": "Indian-spiced vegetables with a creamy spread.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-58",
    "name": "Creamy White Sauce Pasta",
    "category": "Sandwiches & Pasta",
    "price": 349,
    "description": "Pasta tossed in a smooth creamy sauce.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-59",
    "name": "Arrabbiata Penne Pasta",
    "category": "Sandwiches & Pasta",
    "price": 329,
    "description": "Penne with tomato and chilli sauce.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-60",
    "name": "Paneer Tikka Pasta",
    "category": "Sandwiches & Pasta",
    "price": 399,
    "description": "Creamy pasta with paneer tikka flavours.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=90",
    "featured": false,
    "vegetarian": true
  }
];
window.COZY_COMBOS = [
  {
    "name": "Cozy Burger Box",
    "items": "Indian Aloo Tikki Burger + Peri Peri Fries + Classic Lemon Mint Cooler",
    "price": 699,
    "tag": "SIGNATURE COMBO",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=90",
    "description": "A full Indian-inspired burger meal with crispy fries and a chilled drink."
  },
  {
    "name": "Pizza Night for Two",
    "items": "Farmhouse Veg Pizza + 2 Classic Lemon Mint Coolers",
    "price": 799,
    "tag": "FOR TWO",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=90",
    "description": "A cheesy shareable pizza combo for a relaxed catch-up."
  },
  {
    "name": "Waffle & Coffee Date",
    "items": "Nutella Crunch Waffle + 2 Café Lattes",
    "price": 849,
    "tag": "SWEET BREAK",
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=90",
    "description": "A warm waffle and two café lattes for a sweet little date."
  },
  {
    "name": "Croissant Coffee Pair",
    "items": "2 Chocolate Filled Croissants + 2 Classic Cappuccinos",
    "price": 749,
    "tag": "BAKERY FAVOURITE",
    "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=90",
    "description": "Buttery pastry and freshly brewed coffee, made to pair."
  }
];
