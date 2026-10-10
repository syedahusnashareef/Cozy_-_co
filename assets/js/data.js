const categories = [
 {name:"French Fries",category:"French Fries",image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=90",note:"Golden & crispy"},
 {name:"Burgers",category:"Burgers",image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=90",note:"Indian-style favourites"},
 {name:"Pizza",category:"Pizza",image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=90",note:"Fresh from the oven"},
 {name:"Beverages",category:"Beverages",image:"https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1200&q=90",note:"Cool & refreshing"},
 {name:"Waffles",category:"Waffles",image:"https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=90",note:"Sweet little moments"},
 {name:"Coffee",category:"Coffee",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=90",note:"Brewed with care"},
 {name:"Croutons & Starters",category:"Croutons & Starters",image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=90",note:"Crunch into something"},
 {name:"Desserts",category:"Desserts",image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=90",note:"A little indulgence"},
 {name:"Sandwiches & Pasta",category:"Sandwiches & Pasta",image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=90",note:"Comfort in every bite"}
];
const groups = [
 ["French Fries",[
 ["Classic Salted Fries",229,"Golden fries, lightly seasoned and crisp."],["Peri Peri Fries",249,"A lively peri-peri spice coating."],["Cheesy Loaded Fries",299,"Crispy fries finished with a creamy cheese sauce."],["Tandoori Masala Fries",259,"Indian tandoori spices with a smoky kick."],["Garlic Herb Fries",239,"Garlic, herbs and a satisfying crunch."],["Chilli Cheese Fries",319,"Chilli, cheese and a generous topping."]],
 ["Burgers",[
 ["Indian Aloo Tikki Burger",249,"Crisp potato tikki, fresh vegetables and house-style sauce."],["Paneer Tikka Burger",299,"Tandoori paneer, crunchy lettuce and minty sauce."],["Masala Veg Cheese Burger",279,"A spiced vegetable patty with melted cheese."],["Tandoori Crunch Burger",329,"Smoky Indian-inspired flavours with a crunchy patty."],["Double Cheese Veg Burger",349,"Two rich cheese layers with a hearty veg patty."],["Spicy Peri Peri Burger",319,"A fiery patty, fresh salad and creamy peri-peri sauce."]],
 ["Pizza",[
 ["Margherita Cheese Pizza",299,"Classic tomato, mozzarella and fragrant herbs."],["Farmhouse Veg Pizza",349,"Capsicum, onion, tomato and mushrooms."],["Paneer Tikka Pizza",379,"Tandoori paneer, peppers and cheese."],["Peri Peri Corn Pizza",329,"Sweet corn, peppers and spicy peri-peri seasoning."],["Four Cheese Pizza",429,"A rich blend of four cheeses."],["Chilli Paneer Pizza",399,"Indo-Chinese inspired paneer with a cheesy finish."]],
 ["Beverages",[
 ["Classic Lemon Mojito",229,"Lime, mint and sparkling refreshment."],["Blue Lagoon Cooler",249,"A bright citrus cooler served chilled."],["Fresh Watermelon Cooler",239,"A fruity, refreshing watermelon drink."],["Mango Cream Shake",279,"A thick mango shake with a creamy finish."],["Chocolate Thick Shake",299,"A rich chocolate shake topped for a treat."],["Strawberry Milkshake",279,"Sweet strawberry flavour blended until smooth."]],
 ["Waffles",[
 ["Belgian Chocolate Waffle",299,"Warm waffle with rich chocolate drizzle."],["Nutella Crunch Waffle",349,"Chocolate hazelnut spread and a crunchy topping."],["Oreo Cream Waffle",329,"Cookie crumble with a smooth cream finish."],["Brownie Blast Waffle",379,"Waffle layered with brownie pieces and chocolate."],["Strawberry Cream Waffle",319,"Strawberry and cream over a golden waffle."],["Lotus Biscoff Waffle",399,"Caramelised biscuit spread and a delicate crunch."]],
 ["Coffee",[
 ["Classic Cappuccino",229,"Espresso with silky milk foam."],["Café Latte",249,"Smooth espresso and steamed milk."],["Caramel Latte",279,"A mellow latte with caramel notes."],["Café Mocha",289,"Coffee meets rich chocolate."],["Cold Coffee Frappe",279,"Chilled coffee blended into a creamy frappe."],["Hazelnut Iced Coffee",299,"Cold coffee with smooth hazelnut flavour."]],
 ["Croutons & Starters",[
 ["Herb Garlic Croutons",229,"Crunchy toasted bread bites with garlic and herbs."],["Cheesy Crouton Bowl",269,"Golden croutons finished with melted cheese."],["Masala Crouton Chaat",249,"Crispy croutons tossed in Indian-style masala."],["Chilli Cheese Toast Bites",259,"Toasted bites with cheese and a gentle chilli kick."],["Loaded Nachos",299,"Crispy nachos with cheese and a savoury topping."],["Crispy Veg Pops",279,"Golden bite-size vegetable snacks with dip."]],
 ["Desserts",[
 ["Classic Fudge Brownie",249,"Dense chocolate brownie with a fudgy centre."],["Chocolate Lava Cake",279,"Warm chocolate cake with a molten centre."],["New York Cheesecake",349,"Creamy cheesecake on a buttery crumb base."],["Red Velvet Slice",299,"Soft red velvet cake with cream cheese-style frosting."],["Brownie Sundae",329,"Brownie pieces with ice cream and chocolate sauce."],["Choco Chip Cookie Stack",229,"Fresh-style cookies with chocolate chips."]],
 ["Sandwiches & Pasta",[
 ["Grilled Paneer Sandwich",279,"Grilled paneer with peppers and a toasted finish."],["Corn Cheese Sandwich",249,"Sweet corn and melted cheese in toasted bread."],["Tandoori Veg Sandwich",269,"Tandoori-style vegetables with a creamy spread."],["Creamy White Sauce Pasta",329,"Pasta tossed in a smooth, creamy sauce."],["Arrabbiata Penne Pasta",319,"Penne with a tomato and chilli sauce."],["Paneer Tikka Pasta",369,"Creamy pasta with Indian-inspired paneer tikka flavour."]]]
];
let serial=0;
window.COZY_CATEGORIES=categories;
window.COZY_MENU=groups.flatMap(([category,items])=>items.map(([name,price,description],i)=>({
 id:"cozy-"+(++serial),name,category,price,description,
 image:category==="French Fries"||category==="Croutons & Starters"?"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=90":
 category==="Burgers"?"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=90":
 category==="Pizza"?"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=90":
 category==="Beverages"?"https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1000&q=90":
 category==="Waffles"?"https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1000&q=90":
 category==="Coffee"?"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=90":
 category==="Desserts"?"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=90":
 category==="Sandwiches & Pasta"?"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=90":
 "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=90",
 featured:serial<=9,vegetarian:true
})));
window.COZY_COMBOS=[
 {name:"The Cozy Burger Box",items:"Indian Aloo Tikki Burger + Peri Peri Fries + Lemon Mojito",price:649,tag:"BESTSELLER",image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1100&q=90",description:"A full, flavour-packed burger meal with a refreshing drink."},
 {name:"Pizza Night Duo",items:"Farmhouse Veg Pizza + 2 Classic Lemon Mojitos",price:749,tag:"FOR TWO",image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1100&q=90",description:"A shareable pizza combo for two people."},
 {name:"Waffle & Coffee Date",items:"Nutella Crunch Waffle + 2 Café Lattes",price:799,tag:"SWEET BREAK",image:"https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1100&q=90",description:"A sweet treat paired with two warm coffees."},
 {name:"Loaded Snack Party",items:"Cheesy Loaded Fries + Loaded Nachos + 2 Coolers",price:899,tag:"SHARE & ENJOY",image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1100&q=90",description:"Crispy starters and cool drinks made for sharing."},
 {name:"Coffeehouse Treat Box",items:"2 Café Mochas + Fudge Brownie + Choco Chip Cookie Stack",price:849,tag:"COFFEE LOVERS",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1100&q=90",description:"Coffee, chocolate and something lovely on the side."}
];