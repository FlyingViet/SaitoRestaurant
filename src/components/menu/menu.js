import React, { useState } from 'react'
import Hibachi from './hibachi'
import Sauces from './sauces'
import SushiMenu from './sushi'
import SpecialKidsSides from './sides'
import Appetizers from './appetizers'

const CATEGORIES = [
  { id: 'appetizers',      label: 'Appetizers',  component: Appetizers },
  { id: 'sushi',           label: 'Sushi',        component: SushiMenu },
  { id: 'hibachi',         label: 'Hibachi',      component: Hibachi },
  { id: 'specialKidsSides',label: 'Specials',     component: SpecialKidsSides },
  { id: 'sauces',          label: 'Sauces',       component: Sauces },
]

const Menu = () => {
  const [active, setActive] = useState('appetizers')
  const ActiveCategory = CATEGORIES.find(c => c.id === active).component

  return (
    <section className="menu" id="menu" aria-label="Restaurant menu">
      <div className="menu-heading">
        <h2>Our Menu</h2>
        <p className="menu-subheading">Fresh ingredients, prepared to order</p>
      </div>

      <div className="menu-tabs" role="tablist" aria-label="Menu categories">
        {CATEGORIES.map(({ id, label }) => (
          <button
            key={id}
            role="tab"
            aria-selected={active === id}
            className={`menu-tab${active === id ? ' active' : ''}`}
            onClick={() => setActive(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="menu-content" role="tabpanel">
        <ActiveCategory />
      </div>

      <div className="order-section">
        <h3>Order for Delivery</h3>
        <div className="order-links">
          <a
            className="order-btn doordash"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.doordash.com/store/Saito-Restaurant-NA-340776/en-US/?ignore_splash_experience=true&utm_source=tripadvisor&utm_medium=partnerships&utm_campaign=CX_US_PA_TA_TA_ACQ_CUSXXX__+340776"
          >
            DoorDash
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu
