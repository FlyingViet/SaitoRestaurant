import React from 'react'

const SpecialKidsSides = () => {

  const special = [
    {id: 1, title: "Chicken Yakisoba", price: "9.95"},
    {id: 2, title: "Filet Mignon Yakisoba", price: "11.95"},
    {id: 3, title: "Shrimp Yakisoba", price: "10.95"},
  ];

  const sides = [
    {id: 1, title: "Chicken Side - 5 oz", price: "6.00"},
    {id: 2, title: "Steak Side - 4 oz", price: "9.25"},
    {id: 3, title: "Scallop Side - 4 oz", price: "9.00"},
    {id: 4, title: "Shrimp Side - 7 pcs", price: "7.50"},
    {id: 5, title: "Calamari Side - 4 oz", price: "6.50"},
    {id: 6, title: "Lobster Side - 4 oz", price: "13.50"},
    {id: 7, title: "Vegetables Side", price: "4.25"},
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
      <p>Make it a meal for an additional $5.00. <br/> 
        Meal includes Soup, Salad, Shrimp Appetizer, Hibachi Vegetables and white rice. <br/> 
        Substitute Fried Rice for $2.75
      </p>
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