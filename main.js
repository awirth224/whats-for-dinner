//Arrays
sideDishes = [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Coconut Rice',
    'Garlic Butter Mushrooms',
    'Lemon Pepper Asparagus',    
    'Caesar Salad',    
    'Redskin Mashed Potatoes',
    'Green bean casserole'
]
mainDishes = [
    'Margarita Pizza',
    'Tofu Fried Rice',
    'Bell Pepper Fajitas',
    'BBQ Impossible Burgers',
    'Eggplant Parmesan',
    'Seitan Wings',
    'Thai Yellow Curry',
    'Poke Bowls',
    'Vegetarian Enchiladas',
    'Chickpea Salad Sandwiches'
]
dessertDishes = [
    'Apple Pie',
    'Banana Bread',
    'Cheesecake',
    'Chocolate Cupcakes',
    'Eclairs',
    'Flan',
    'Key Lime Pie',
    'Lemon Meringue Pie',
    'Macarons',
    'Pumpkin pie'
]

//querySelectors
var letsCookButton  = document.querySelector('.button1')
var clearButton  = document.querySelector('.button2')
// var  = document.querySelector('')

//Buttons
//letsCookButton.addEventListener
//clearButton.addEventListener

//Functions
 randomsideDishes() {
    Math.floor(Math.random()*sideDishes.length)
 }

 randomMain() {
   Math.floor(Math.random()*mainDishes.length)
 }

 randomDesserts() {
   Math.floor(Math.random()*dessertDishes.length)
 }  
