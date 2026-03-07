import React from 'react'
import MenuSection from './menu-section'

const yakisoba = [
  { id: 1, title: "Chicken Yakisoba", price: "9.95" },
  { id: 2, title: "Filet Mignon Yakisoba", price: "11.95" },
  { id: 3, title: "Shrimp Yakisoba", price: "10.95" },
]

const sides = [
  { id: 1, title: "Chicken Side", desc: "5 oz", price: "6.00" },
  { id: 2, title: "Steak Side", desc: "4 oz", price: "9.25" },
  { id: 3, title: "Scallop Side", desc: "4 oz", price: "9.00" },
  { id: 4, title: "Shrimp Side", desc: "7 pcs", price: "7.50" },
  { id: 5, title: "Calamari Side", desc: "4 oz", price: "6.50" },
  { id: 6, title: "Lobster Side", desc: "4 oz", price: "13.50" },
  { id: 7, title: "Vegetables Side", price: "4.25" },
]

const SpecialKidsSides = () => (
  <div>
    <MenuSection title="Yakisoba" items={yakisoba} />
    <p className="menu-note">
      Make it a meal for an additional $5.00 — includes Soup, Salad, Shrimp Appetizer, Hibachi Vegetables and white rice.
      Substitute Fried Rice for $2.75.
    </p>
    <MenuSection title="Sides" items={sides} />
  </div>
)

export default SpecialKidsSides
