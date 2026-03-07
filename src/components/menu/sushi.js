import React from 'react'
import MenuSection from './menu-section'

const special = [
  { id: 1,  title: "Splash Meadow Roll", price: "16.50" },
  { id: 2,  title: "1999 Roll", price: "13.95" },
  { id: 3,  title: "Ocean Roll", price: "12.95" },
  { id: 4,  title: "Double Decker Roll", price: "12.95" },
  { id: 5,  title: "Shrimp Lover Roll", price: "10.50" },
  { id: 6,  title: "Crazy Roll", price: "11.50" },
  { id: 7,  title: "Cupcake Roll", price: "10.75" },
  { id: 8,  title: "Bills Roll", price: "9.75" },
  { id: 9,  title: "Rainbow Roll", price: "9.75" },
  { id: 10, title: "Saito Roll", price: "9.50" },
  { id: 11, title: "Tower Roll", price: "14.00" },
]

const traditional = [
  { id: 1,  title: "Double Crunchy Roll", price: "9.00" },
  { id: 2,  title: "Tennessee Roll", price: "7.25" },
  { id: 3,  title: "Alaskan Roll", price: "8.25" },
  { id: 4,  title: "Texas Roll", price: "7.00" },
  { id: 5,  title: "Crunchy Shrimp Roll", price: "6.75" },
  { id: 6,  title: "California Roll", price: "5.25" },
  { id: 7,  title: "Tempura Roll", price: "6.60" },
  { id: 8,  title: "Soft Shelled Crab Roll", price: "9.00" },
  { id: 9,  title: "Tokyo Roll", price: "6.75" },
  { id: 10, title: "Spicy Crunchy Roll", price: "5.50" },
  { id: 11, title: "Salmon & Eel Roll", price: "7.75" },
  { id: 12, title: "Eel Cucumber Roll", price: "7.25" },
  { id: 13, title: "Spicy Tuna Roll", price: "7.00" },
  { id: 14, title: "Spicy Crawfish Roll", price: "6.50" },
  { id: 15, title: "Spicy Shrimp Roll", price: "7.00" },
  { id: 16, title: "Salmon Roll", price: "4.25" },
  { id: 17, title: "Tuna Roll", price: "4.25" },
  { id: 18, title: "Yellow Tail Scallion Roll", price: "4.50" },
  { id: 19, title: "Vegetables Roll", price: "4.75" },
  { id: 20, title: "Cucumber Roll", price: "3.25" },
]

const SushiMenu = () => (
  <div>
    <MenuSection title="Specialty Rolls" items={special} />
    <MenuSection title="Traditional Rolls" items={traditional} />
  </div>
)

export default SushiMenu
