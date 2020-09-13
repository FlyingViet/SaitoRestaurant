import React from 'react'


const Hibachi = () => {

  const hibachi = [
    {id: 1, title: "Hibachi Fried Rice (Regular/Large)", price: "4.10/$8.00"},
    {id: 2, title: "Hibachi Shrimp Fried Rice (Regular/Large)", price: "5.75/$11.40"},
    {id: 3, title: "Hibachi Chicken Fried Rice (Regular/Large)", price: "5.15/$10.25"},
    {id: 4, title: "Hibachi Chicken and Shrimp Mix Fried Rice (Regular/Large)", price: "7.75/$15.40"},
    {id: 5, title: "Hibachi Steak Fried Rice (Regular/Large)", price: "8.00/$15.75"},
    {id: 6, title: "Vegetable Tempura", price: "6.25"},
    {id: 7, title: "Calamari Tempura", price: "7.00"},
    {id: 8, title: "Shrimp Tempura", price: "8.00"},
    {id: 9, title: "4 Piece Fried Egg Rolls", price: "4.50"},
  ];

  const meals = [
    {id: 1, title: "7 oz. Hibachi Chicken", price: "15.95+"},
    {id: 2, title: "14 Piece Hibachi Shrimp", price: "19.95+"},
    {id: 3, title: "Hibachi Scallops", price: "20.95+"},
    {id: 4, title: "Filet Mignon", price: "19.95+"},
    {id: 5, title: "Hibachi Salmon", price: "19.95+"},
    {id: 6, title: "Vegetable Dinner", price: "13.25+"},
  ]

  const specialties = [
    {id: 1, title: "Saito's Choice", price: "20.95+"},
    {id: 2, title: "Saito's Delight", price: "20.95+"},
    {id: 3, title: "Saito's Combination", price: "24.95+"},
    {id: 4, title: "Saito Special", price: "31.95+"},
    {id: 5, title: "Saito Trio", price: "31.95+"},
    {id: 6, title: "Surf and Turf", price: "24.95+"},
    {id: 7, title: "Ocean Combination", price: "33.95+"},
    {id: 8, title: "Hibachi Lobster Tails", price: "31.95+"},
  ]
  return (
    <div>
      <h3 className="sample">Hibachi Appetizers</h3>
      <ul className="menu-items-grid">
        {
          hibachi.map((node) => {
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
      <h3 className="sample">Hibachi Meals</h3>
      <ul className="menu-items-grid">
        {
          meals.map((node) => {
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
      <h3 className="sample">Specialties Hibachi Meals</h3>
      <ul className="menu-items-grid">
        {
          specialties.map((node) => {
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

export default Hibachi;