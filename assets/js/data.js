const categories = [
  {
    "name": "Coffee",
    "category": "Coffee",
    "note": "Caramel lattes, cappuccinos & cold coffee",
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=90"
  },
  {
    "name": "French Fries",
    "category": "French Fries",
    "note": "Classic, peri peri & loaded fries",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1400&q=90"
  },
  {
    "name": "Burgers",
    "category": "Burgers",
    "note": "Indian-inspired café favourites",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=90"
  },
  {
    "name": "Pizza",
    "category": "Pizza",
    "note": "Cheesy oven-baked comfort",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1400&q=90"
  },
  {
    "name": "Waffles",
    "category": "Waffles",
    "note": "Golden waffles & dessert toppings",
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1400&q=90"
  },
  {
    "name": "Brownies & Desserts",
    "category": "Brownies & Desserts",
    "note": "Brownies, lava cake & sweet treats",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1400&q=90"
  },
  {
    "name": "Sandwiches",
    "category": "Sandwiches",
    "note": "Grilled, toasted & generously filled",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1400&q=90"
  },
  {
    "name": "Pasta",
    "category": "Pasta",
    "note": "Creamy, tomato & pesto favourites",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1400&q=90"
  },
  {
    "name": "Beverages",
    "category": "Beverages",
    "note": "Mojitos, Blue Lagoon & shakes",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1400&q=90"
  },
  {
    "name": "Chaat",
    "category": "Chaat",
    "note": "Indian street-food favourites, served café-style",
    "image": "https://images.pexels.com/photos/34507155/pexels-photo-34507155.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];
window.COZY_CATEGORIES = categories;
window.COZY_MENU = [
  {
    "id": "cozy-1",
    "name": "Classic Cappuccino",
    "category": "Coffee",
    "price": 249,
    "description": "Espresso with silky steamed milk and a soft foam finish.",
    "image": "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=1000&q=88",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-2",
    "name": "Café Latte",
    "category": "Coffee",
    "price": 269,
    "description": "Smooth espresso blended with creamy steamed milk.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=88",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-3",
    "name": "Caramel Latte",
    "category": "Coffee",
    "price": 299,
    "description": "Velvety latte finished with rich caramel sweetness.",
    "image": "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=1000&q=88",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-4",
    "name": "Café Mocha",
    "category": "Coffee",
    "price": 319,
    "description": "Espresso, chocolate and steamed milk in one cozy cup.",
    "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=88",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-5",
    "name": "Hazelnut Iced Coffee",
    "category": "Coffee",
    "price": 329,
    "description": "Chilled coffee with mellow hazelnut notes and ice.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=88",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-6",
    "name": "Cozy Signature Cold Coffee",
    "category": "Coffee",
    "price": 349,
    "description": "Thick café-style cold coffee with a creamy finish.",
    "image": "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=1000&q=88",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-7",
    "name": "Classic Salted Fries",
    "category": "French Fries",
    "price": 229,
    "description": "Golden crisp fries finished with a light seasoning.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-8",
    "name": "Peri Peri Fries",
    "category": "French Fries",
    "price": 249,
    "description": "Crispy fries tossed in a bold peri-peri spice blend.",
    "image": "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-9",
    "name": "Tandoori Masala Fries",
    "category": "French Fries",
    "price": 269,
    "description": "Indian-style masala fries with a smoky, tangy kick.",
    "image": "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-10",
    "name": "Cheesy Loaded Fries",
    "category": "French Fries",
    "price": 329,
    "description": "Hot fries layered with a creamy cheese sauce.",
    "image": "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-11",
    "name": "Chilli Cheese Fries",
    "category": "French Fries",
    "price": 349,
    "description": "A spicy, cheesy loaded favourite for sharing.",
    "image": "https://images.unsplash.com/photo-1573019606806-9695d0a9739a?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-12",
    "name": "Truffle Herb Fries",
    "category": "French Fries",
    "price": 399,
    "description": "Crispy fries with herbs and a premium truffle-style finish.",
    "image": "https://images.unsplash.com/photo-1639744091985-3b6b4f6e6c8d?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-13",
    "name": "Indian Aloo Tikki Burger",
    "category": "Burgers",
    "price": 249,
    "description": "Crispy potato tikki, fresh vegetables and house sauce.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-14",
    "name": "Paneer Tikka Burger",
    "category": "Burgers",
    "price": 299,
    "description": "Tandoori paneer, crunchy salad and minty sauce.",
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-15",
    "name": "Masala Veg Cheese Burger",
    "category": "Burgers",
    "price": 279,
    "description": "Spiced vegetable patty with melted cheese.",
    "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-16",
    "name": "Tandoori Crunch Burger",
    "category": "Burgers",
    "price": 329,
    "description": "Smoky Indian-inspired flavours with a crunchy patty.",
    "image": "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-17",
    "name": "Double Cheese Veg Burger",
    "category": "Burgers",
    "price": 379,
    "description": "A hearty veg patty with double melted cheese.",
    "image": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-18",
    "name": "Spicy Peri Peri Burger",
    "category": "Burgers",
    "price": 349,
    "description": "A spicy patty with fresh salad and creamy peri-peri sauce.",
    "image": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-19",
    "name": "Margherita Cheese Pizza",
    "category": "Pizza",
    "price": 299,
    "description": "Tomato, mozzarella and fragrant Italian herbs.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-20",
    "name": "Farmhouse Veg Pizza",
    "category": "Pizza",
    "price": 349,
    "description": "Capsicum, onion, tomato and mushrooms on a cheesy base.",
    "image": "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-21",
    "name": "Paneer Tikka Pizza",
    "category": "Pizza",
    "price": 399,
    "description": "Tandoori paneer, peppers and a creamy cheese blend.",
    "image": "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-22",
    "name": "Spicy Peri Peri Pizza",
    "category": "Pizza",
    "price": 379,
    "description": "A fiery peri-peri sauce with peppers and melted cheese.",
    "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-23",
    "name": "Corn & Cheese Pizza",
    "category": "Pizza",
    "price": 329,
    "description": "Sweet corn, mozzarella and a golden crust.",
    "image": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-24",
    "name": "Cozy Loaded Veg Pizza",
    "category": "Pizza",
    "price": 499,
    "description": "A loaded café-style pizza with generous veggie toppings.",
    "image": "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-25",
    "name": "Classic Belgian Waffle",
    "category": "Waffles",
    "price": 299,
    "description": "Golden waffle with a crisp outside and soft centre.",
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-26",
    "name": "Chocolate Overload Waffle",
    "category": "Waffles",
    "price": 349,
    "description": "Warm waffle drizzled with rich chocolate sauce.",
    "image": "https://images.unsplash.com/photo-1568051243858-533a607809c5?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-27",
    "name": "Oreo Crunch Waffle",
    "category": "Waffles",
    "price": 379,
    "description": "Chocolate waffle topped with cookie crumble.",
    "image": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-28",
    "name": "Strawberry Cream Waffle",
    "category": "Waffles",
    "price": 369,
    "description": "Fresh strawberry-style topping with a creamy finish.",
    "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-29",
    "name": "Lotus Biscoff Waffle",
    "category": "Waffles",
    "price": 429,
    "description": "Caramelised biscuit spread and crunchy Biscoff crumbs.",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-30",
    "name": "Brownie Fudge Waffle",
    "category": "Waffles",
    "price": 449,
    "description": "A dessert waffle with brownie bites and chocolate fudge.",
    "image": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-31",
    "name": "Classic Fudge Brownie",
    "category": "Brownies & Desserts",
    "price": 249,
    "description": "Dense, rich chocolate brownie with a soft fudgy centre.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-32",
    "name": "Walnut Chocolate Brownie",
    "category": "Brownies & Desserts",
    "price": 279,
    "description": "Chocolate brownie with crunchy walnut pieces.",
    "image": "https://images.unsplash.com/photo-1607920591413-4ec007e70023?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-33",
    "name": "Sizzling Brownie Sundae",
    "category": "Brownies & Desserts",
    "price": 399,
    "description": "Warm brownie with a cool scoop-style dessert finish.",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-34",
    "name": "Chocolate Lava Cake",
    "category": "Brownies & Desserts",
    "price": 329,
    "description": "A warm chocolate cake with a molten centre.",
    "image": "https://images.unsplash.com/photo-1617305855058-336d24456869?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-35",
    "name": "Red Velvet Cheesecake",
    "category": "Brownies & Desserts",
    "price": 429,
    "description": "Creamy cheesecake with a red velvet-inspired finish.",
    "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-36",
    "name": "Chocolate Mousse Cup",
    "category": "Brownies & Desserts",
    "price": 299,
    "description": "Light, silky chocolate mousse served chilled.",
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-37",
    "name": "Grilled Bombay Masala Sandwich",
    "category": "Sandwiches",
    "price": 249,
    "description": "A toasted Indian-style sandwich with spiced vegetables.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-38",
    "name": "Classic Veg Club Sandwich",
    "category": "Sandwiches",
    "price": 299,
    "description": "Layered vegetables, cheese and a golden toasted finish.",
    "image": "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-39",
    "name": "Paneer Tikka Sandwich",
    "category": "Sandwiches",
    "price": 329,
    "description": "Tandoori paneer with peppers and mint sauce.",
    "image": "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-40",
    "name": "Corn & Cheese Melt",
    "category": "Sandwiches",
    "price": 279,
    "description": "Sweet corn and melted cheese in toasted bread.",
    "image": "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-41",
    "name": "Crispy Peri Peri Sandwich",
    "category": "Sandwiches",
    "price": 299,
    "description": "Crunchy filling with a spicy peri-peri kick.",
    "image": "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-42",
    "name": "Cozy Triple Decker",
    "category": "Sandwiches",
    "price": 399,
    "description": "A generous café-style triple-decker sandwich.",
    "image": "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-43",
    "name": "Creamy Alfredo Pasta",
    "category": "Pasta",
    "price": 349,
    "description": "Pasta tossed in a silky creamy white sauce.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-44",
    "name": "Arrabbiata Red Sauce Pasta",
    "category": "Pasta",
    "price": 329,
    "description": "Tomato-rich sauce with garlic and a gentle chilli kick.",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-45",
    "name": "Pesto Cream Pasta",
    "category": "Pasta",
    "price": 399,
    "description": "Herby basil pesto with a creamy café-style finish.",
    "image": "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-46",
    "name": "Pink Sauce Penne",
    "category": "Pasta",
    "price": 369,
    "description": "A comforting blend of tomato and creamy white sauce.",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-47",
    "name": "Mac & Cheese",
    "category": "Pasta",
    "price": 379,
    "description": "Tender pasta folded through a rich cheese sauce.",
    "image": "https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-48",
    "name": "Cozy Loaded Pasta",
    "category": "Pasta",
    "price": 449,
    "description": "A hearty pasta bowl with vegetables and signature sauce.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-49",
    "name": "Classic Lemon Mint Mojito",
    "category": "Beverages",
    "price": 249,
    "description": "Fresh lime, mint and sparkling refreshment; zero alcohol.",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-50",
    "name": "Blue Lagoon Mocktail",
    "category": "Beverages",
    "price": 279,
    "description": "A vivid blue citrus mocktail served over ice; zero alcohol.",
    "image": "https://images.unsplash.com/photo-1536935338788846bb9981813?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-51",
    "name": "Watermelon Mint Cooler",
    "category": "Beverages",
    "price": 259,
    "description": "Watermelon-inspired refreshment with cool mint.",
    "image": "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-52",
    "name": "Mango Cream Shake",
    "category": "Beverages",
    "price": 299,
    "description": "A creamy mango shake with a smooth tropical finish.",
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-53",
    "name": "Chocolate Thick Shake",
    "category": "Beverages",
    "price": 329,
    "description": "A rich chocolate shake finished café-style.",
    "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-54",
    "name": "Strawberry Milkshake",
    "category": "Beverages",
    "price": 299,
    "description": "A sweet strawberry shake blended until smooth.",
    "image": "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-55",
    "name": "Dahi Puri",
    "category": "Chaat",
    "price": 249,
    "description": "Crisp puris filled with potato, chilled yogurt, sweet chutney and fresh sev.",
    "image": "https://images.pexels.com/photos/29699504/pexels-photo-29699504.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-56",
    "name": "Mumbai Pav Bhaji",
    "category": "Chaat",
    "price": 299,
    "description": "Buttery pav served with richly spiced mashed vegetables and fresh lemon.",
    "image": "https://images.pexels.com/photos/34507155/pexels-photo-34507155.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-57",
    "name": "Cheese Pav Bhaji",
    "category": "Chaat",
    "price": 349,
    "description": "Mumbai-style bhaji topped with a generous layer of melted cheese.",
    "image": "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-58",
    "name": "Extra Cheese Pav Bhaji",
    "category": "Chaat",
    "price": 399,
    "description": "A rich, extra-cheesy pav bhaji finished with butter and coriander.",
    "image": "https://images.pexels.com/photos/12365247/pexels-photo-12365247.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-59",
    "name": "Papdi Chaat",
    "category": "Chaat",
    "price": 249,
    "description": "Crispy papdi topped with potato, yogurt, chutneys and crunchy sev.",
    "image": "https://images.pexels.com/photos/34270742/pexels-photo-34270742.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-60",
    "name": "Aloo Tikki Chaat",
    "category": "Chaat",
    "price": 279,
    "description": "Golden potato tikki with tangy chutneys, yogurt and Indian spices.",
    "image": "https://images.pexels.com/photos/29699504/pexels-photo-29699504.jpeg?auto=compress&cs=tinysrgb&w=1000",
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
