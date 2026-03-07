import React from 'react'
import MenuSection from './menu-section'

const sauces = [
  { id: 1,  title: "Garlic Butter", price: "0.50" },
  { id: 2,  title: "Teriyaki Sauce", price: "0.50" },
  { id: 3,  title: "Yummy Sauce", price: "0.50" },
  { id: 4,  title: "Spicy Mayo", price: "0.50" },
  { id: 5,  title: "Eel Sauce", price: "0.50" },
  { id: 6,  title: "Sriracha", price: "0.50" },
  { id: 7,  title: "Sweet Chili Sauce", price: "0.50" },
  { id: 8,  title: "Ginger Sauce", price: "0.00" },
  { id: 9,  title: "Mustard Sauce", price: "0.00" },
  { id: 10, title: "Ginger Dressing", price: "0.00" },
  { id: 11, title: "Soy Sauce", price: "0.00" },
]

const Sauces = () => (
  <div>
    <MenuSection title="Sauces" items={sauces} />
  </div>
)

export default Sauces
