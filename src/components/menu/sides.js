import React from 'react'

const SpecialKidsSides = () => {

  const special = [
    {id: 1, title: "Chicken Yakisoba Meal", price: "14.95+"},
    {id: 2, title: "Filet Mignon Yakisoba Meal", price: "16.95+"},
    {id: 3, title: "Shrimp Yakisoba Meal", price: "15.95+"},
  ];

  const kids = [
    {id: 1, title: "Kids Hibachi Chicken", price: "9.25"},
    {id: 2, title: "Kids Hibachi Steak", price: "10.25"},
    {id: 3, title: "Kids Hibachi Shrimp", price: "11.25"},
  ];

  const sides = [
    {id: 1, title: "Chicken Side", price: "6.00"},
    {id: 2, title: "Steak Side", price: "9.25"},
    {id: 3, title: "Scallop Side", price: "9.00"},
    {id: 4, title: "Shrimp Side", price: "7.50"},
    {id: 5, title: "Calamari Side", price: "6.50"},
    {id: 6, title: "Lobster Side", price: "13.50"},
    {id: 7, title: "Vegetables Side", price: "4.25"},
    {id: 8, title: "Saito Soup", price: "3.00"},
    {id: 9, title: "Miso Soup", price: "3.00"},
    {id: 10, title: "Saito Salad", price: "3.00"},


  ]
  return (
    <div>
      <h3 className="sample">Yakisoba</h3>
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
      <h3 className="sample">Kids Menu</h3>
      <ul className="menu-items-grid">
        {
          kids.map((node) => {
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
      <h3 className="sample">Sides</h3>
      <ul className="menu-items-grid">
        {
          sides.map((node) => {
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

export default SpecialKidsSides;