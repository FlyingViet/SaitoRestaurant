import React from 'react'


const Hibachi = () => {

  const meals = [
    {id: 1, title: "Hibachi Chicken - 7 oz", price: "17.95"},
    {id: 2, title: "Hibachi Shrimp - 14 pcs", price: "21.95"},
    {id: 3, title: "Hibachi Scallops - 7 oz", price: "26.00"},
    {id: 4, title: "Filet Mignon - 8 oz", price: "21.95"},
    {id: 5, title: "Hibachi Salmon - 7 oz", price: "21.95"},
    {id: 6, title: "Vegetable Dinner (No Shrimp)", price: "14.75"},
  ]

  const specialties = [
    {id: 1, title: "Saito's Choice - 8 oz filet, 4 oz chicken", price: "22.95"},
    {id: 2, title: "Saito's Delight - 7 oz chicken, 7 pcs shrimp", price: "22.95"},
    {id: 3, title: "Saito's Combination - 7 pcs shrimp, 4 oz scallop, 4 oz calamari steak", price: "27.95"},
    {id: 4, title: "Saito Special - 8 oz filet, 4 oz lobster tail", price: "40.95"},
    {id: 5, title: "Saito Trio - 4 oz fillet, 7 pcs shrimp, 4 oz lobster tail", price: "40.95"},
    {id: 6, title: "Surf and Turf - 7 pcs shrimp, 8 oz fillet", price: "27.95"},
    {id: 7, title: "Ocean Combo - 4 oz lobster tail, 4 oz scallop, 7 pcs shrimp", price: "41.95"},
    {id: 8, title: "Hibachi Lobster Dinner - 2 pcs, 4 oz lobster tails", price: "44.95"},
  ]

  const kids = [
    {id: 1, title: "Hibachi Chicken", price: "10.75"},
    {id: 2, title: "Teriyaki Steak", price: "11.75"},
    {id: 3, title: "Hibachi Shrimp", price: "12.75"},
  ]

  return (
    <div>
      <h3 className="sample">Traditional</h3>
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
      <h3 className="sample">Specialties</h3>
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
      <br/>
      <h3 className="sample">Kids</h3>
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
    </div>
  )
}

export default Hibachi;