import React from 'react'
import MenuSection from './menu-section'

const appetizers = [
  { id: 1,  title: "Saito Soup", price: "3.00" },
  { id: 2,  title: "Saito Salad", price: "3.25" },
  { id: 3,  title: "Miso Soup", price: "3.00" },
  { id: 4,  title: "Edamame", price: "4.00" },
  { id: 5,  title: "Beef Sashimi", price: "12.50" },
  { id: 6,  title: "Shrimp Tempura", price: "9.25" },
  { id: 7,  title: "Calamari Tempura", price: "7.50" },
  { id: 8,  title: "Vegetable Tempura", price: "7.00" },
  { id: 9,  title: "Fried Rice", price: "4.50" },
  { id: 10, title: "Shrimp Fried Rice", price: "6.50" },
  { id: 11, title: "Chicken Fried Rice", price: "5.75" },
  { id: 12, title: "Chicken & Shrimp Fried Rice", price: "7.75" },
  { id: 13, title: "Steak Fried Rice", price: "8.75" },
  { id: 14, title: "Extra Shrimp (fried rice)", price: "3.95" },
  { id: 15, title: "Extra Chicken (fried rice)", price: "3.00" },
  { id: 16, title: "Extra Steak (fried rice)", price: "6.00" },
  { id: 17, title: "Fried Egg Rolls (4)", price: "4.50" },
  { id: 18, title: "Fried Dumplings (6)", price: "5.25" },
  { id: 19, title: "Fried Wonton Squares (5)", price: "6.25" },
]

const Appetizers = () => (
  <div>
    <MenuSection title="Appetizers" items={appetizers} />
  </div>
)

export default Appetizers
