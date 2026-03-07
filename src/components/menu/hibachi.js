import React from 'react'
import MenuSection from './menu-section'

const meals = [
  { id: 1, title: "Hibachi Chicken", desc: "7 oz", price: "17.95" },
  { id: 2, title: "Hibachi Shrimp", desc: "14 pcs", price: "21.95" },
  { id: 3, title: "Hibachi Scallops", desc: "7 oz", price: "26.00" },
  { id: 4, title: "Filet Mignon", desc: "8 oz", price: "21.95" },
  { id: 5, title: "Hibachi Salmon", desc: "7 oz", price: "21.95" },
  { id: 6, title: "Vegetable Dinner", desc: "No Shrimp", price: "14.75" },
]

const specialties = [
  { id: 1, title: "Saito's Choice", desc: "8 oz filet, 4 oz chicken", price: "22.95" },
  { id: 2, title: "Saito's Delight", desc: "7 oz chicken, 7 pcs shrimp", price: "22.95" },
  { id: 3, title: "Saito's Combination", desc: "7 pcs shrimp, 4 oz scallop, 4 oz calamari steak", price: "27.95" },
  { id: 4, title: "Saito Special", desc: "8 oz filet, 4 oz lobster tail", price: "40.95" },
  { id: 5, title: "Saito Trio", desc: "4 oz fillet, 7 pcs shrimp, 4 oz lobster tail", price: "40.95" },
  { id: 6, title: "Surf and Turf", desc: "7 pcs shrimp, 8 oz fillet", price: "27.95" },
  { id: 7, title: "Ocean Combo", desc: "4 oz lobster tail, 4 oz scallop, 7 pcs shrimp", price: "41.95" },
  { id: 8, title: "Hibachi Lobster Dinner", desc: "2 pcs, 4 oz lobster tails", price: "44.95" },
]

const kids = [
  { id: 1, title: "Hibachi Chicken", price: "10.75" },
  { id: 2, title: "Teriyaki Steak", price: "11.75" },
  { id: 3, title: "Hibachi Shrimp", price: "12.75" },
]

const Hibachi = () => (
  <div>
    <p className="menu-note">All hibachi dinners include soup, salad, shrimp appetizer, hibachi vegetables, and steamed or fried rice (+$2.75).</p>
    <MenuSection title="Traditional" items={meals} />
    <MenuSection title="Specialties" items={specialties} />
    <MenuSection title="Kids" items={kids} />
  </div>
)

export default Hibachi
