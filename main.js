
var sideDishes = [
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
var mainDishes = [
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
var dessertDishes = [
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


var letsCookButton  = document.querySelector('.button1')
var selectedFood = document.querySelectorAll('input[name=food]:checked').value


letsCookButton.addEventListener('click', function displayDish)


  
  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
 }
 function getRandomDish() {
    var sideDishes = sideDishes[getRandomIndex(sideDishes)]
    var mainDishes = mainDishes[getRandomIndex(mainDishes)]
    var dessertDishes = dessertDishes[getRandomIndex(dessertDishes)]
 }

 function displayRandomDish() {
    if (selectedFood === 'side') {
        return randomSide ()
    }
    if (selectedFood === 'main') {
        return randomMain ()
    }
    if (selectedFood === 'dessert') {
        return randomDesserts()
    }
 }

 
