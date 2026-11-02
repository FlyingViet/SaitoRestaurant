// Menu content. Rendered by components/menu and published as schema.org Menu
// data, so prices only need to be updated here.

const appetizers = [
  { title: "Saito Soup", price: "3.00" },
  { title: "Saito Salad", price: "3.25" },
  { title: "Miso Soup", price: "3.00" },
  { title: "Edamame", price: "4.00" },
  { title: "Beef Sashimi", price: "12.50" },
  { title: "Shrimp Tempura", price: "9.25" },
  { title: "Calamari Tempura", price: "7.50" },
  { title: "Vegetable Tempura", price: "7.00" },
  { title: "Fried Rice", price: "4.50" },
  { title: "Shrimp Fried Rice", price: "6.50" },
  { title: "Chicken Fried Rice", price: "5.75" },
  { title: "Chicken & Shrimp Fried Rice", price: "7.75" },
  { title: "Steak Fried Rice", price: "8.75" },
  { title: "Extra Shrimp (fried rice)", price: "3.95" },
  { title: "Extra Chicken (fried rice)", price: "3.00" },
  { title: "Extra Steak (fried rice)", price: "6.00" },
  { title: "Fried Egg Rolls (4)", price: "4.50" },
  { title: "Fried Dumplings (6)", price: "5.25" },
  { title: "Fried Wonton Squares (5)", price: "6.25" },
]

const specialtyRolls = [
  { title: "Splash Meadow Roll", price: "16.50" },
  { title: "1999 Roll", price: "13.95" },
  { title: "Ocean Roll", price: "12.95" },
  { title: "Double Decker Roll", price: "12.95" },
  { title: "Shrimp Lover Roll", price: "10.50" },
  { title: "Crazy Roll", price: "11.50" },
  { title: "Cupcake Roll", price: "10.75" },
  { title: "Bills Roll", price: "9.75" },
  { title: "Rainbow Roll", price: "9.75" },
  { title: "Saito Roll", price: "9.50" },
  { title: "Tower Roll", price: "14.00" },
]

const traditionalRolls = [
  { title: "Double Crunchy Roll", price: "9.00" },
  { title: "Tennessee Roll", price: "7.25" },
  { title: "Alaskan Roll", price: "8.25" },
  { title: "Texas Roll", price: "7.00" },
  { title: "Crunchy Shrimp Roll", price: "6.75" },
  { title: "California Roll", price: "5.25" },
  { title: "Tempura Roll", price: "6.60" },
  { title: "Soft Shelled Crab Roll", price: "9.00" },
  { title: "Tokyo Roll", price: "6.75" },
  { title: "Spicy Crunchy Roll", price: "5.50" },
  { title: "Salmon & Eel Roll", price: "7.75" },
  { title: "Eel Cucumber Roll", price: "7.25" },
  { title: "Spicy Tuna Roll", price: "7.00" },
  { title: "Spicy Crawfish Roll", price: "6.50" },
  { title: "Spicy Shrimp Roll", price: "7.00" },
  { title: "Salmon Roll", price: "4.25" },
  { title: "Tuna Roll", price: "4.25" },
  { title: "Yellow Tail Scallion Roll", price: "4.50" },
  { title: "Vegetables Roll", price: "4.75" },
  { title: "Cucumber Roll", price: "3.25" },
]

const hibachiTraditional = [
  { title: "Hibachi Chicken", desc: "7 oz", price: "17.95" },
  { title: "Hibachi Shrimp", desc: "14 pcs", price: "21.95" },
  { title: "Hibachi Scallops", desc: "7 oz", price: "26.00" },
  { title: "Filet Mignon", desc: "8 oz", price: "21.95" },
  { title: "Hibachi Salmon", desc: "7 oz", price: "21.95" },
  { title: "Vegetable Dinner", desc: "No Shrimp", price: "14.75" },
]

const hibachiSpecialties = [
  { title: "Saito's Choice", desc: "8 oz filet, 4 oz chicken", price: "22.95" },
  { title: "Saito's Delight", desc: "7 oz chicken, 7 pcs shrimp", price: "22.95" },
  { title: "Saito's Combination", desc: "7 pcs shrimp, 4 oz scallop, 4 oz calamari steak", price: "27.95" },
  { title: "Saito Special", desc: "8 oz filet, 4 oz lobster tail", price: "40.95" },
  { title: "Saito Trio", desc: "4 oz fillet, 7 pcs shrimp, 4 oz lobster tail", price: "40.95" },
  { title: "Surf and Turf", desc: "7 pcs shrimp, 8 oz fillet", price: "27.95" },
  { title: "Ocean Combo", desc: "4 oz lobster tail, 4 oz scallop, 7 pcs shrimp", price: "41.95" },
  { title: "Hibachi Lobster Dinner", desc: "2 pcs, 4 oz lobster tails", price: "44.95" },
]

const hibachiKids = [
  { title: "Hibachi Chicken", price: "10.75" },
  { title: "Teriyaki Steak", price: "11.75" },
  { title: "Hibachi Shrimp", price: "12.75" },
]

const yakisoba = [
  { title: "Chicken Yakisoba", price: "9.95" },
  { title: "Filet Mignon Yakisoba", price: "11.95" },
  { title: "Shrimp Yakisoba", price: "10.95" },
]

const sides = [
  { title: "Chicken Side", desc: "5 oz", price: "6.00" },
  { title: "Steak Side", desc: "4 oz", price: "9.25" },
  { title: "Scallop Side", desc: "4 oz", price: "9.00" },
  { title: "Shrimp Side", desc: "7 pcs", price: "7.50" },
  { title: "Calamari Side", desc: "4 oz", price: "6.50" },
  { title: "Lobster Side", desc: "4 oz", price: "13.50" },
  { title: "Vegetables Side", price: "4.25" },
]

const sauces = [
  { title: "Garlic Butter", price: "0.50" },
  { title: "Teriyaki Sauce", price: "0.50" },
  { title: "Yummy Sauce", price: "0.50" },
  { title: "Spicy Mayo", price: "0.50" },
  { title: "Eel Sauce", price: "0.50" },
  { title: "Sriracha", price: "0.50" },
  { title: "Sweet Chili Sauce", price: "0.50" },
  { title: "Ginger Sauce", price: "0.00" },
  { title: "Mustard Sauce", price: "0.00" },
  { title: "Ginger Dressing", price: "0.00" },
  { title: "Soy Sauce", price: "0.00" },
]

// A section `note` is shown above that section's items.
export const MENU = [
  {
    id: "appetizers",
    label: "Appetizers",
    sections: [{ title: "Appetizers", items: appetizers }],
  },
  {
    id: "sushi",
    label: "Sushi",
    sections: [
      { title: "Specialty Rolls", items: specialtyRolls },
      { title: "Traditional Rolls", items: traditionalRolls },
    ],
  },
  {
    id: "hibachi",
    label: "Hibachi",
    sections: [
      {
        title: "Traditional",
        note: "All hibachi dinners include soup, salad, shrimp appetizer, hibachi vegetables, and steamed or fried rice (+$2.75).",
        items: hibachiTraditional,
      },
      { title: "Specialties", items: hibachiSpecialties },
      { title: "Kids", items: hibachiKids },
    ],
  },
  {
    id: "specials",
    label: "Specials",
    sections: [
      { title: "Yakisoba", items: yakisoba },
      {
        title: "Sides",
        note: "Make it a meal for an additional $5.00 — includes Soup, Salad, Shrimp Appetizer, Hibachi Vegetables and white rice. Substitute Fried Rice for $2.75.",
        items: sides,
      },
    ],
  },
  {
    id: "sauces",
    label: "Sauces",
    sections: [{ title: "Sauces", items: sauces }],
  },
]

export const formatPrice = price =>
  parseFloat(price) === 0 ? "Free" : `$${price}`
