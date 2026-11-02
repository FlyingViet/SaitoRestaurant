import React, { useRef, useState } from "react"
import MenuSection from "./menu-section"
import { MENU } from "../../data/menu"

// Every category is rendered into the static HTML (inactive ones are `hidden`)
// so search engines can index the full menu, not just the first tab.
const Menu = () => {
  const [active, setActive] = useState(MENU[0].id)
  const tabRefs = useRef({})

  const onTabKeyDown = (e, index) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key]
    let next
    if (step) next = (index + step + MENU.length) % MENU.length
    else if (e.key === "Home") next = 0
    else if (e.key === "End") next = MENU.length - 1
    else return
    e.preventDefault()
    setActive(MENU[next].id)
    tabRefs.current[MENU[next].id]?.focus()
  }

  return (
    <section className="menu" id="menu" aria-labelledby="menu-title">
      <div className="menu-heading">
        <h2 id="menu-title">Our Menu</h2>
        <p className="menu-subheading">Fresh ingredients, prepared to order</p>
      </div>

      <div className="menu-tabs" role="tablist" aria-label="Menu categories">
        {MENU.map(({ id, label }, index) => (
          <button
            key={id}
            ref={(el) => (tabRefs.current[id] = el)}
            id={`menu-tab-${id}`}
            type="button"
            role="tab"
            aria-selected={active === id}
            aria-controls={`menu-panel-${id}`}
            tabIndex={active === id ? 0 : -1}
            className={`menu-tab${active === id ? " active" : ""}`}
            onClick={() => setActive(id)}
            onKeyDown={(e) => onTabKeyDown(e, index)}
          >
            {label}
          </button>
        ))}
      </div>

      {MENU.map(({ id, sections }) => (
        <div
          key={id}
          id={`menu-panel-${id}`}
          className="menu-content"
          role="tabpanel"
          aria-labelledby={`menu-tab-${id}`}
          hidden={active !== id}
        >
          {sections.map((section) => (
            <MenuSection key={section.title} {...section} />
          ))}
        </div>
      ))}

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
