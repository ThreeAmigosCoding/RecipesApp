import {Component, NgModule, OnInit} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-ingredients-menu',
  templateUrl: './ingredients-menu.component.html',
  styleUrls: ['./ingredients-menu.component.css']
})
export class IngredientsMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @NgModule({
      imports: [MatInputModule, MatIconModule, MatButtonModule],
  })

  pantryEssentials = ["butter", "egg", "garlic", "milk", "onion", "sugar", "flour", "olive oil", "garlic powder", "rice"];
  vegetablesAndGreens = ["garlic", "onion", "bell pepper", "carrot", "scallion", "tomato", "potato", "red onion", "celery", "jalapeno"];
  mushrooms = ["mushroom", "button mushroom", "shiitake mushroom", "portobello mushroom", "porcini", "wild mushroom", "oyster mushroom", "mixed mushrooms", "chestnut mushroom", "enoki mushroom"];
  fruits = ["lemon", "lime", "apple", "orange", "banana", "raisins", "pineapple", "mango", "peach", "coconut"];
  berries = ["strawberry", "blueberry", "raspberry", "cranberry", "cherry", "blackberry", "berry mix", "maraschino cherry", "dried tart cherry", "juniper berry"];
  nutsAndSeeds = ["walnut", "pecan", "almond", "sesame seed", "cashew", "peanut", "pine nut", "pistachio", "chia", "flax"];
  cheeses = ["parmesan", "cream cheese", "cheddar", "mozzarella", "feta", "ricotta", "sharp cheddar", "monterey jack", "blue cheese", "goat cheese"];
  dairyAndEggs = ["butter", "egg", "milk", "heavy cream", "sour cream", "buttermilk", "yogurt", "greek yogurt", "cream", "whipped cream"];
  dairyFreeAndMeatSubstitutes = ["coconut milk", "almond milk", "almond butter", "tofu", "coconut cream", "non-dairy milk", "vegan butter", "soy milk", "extra firm tofu", "silken tofu"];
  meats = ["bacon", "ground beef", "beef steak", "ham", "pork loin", "sausage", "prosciutto", "ground pork", "beef roast", "italian sausage"];
  poultry = ["chicken breast", "chicken thighs", "cooked chicken", "ground turkey", "whole chicken", "whole turkey", "chicken leg", "chicken wings", "turkey breast", "ground chicken"];
  fish = ["salmon", "smoked salmon", "cod", "tilapia", "tuna steak", "halibut", "whitefish", "trout", "sea bass", "red snapper"];
  seafoodAndSeaweed = ["shrimp", "prawns", "crab", "scallop", "clam", "mussel", "squid", "nori", "lobster", "oyster"];
  herbsAndSpices = ["cinnamon", "parsley", "cilantro", "cumin", "basil", "thyme", "ginger root", "garlic powder", "oregano", "chili flake"];
  sugarAndSweeteners = ["sugar", "brown sugar", "honey", "maple syrup", "corn syrup", "coconut sugar", "molasses", "stevia", "agave nectar"];
  seasoningsAndSpiceBlends = ["italian seasoning", "seasoned salt", "curry", "garam masala", "pumpkin pie spice", "mustard powder", "taco seasoning", "cajun seasoning", "dry ranch seasoning", "white miso"];
  baking = ["flour", "vanilla", "baking powder", "baking soda", "cornstarch", "yeast", "chocolate chips", "dark chocolate chips", "whole-wheat flour", "panko"];
  preMadeDoughsAndWrappers = ["pie crust", "puff pastry", "pizza crust", "phyllo", "biscuit dough", "refrigerated crescent rolls", "dumpling wrapper", "rice paper", "sourdough starter", "cookie dough"];
  grainsAndCereals = ["rolled oats", "rice", "quinoa", "basmati rice", "brown rice", "risotto rice", "breakfast cereal", "couscous", "rice cereal", "semolina"];
  legumes = ["peas", "green beans", "chickpea", "black beans", "kidney beans", "white beans", "lentils", "pinto beans", "snow peas", "snap peas"];
  pasta = ["short-cut pasta", "spaghetti", "macaroni", "egg noodle", "spiral pasta", "lasagna", "linguine", "fettuccine", "orzo", "pasta shell"];
  breadAndSaltySnacks = ["bread", "bread crumbs", "flour tortillas", "corn tortillas", "baguette", "crackers", "tortilla chips", "pita", "pretzels", "sourdough bread"];
  oilsAndFats = ["olive oil", "vegetable oil", "extra virgin olive oil", "canola oil", "coconut oil", "cooking spray", "sesame oil", "frying oil", "sunflower oil", "toasted sesame oil"];
  dressingsAndVinegars = ["mayonnaise", "apple cider vinegar", "balsamic vinegar", "vinegar", "red wine vinegar", "rice wine vinegar", "white wine vinegar", "ranch dressing", "italian dressing", "sherry vinegar"];
  condiments = ["soy sauce", "dijon mustard", "worcestershire", "hot sauce", "ketchup", "mustard", "fish sauce", "bbq sauce", "sriracha", "applesauce"];
  cannedFood = ["canned tomato", "capers", "green olives", "canned chickpea", "black olives", "canned black beans", "canned pumpkin", "kalamata olives", "pickle", "canned tuna"];
  saucesSpreadsAndDips = ["peanut butter", "tomato paste", "tomato sauce", "salsa", "tahini", "pesto", "marinara sauce", "pasta sauce", "hoisin sauce", "tomatoes with green chiles"];
  soupsStewsAndStocks = ["chicken broth", "vegetable broth", "chicken stock", "beef broth", "beef stock", "cream of mushroom", "cream of chicken", "bouillon cube", "onion soup mix", "tomato soup"];
  dessertsAndSweetSnacks = ["cocoa", "dark chocolate", "chocolate", "graham cracker", "baking chocolate", "marshmallow", "white chocolate", "oreo", "chocolate hazelnut spread", "dutch-process cocoa"];
  wineBeerAndSpirits = ["white wine", "red wine", "vodka", "rum", "beer", "orange liqueur", "bourbon", "cider", "tequila", "sherry"];
  beverages = ["orange juice", "coffee", "club soda", "espresso", "pineapple juice", "apple juice", "tea", "cranberry juice", "tomato juice", "coconut water"];
  supplementsAndExtracts = ["almond extract", "food coloring", "nutritional yeast", "peppermint extract", "protein powder", "lemon extract", "coconut extract", "rose water", "orange extract", "liquid egg white"];

  categories = [this.pantryEssentials, this.vegetablesAndGreens, this.mushrooms, this.fruits, this.berries,
                this.nutsAndSeeds, this.cheeses, this.dairyAndEggs, this.dairyFreeAndMeatSubstitutes, this.meats,
                this.poultry, this.fish, this.seafoodAndSeaweed, this.herbsAndSpices, this.sugarAndSweeteners,
                this.seasoningsAndSpiceBlends, this.baking, this.preMadeDoughsAndWrappers, this.grainsAndCereals,
                this.legumes, this.pasta, this.breadAndSaltySnacks, this.oilsAndFats, this.dressingsAndVinegars,
                this.condiments, this.cannedFood, this.saucesSpreadsAndDips, this.soupsStewsAndStocks,
                this.dessertsAndSweetSnacks, this.wineBeerAndSpirits, this.beverages, this.supplementsAndExtracts];

  categoriesNames = ["Pantry Essentials", "Vegetables & Greens", "Mushrooms", "Fruits", "Berries", "Nuts & Seeds",
                     "Cheeses", "Dairy & Eggs", "Dairy-Free & Meat Substitutes", "Meats", "Poultry", "Fish",
                     "Seafood & Seaweed", "Herbs & Spices", "Sugar & Sweeteners", "Seasonings & Spice Blends",
                     "Baking", "Pre-Made Doughs & Wrappers", "Grains & Cereals", "Legumes", "Pasta",
                     "Bread & Salty Snacks", "Oils & Fats", "Dressings & Vinegars", "Condiments", "Canned Food",
                     "Sauces, Spreads & Dips", "Soups, Stews & Stocks", "Desserts & Sweet Snacks",
                     "Wine, Beer & Spirits", "Beverages", "Supplements & Extracts"];

}
