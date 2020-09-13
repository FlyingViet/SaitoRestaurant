import React from 'react'

const SushiMenu = () => {

  const special = [
    {id: 1, title: "Splash Meadow Roll", price: "15.50"},
    {id: 2, title: "1999 Roll", price: "12.95"},
    {id: 3, title: "Ocean Roll", price: "12.95"},
    {id: 4, title: "Double Decker Roll", price: "11.95"},
    {id: 5, title: "Shrimp Lover Roll", price: "9.50"},
    {id: 6, title: "Crazy Roll", price: "10.00"},
    {id: 7, title: "Cupcake Roll", price: "9.75"},
    {id: 8, title: "Bills Roll", price: "8.75"},
    {id: 9, title: "Rainbow Roll", price: "8.50"},
    {id: 10, title: "Saito Roll", price: "8.50"},
    {id: 11, title: "Tower Roll", price: "13.00"},
  ];

  const traditional = [
    {id: 1, title: "Double Crunchy Roll", price: "8.00"},
    {id: 2, title: "Tennessee Roll", price: "6.75"},
    {id: 3, title: "Alaskan Roll", price: "7.75"},
    {id: 4, title: "Texas Roll", price: "6.10"},
    {id: 5, title: "Crunchy Shrimp Roll", price: "6.25"},
    {id: 6, title: "California Roll", price: "4.75"},
    {id: 7, title: "Tempura Roll", price: "6.10"},
    {id: 8, title: "Soft Shelled Crab Roll", price: "8.00"},
    {id: 9, title: "Tokyo Roll", price: "6.25"},
    {id: 10, title: "Spicy Crunchy Roll", price: "5.00"},
    {id: 11, title: "Salmon, Eel Roll", price: "7.25"},
    {id: 12, title: "Eel Cucumber Roll", price: "6.25"},
    {id: 11, title: "Spicy Tuna Roll", price: "6.25"},
    {id: 11, title: "Spicy Crawfish Roll", price: "6.00"},
    {id: 11, title: "Spicy Shrimp Roll", price: "6.00"},
    {id: 11, title: "Salmon Roll", price: "3.75"},
    {id: 11, title: "Tuna Roll", price: "3.75"},
    {id: 11, title: "Yellow Tail Scallion Roll", price: "3.75"},
    {id: 11, title: "Vegetables Roll", price: "4.25"},
    {id: 11, title: "Cucumber Roll", price: "2.75"},
  ]
  return (
    <div>
      <h3 className="sample">Specialty Sushi Rolls</h3>
      <ul className="menu-items-grid">
        {
          special.map((node) => {
            return (
              <li key={node.id} className="menu-item">
                <h3>{node.title}</h3>
                <span>${node.price}</span>
              </li>
            )
          })
        }
      </ul>
      <br/>
      <h3 className="sample">Traditional Sushi Rolls</h3>
      <ul className="menu-items-grid">
        {
          traditional.map((node) => {
            return (
              <li key={node.id} className="menu-item">
                <h3>{node.title}</h3>
                <span>${node.price}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default SushiMenu;