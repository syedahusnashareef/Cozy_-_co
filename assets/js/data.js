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
    "note": "Crispy fries, peri-peri masala & cheesy loaded fries",
    "image": "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=1200&q=90"
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
    "note": "Thin crust, Indian paneer & chicken favourites",
    "image": "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=90"
  },
  {
    "name": "Waffles",
    "category": "Waffles",
    "note": "Golden waffles & dessert toppings",
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1400&q=90"
  },
  {
    "name": "Desserts",
    "category": "Desserts",
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
    "note": "Mojitos, shakes, coolers & sparkling sodas",
    "image": "https://images.unsplash.com/photo-1536935338788846bb9981813?auto=format&fit=crop&w=1000&q=90"
  },
  {
    "name": "Chaat",
    "category": "Chaat",
    "note": "Dahi puri, pav bhaji & Indian street-food favourites",
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
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-3",
    "name": "Caramel Latte",
    "category": "Coffee",
    "price": 299,
    "description": "Velvety latte finished with rich caramel sweetness.",
    "image": "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-4",
    "name": "Café Mocha",
    "category": "Coffee",
    "price": 319,
    "description": "Espresso, chocolate and steamed milk in one cozy cup.",
    "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-5",
    "name": "Hazelnut Iced Coffee",
    "category": "Coffee",
    "price": 329,
    "description": "Chilled coffee with mellow hazelnut notes and ice.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-6",
    "name": "Cozy Signature Cold Coffee",
    "category": "Coffee",
    "price": 349,
    "description": "Thick café-style cold coffee with a creamy finish.",
    "image": "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-7",
    "name": "Classic Salted Fries",
    "category": "French Fries",
    "price": 229,
    "description": "Golden crisp fries finished with a light seasoning.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=92",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-8",
    "name": "Peri Peri Fries",
    "category": "French Fries",
    "price": 249,
    "description": "Crispy fries tossed in a bold peri-peri spice blend.",
    "image": "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=1200&q=92",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-9",
    "name": "Tandoori Masala Fries",
    "category": "French Fries",
    "price": 269,
    "description": "Crispy fries tossed with a visible red-orange tandoori masala seasoning.",
    "image": "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=1200&q=92",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-10",
    "name": "Cheesy Loaded Fries",
    "category": "French Fries",
    "price": 329,
    "description": "Hot fries layered with a creamy cheese sauce.",
    "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=92",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-11",
    "name": "Chilli Cheese Fries",
    "category": "French Fries",
    "price": 349,
    "description": "Golden fries loaded with chilli, jalapeño-style peppers and melted cheese sauce.",
    "image": "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=1200&q=92",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-12",
    "name": "Herb & Garlic Fries",
    "category": "French Fries",
    "price": 399,
    "description": "Crispy fries tossed with visible herbs, garlic and cracked black pepper.",
    "image": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=92",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-13",
    "name": "Indian Aloo Tikki Burger",
    "category": "Burgers",
    "price": 249,
    "description": "Crispy golden potato tikki with lettuce, onion and tangy burger sauce.",
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2026/1/9/dc098193-cb75-4009-ba83-a588421e3625_150b79ee-10df-4df9-ba1b-f88eccc9288d.jpg",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-14",
    "name": "Paneer Tikka Burger",
    "category": "Burgers",
    "price": 299,
    "description": "Char-grilled paneer tikka, onion rings and mint chutney in a toasted bun.",
    "image": "https://zerozon.in/cdn/shop/files/image_da5d96dd-d86b-4e2d-970b-90120458ffea.png?v=1776577004",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-15",
    "name": "Masala Veg Cheese Burger",
    "category": "Burgers",
    "price": 279,
    "description": "A spiced vegetable patty finished with a visible melted cheese slice.",
    "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1200&q=92",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-16",
    "name": "Tandoori Crunch Burger",
    "category": "Burgers",
    "price": 329,
    "description": "A crunchy veg patty coated in tandoori spices, with lettuce and mint mayo.",
    "image": "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=1200&q=92",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-17",
    "name": "Double Cheese Veg Burger",
    "category": "Burgers",
    "price": 379,
    "description": "A double-stacked veg burger with two clearly visible melted cheese layers.",
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=92",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-18",
    "name": "Spicy Peri-Peri Veg Burger & Fries",
    "category": "Burgers",
    "price": 349,
    "description": "A spicy peri-peri veg burger served with a side of crisp golden fries.",
    "image": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1200&q=92",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-19",
    "name": "Thin-Crust Margherita Pizza",
    "category": "Pizza",
    "price": 299,
    "description": "Thin, crisp crust topped with tomato sauce, mozzarella and fresh basil.",
    "image": "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1200&q=95",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-20",
    "name": "Farmhouse Veg Pizza",
    "category": "Pizza",
    "price": 349,
    "description": "Classic Indian-style farmhouse pizza with capsicum, onion, tomato, corn and mushrooms.",
    "image": "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=1200&q=92",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-21",
    "name": "Paneer Tikka Pizza",
    "category": "Pizza",
    "price": 399,
    "description": "Visible paneer tikka cubes, onion, capsicum and melted cheese on a pizza base.",
    "image": "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1200&q=92",
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
    "image": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=1200&q=92",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-24",
    "name": "Paneer & Capsicum Pizza",
    "category": "Pizza",
    "price": 499,
    "description": "Indian-style pizza with paneer cubes, capsicum, onion and mozzarella.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=92",
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
    "description": "A golden waffle covered in chocolate sauce, chocolate curls and chocolate chunks.",
    "image": "https://b.zmtcdn.com/data/dish_photos/368/b18cd42c17e73c39e1faeedbbcff4368.jpeg",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-27",
    "name": "Oreo Crunch Waffle",
    "category": "Waffles",
    "price": 379,
    "description": "Golden waffle topped with Oreo cookies, cookie crumble and chocolate drizzle.",
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2026/2/13/3748a8c9-f535-4512-add5-1fa92d475ff7_2ad6ac61-9ed9-4e9f-92b8-97ae66ad25fe.jpg",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-28",
    "name": "Strawberry Cream Waffle",
    "category": "Waffles",
    "price": 369,
    "description": "Golden waffle topped with fresh strawberries and whipped cream.",
    "image": "https://popmenucloud.com/btudxlpn/092d7820-6433-4f80-995b-23416346a263.jpg",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-29",
    "name": "Lotus Biscoff Waffle",
    "category": "Waffles",
    "price": 429,
    "description": "Waffle drizzled with Biscoff spread and topped with a Lotus Biscoff biscuit.",
    "image": "https://www.amummytoo.co.uk/wp-content/uploads/2023/11/biscoff-waffles-SQUARE.jpg",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-30",
    "name": "Brownie Fudge Waffle",
    "category": "Waffles",
    "price": 449,
    "description": "A waffle loaded with brownie chunks and thick chocolate fudge drizzle.",
    "image": "https://images.deliveryhero.io/image/fd-pk/products/89681109.jpg?width=1000",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-31",
    "name": "Classic Fudge Brownie",
    "category": "Desserts",
    "price": 249,
    "description": "Dense, rich chocolate brownie with a soft fudgy centre.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-32",
    "name": "Walnut Chocolate Brownie",
    "category": "Desserts",
    "price": 279,
    "description": "Chocolate brownie with crunchy walnut pieces.",
    "image": "https://images.unsplash.com/photo-1607920591413-4ec007e70023?auto=format&fit=crop&w=1000&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-33",
    "name": "Sizzling Brownie Sundae",
    "category": "Desserts",
    "price": 399,
    "description": "Warm brownie with a cool scoop-style dessert finish.",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-34",
    "name": "Chocolate Lava Cake",
    "category": "Desserts",
    "price": 329,
    "description": "A warm chocolate cake with a molten centre.",
    "image": "https://images.unsplash.com/photo-1617305855058-336d24456869?auto=format&fit=crop&w=1000&q=88",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-35",
    "name": "Red Velvet Cheesecake",
    "category": "Desserts",
    "price": 429,
    "description": "A striking red velvet cake-and-cheesecake slice with creamy white cheesecake layers.",
    "image": "https://assets.tastemadecdn.net/images/fadd09/a0c23b492abf0b9d84fc/c0c520.jpg",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-36",
    "name": "Chocolate Croissant",
    "category": "Desserts",
    "price": 329,
    "description": "Flaky golden croissant with chocolate filling and a visible chocolate drizzle.",
    "image": "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=1200&q=95",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-37",
    "name": "Grilled Bombay Masala Sandwich",
    "category": "Sandwiches",
    "price": 249,
    "description": "A toasted Indian-style sandwich with spiced vegetables.",
    "image": "https://images.squarespace-cdn.com/content/v1/62df38bd768870226dced4a0/1718145969633-LXZIU4GNTGZCG3CZM1GV/bombay%2Binspired%2Bsandwich.jpg",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-38",
    "name": "Classic Veg Sandwich",
    "category": "Sandwiches",
    "price": 299,
    "description": "A toasted sandwich layered with fresh vegetables, chutney and a light cheese filling.",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/VegeeSandwich.jpg",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-39",
    "name": "Paneer Tikka Sandwich",
    "category": "Sandwiches",
    "price": 329,
    "description": "Tandoori paneer with peppers and mint sauce.",
    "image": "https://b.zmtcdn.com/data/pictures/6/19664986/1844b8c01d5169cdbf0f208fb534fa37.jpg?crop=960%3A500%3B%2A%2C%2A&fit=around%7C960%3A500",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-40",
    "name": "Corn & Cheese Melt",
    "category": "Sandwiches",
    "price": 279,
    "description": "Toasted bread packed with sweet corn kernels and visibly melted cheese.",
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2024/9/1/4a20aa78-c745-4b0d-a2b7-55ac212f00e9_727eca28-9cbb-4f2f-8914-365d96a59948.jpg",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-41",
    "name": "Crispy Chicken Sandwich",
    "category": "Sandwiches",
    "price": 299,
    "description": "Crispy golden chicken fillet with lettuce, pickles and creamy pepper mayo in a toasted sandwich.",
    "image": "https://images.pexels.com/photos/36879213/pexels-photo-36879213.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "featured": false,
    "vegetarian": false
  },
  {
    "id": "cozy-42",
    "name": "Cheesy Grilled Sandwich",
    "category": "Sandwiches",
    "price": 399,
    "description": "Golden grilled sandwich with a generous melted cheese filling.",
    "image": "https://assets.lummi.ai/assets/Qmc6TmFo8K83WQH5oFCd7MNiKYiwADCtVzvThAFttm8k2L",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-43",
    "name": "Creamy Alfredo Pasta",
    "category": "Pasta",
    "price": 349,
    "description": "Pasta tossed in a silky creamy white sauce.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=95",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-44",
    "name": "Arrabbiata Red Sauce Pasta",
    "category": "Pasta",
    "price": 329,
    "description": "Penne coated in a rich tomato-red arrabbiata sauce with chilli and garlic.",
    "image": "https://art.whisk.com/image/upload/fl_progressive%2Ch_560%2Cw_560%2Cc_fill%2Cdpr_2/v1762329659792/recipe/37ffe856babe063c7bf73d0a42b56f54.jpg",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-45",
    "name": "Pesto Cream Pasta",
    "category": "Pasta",
    "price": 399,
    "description": "Herby basil pesto with a creamy café-style finish.",
    "image": "https://images.slurrp.com/prodrich_article/a240w689cd8.webp?height=500&impolicy=slurrp-20210601&width=880",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-46",
    "name": "Paneer Tikka Pasta",
    "category": "Pasta",
    "price": 369,
    "description": "Tandoori-spiced paneer cubes folded through creamy Indian masala pasta.",
    "image": "https://cdn.shopify.com/s/files/1/0638/6460/2881/files/paneer_pasta_600x600.png?v=1706872917",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-47",
    "name": "Mac & Cheese Pasta",
    "category": "Pasta",
    "price": 379,
    "description": "Elbow macaroni fully coated in a rich, glossy cheddar cheese sauce.",
    "image": "https://assets.unileversolutions.com/recipes-v2/264006.png",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-48",
    "name": "Masala Loaded Pasta",
    "category": "Pasta",
    "price": 449,
    "description": "Penne tossed in a rich desi onion-tomato masala with capsicum and herbs.",
    "image": "https://www.goodness-farm.com/cdn/shop/files/a-high-resolution-professional-food-photograph-of-a-plated-fusili-shaped-pasta-dark-brownish-in-colour-mixed-in-garnished-with-indian-masala-of-onion-tomatoe-base-with-paneer-roasted.png?v=1764419586&width=1946",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-49",
    "name": "Classic Lemon Mint Mojito",
    "category": "Beverages",
    "price": 249,
    "description": "A chilled lime-and-mint mocktail with crushed ice, fresh mint and citrus.",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1000&q=90",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-50",
    "name": "Pineapple Mint Cooler",
    "category": "Beverages",
    "price": 279,
    "description": "A bright tropical pineapple cooler with fresh mint, citrus and plenty of ice.",
    "image": "https://images.unsplash.com/photo-1536935338788846bb9981813?auto=format&fit=crop&w=1200&q=95",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-51",
    "name": "Watermelon Mint Cooler",
    "category": "Beverages",
    "price": 259,
    "description": "Fresh watermelon cooler with mint leaves, lime and ice.",
    "image": "https://www.coolinarco.com/wp-content/uploads/2023/09/ds0887_Watermelon_Mint_Cooler_59df4cc9-554f-4190-888d-734535495916.jpg",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-52",
    "name": "Mango Cream Shake",
    "category": "Beverages",
    "price": 299,
    "description": "Thick mango shake topped with fresh mango pieces and a creamy finish.",
    "image": "https://imgmediagumlet.lbb.in/media/2019/05/5cdcb72d6ac075021983804f_1557968685531.jpg",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-53",
    "name": "KitKat Chocolate Shake",
    "category": "Beverages",
    "price": 329,
    "description": "Cookies-and-cream shake blended with Oreo-style chocolate sandwich cookies and topped with cookie crumbs.",
    "image": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_600%2Ch_468/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2026/3/20/6e561911-ff3d-4005-85f2-6388df5c6c49_Manch26154FOODSHOTS298174e20ae99437a91d1ab49f20cdaae.JPG",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-54",
    "name": "Banana Milkshake",
    "category": "Beverages",
    "price": 299,
    "description": "A smooth banana milkshake blended with ripe banana and chilled milk.",
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/2/9/4bf5e3fa-678c-49dd-b73d-404208ed4ade_35753430-8583-4af9-abed-cc6c1edd846c.jpg",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-55",
    "name": "Dahi Puri",
    "category": "Chaat",
    "price": 249,
    "description": "Crisp puris filled with chilled yogurt, sweet-tangy chutneys and crunchy sev.",
    "image": "https://images.pexels.com/photos/32894826/pexels-photo-32894826.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "featured": true,
    "vegetarian": true
  },
  {
    "id": "cozy-56",
    "name": "Mumbai Pav Bhaji",
    "category": "Chaat",
    "price": 299,
    "description": "Mumbai street-style buttery red bhaji with toasted pav, chopped onion and lemon.",
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/6/5/379f3c5f-8e61-4f1a-b5c2-a3b72c9c4e58_822d7b1a-42a0-4de4-87be-cd6302c9c0dc.png",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-57",
    "name": "Cheese Pav Bhaji",
    "category": "Chaat",
    "price": 349,
    "description": "Mumbai-style pav bhaji topped with a generous layer of grated cheese.",
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/f_auto%2Cq_auto%2Cfl_lossy/e446fc1fe985d616b15a250c90f4b994",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-58",
    "name": "Extra Cheese Pav Bhaji",
    "category": "Chaat",
    "price": 399,
    "description": "Rich butter pav bhaji covered edge-to-edge with extra grated cheese and coriander.",
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Cc_fit/tnxjpjkfmvkd0jgywwib",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-59",
    "name": "Papdi Chaat",
    "category": "Chaat",
    "price": 249,
    "description": "Crispy papdi topped with potato, yogurt, chutneys, sev and pomegranate.",
    "image": "https://ministryofcurry.com/wp-content/uploads/2022/07/Papdi-Chat_-3.jpg",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-60",
    "name": "Aloo Tikki Chaat",
    "category": "Chaat",
    "price": 279,
    "description": "Golden potato tikki with yogurt, tangy chutneys, sev and fresh coriander.",
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2024/10/2/1246ab31-ef18-4751-a96b-7368a4cf5c97_77b88453-637b-44b7-a74f-2aa29bbf29cc.jpg",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-61",
    "name": "Classic Butter Croissant",
    "category": "Desserts",
    "price": 249,
    "description": "Golden butter croissant with crisp, distinct flaky layers.",
    "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=95",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-62",
    "name": "Almond Croissant",
    "category": "Desserts",
    "price": 329,
    "description": "Almond croissant topped with sliced toasted almonds and a light sugar dusting.",
    "image": "https://images.unsplash.com/photo-1608198093002-ad4e005484b8?auto=format&fit=crop&w=1200&q=95",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-63",
    "name": "Oreo Cookies & Cream Shake",
    "category": "Beverages",
    "price": 329,
    "description": "A creamy cookies-and-cream shake topped with whipped cream and chocolate cookie pieces.",
    "image": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_600%2Ch_468/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2026/3/20/6e561911-ff3d-4005-85f2-6388df5c6c49_Manch26154FOODSHOTS298174e20ae99437a91d1ab49f20cdaae.JPG",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-64",
    "name": "Vanilla Bean Milkshake",
    "category": "Beverages",
    "price": 279,
    "description": "A smooth vanilla milkshake topped with a soft swirl of whipped cream.",
    "image": "https://images.unsplash.com/photo-1542990253-0b8be9e1e2c6?auto=format&fit=crop&w=1200&q=95",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-65",
    "name": "Fresh Strawberry Cream Shake",
    "category": "Beverages",
    "price": 319,
    "description": "A strawberry-pink shake finished with fresh strawberry pieces and cream.",
    "image": "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=1200&q=95",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-66",
    "name": "Blue Lagoon Mocktail",
    "category": "Beverages",
    "price": 299,
    "description": "Bright blue citrus mocktail with lemon, mint and ice.",
    "image": "https://images.unsplash.com/photo-1536935338788846bb9981813?auto=format&fit=crop&w=1200&q=95",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-67",
    "name": "Fresh Lime Soda",
    "category": "Beverages",
    "price": 229,
    "description": "Chilled sparkling lime soda with fresh lime slices, mint and a lightly salted rim.",
    "image": "https://www.prabhatkhabar.com/_next/image?q=75&url=https%3A%2F%2Fwpmedia.prabhatkhabar.com%2Fuploads%2F2025%2F10%2Ffresh-lime-sodaa.jpg&w=3840",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-68",
    "name": "Masala Lemon Soda",
    "category": "Beverages",
    "price": 239,
    "description": "Indian masala lemon soda with lemon, mint, ice and a tangy chilli-salt rim.",
    "image": "https://catalogue.bikanervala.com/cdn/shop/files/MocktailMasalaLemonade.jpg?v=1776840835&width=1020",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-69",
    "name": "Chicken Tikka Pizza",
    "category": "Pizza",
    "price": 499,
    "description": "Tandoori chicken tikka pieces, onion, capsicum and melted mozzarella on a crisp base.",
    "image": "https://product-assets.faasos.io/production/product/image_1658347848254_Chicken_Tikka_Cheese_Burst_Pizza.jpg",
    "featured": false,
    "vegetarian": false
  },
  {
    "id": "cozy-70",
    "name": "Chicken 65 Pizza",
    "category": "Pizza",
    "price": 529,
    "description": "Spicy Chicken 65 bites with onion, capsicum and mozzarella on a thin pizza crust.",
    "image": "https://cdn.uengage.io/uploads/5/image-965669-1760076017.jpeg",
    "featured": false,
    "vegetarian": false
  },
  {
    "id": "cozy-71",
    "name": "Achari Chicken Pizza",
    "category": "Pizza",
    "price": 529,
    "description": "Chicken tikka tossed in tangy Indian achari spices, finished with cheese and peppers.",
    "image": "https://d1w7312wesee68.cloudfront.net/HNJbBgyD8TwP2aEy8OO_t1jxR1b5W_cB8eSeKO5FYmk/resize%3Afit%3A720%3A720/plain/s3%3A/toasttab/menu_service/restaurants/52daeab1-324c-4561-b1b4-991ba656b62e/MenuItem/c6452f7c-4625-4ac6-b664-205a7b02aa28.jpg",
    "featured": false,
    "vegetarian": false
  },
  {
    "id": "cozy-72",
    "name": "Pani Puri / Golgappa (8 Pieces)",
    "category": "Chaat",
    "price": 229,
    "description": "8 crisp puris with potato-chickpea filling, served with a tasting glass of tangy mint pani, sweet tamarind pani and spiced water.",
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/f_auto%2Cq_auto%2Cfl_lossy/4d5ad16a55516140bfc63d51a3e9dabc",
    "featured": false,
    "vegetarian": true
  },
  {
    "id": "cozy-73",
    "name": "Crispy Chicken Burger",
    "category": "Burgers",
    "price": 379,
    "description": "A crunchy golden chicken fillet stacked with lettuce, cheese and creamy house sauce in a toasted brioche-style bun.",
    "image": "https://images.deliveryhero.io/image/fd-pk/Products/97876981.jpg?width=1200",
    "featured": false,
    "vegetarian": false
  }
];
window.COZY_COMBOS = [
  {
    "name": "Cozy Burger Box",
    "items": "Indian Aloo Tikki Burger + Peri Peri Fries + Classic Lemon Mint Cooler",
    "price": 699,
    "tag": "SIGNATURE COMBO",
    "image": "https://images.deliveryhero.io/image/fd-pk/Products/86844074.jpg?width=1200",
    "description": "A full Indian-inspired burger meal with crispy fries and a chilled drink."
  },
  {
    "name": "Pizza Night for Two",
    "items": "Farmhouse Veg Pizza + 2 Classic Lemon Mint Coolers",
    "price": 799,
    "tag": "FOR TWO",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=92",
    "description": "A cheesy shareable pizza combo for a relaxed catch-up."
  },
  {
    "name": "Waffle & Coffee Date",
    "items": "Nutella Crunch Waffle + 2 Café Lattes",
    "price": 849,
    "tag": "SWEET BREAK",
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=92",
    "description": "A warm waffle and two café lattes for a sweet little date."
  },
  {
    "name": "Croissant Coffee Pair",
    "items": "2 Chocolate Filled Croissants + 2 Classic Cappuccinos",
    "price": 749,
    "tag": "BAKERY FAVOURITE",
    "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=92",
    "description": "Buttery pastry and freshly brewed coffee, made to pair."
  }
];
