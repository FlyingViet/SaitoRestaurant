import React, { useEffect, useRef, useState } from "react"
import {
  HOURS,
  LOCATIONS,
  cityLine,
  directionsHref,
  telHref,
} from "../data/site"

const todayInMemphis = () =>
  new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: "America/Chicago",
  }).format(new Date())

// Loads Leaflet only when the map is about to scroll into view.
const LazyMap = () => {
  const ref = useRef(null)
  const [MapComponent, setMapComponent] = useState(null)

  useEffect(() => {
    const load = () =>
      import("./leafletMap").then((mod) => setMapComponent(() => mod.default))
    if (!("IntersectionObserver" in window)) {
      load()
      return undefined
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect()
          load()
        }
      },
      { rootMargin: "400px" }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="map-wrap">
      {MapComponent && <MapComponent />}
    </div>
  )
}

const Locations = () => {
  const [today, setToday] = useState(null)

  useEffect(() => setToday(todayInMemphis()), [])

  return (
    <section
      id="location"
      className="locations"
      aria-labelledby="locations-title"
    >
      <div className="container">
        <h2 id="locations-title" className="section-title">
          Locations &amp; Hours
        </h2>

        <div className="locations-grid">
          {LOCATIONS.map((loc) => (
            <article key={loc.id} className="location-card">
              <h3>{loc.name}</h3>
              <address>
                <span>{loc.street}</span>
                <span>{cityLine(loc)}</span>
              </address>
              <div className="location-actions">
                <a
                  className="btn btn-primary"
                  href={directionsHref(loc)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
                <a className="btn btn-outline" href={telHref(loc.phone)}>
                  Call {loc.phone}
                </a>
              </div>
            </article>
          ))}

          <article className="location-card hours-card">
            <h3>Hours</h3>
            <ul className="hours-list">
              {HOURS.map((h) => {
                const isToday = Boolean(today) && h.days.includes(today)
                return (
                  <li
                    key={h.label}
                    className={isToday ? "is-today" : undefined}
                  >
                    <span>
                      {h.label}
                      {isToday && <span className="today-badge">Today</span>}
                    </span>
                    <span>{h.time}</span>
                  </li>
                )
              })}
            </ul>
          </article>
        </div>
      </div>

      <LazyMap />
    </section>
  )
}

export default Locations
