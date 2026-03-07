import React from 'react'

const MenuSection = ({ title, items }) => (
  <div className="menu-section">
    <h3 className="menu-section-title">{title}</h3>
    <ul className="menu-items">
      {items.map(item => (
        <li key={item.id} className="menu-item">
          <div className="menu-item-info">
            <span className="menu-item-name">{item.title}</span>
            {item.desc && <span className="menu-item-desc">{item.desc}</span>}
          </div>
          <span className="menu-item-price">
            {parseFloat(item.price) === 0 ? 'Free' : `$${item.price}`}
          </span>
        </li>
      ))}
    </ul>
  </div>
)

export default MenuSection
