import React from "react"
import { formatPrice } from "../../data/menu"

const MenuSection = ({ title, note, items }) => (
  <>
    {note && <p className="menu-note">{note}</p>}
    <div className="menu-section">
      <h3 className="menu-section-title">{title}</h3>
      <ul className="menu-items">
        {items.map((item) => (
          <li key={item.title} className="menu-item">
            <div className="menu-item-info">
              <span className="menu-item-name">{item.title}</span>
              {item.desc && <span className="menu-item-desc">{item.desc}</span>}
            </div>
            <span className="menu-item-price">{formatPrice(item.price)}</span>
          </li>
        ))}
      </ul>
    </div>
  </>
)

export default MenuSection
