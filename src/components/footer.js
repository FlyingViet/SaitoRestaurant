import React from 'react'

const Footer = () => {

  return (
    <footer>
      <section>
        <div className="address">
          <h3>WHERE ARE WE?</h3>
          <span>6600 Stage Rd # 101, </span>
          <span>Memphis, TN 38134</span>
        </div>
        <div className="hours">
          <h3>HOURS</h3>
          <span>Sunday - Thursday / 11-9</span>
          <span>Friday - Saturday / 11-10</span>
        </div>
        <div className="contact">
          <h3>CONTACT</h3>
          <span>+1 (901) 373-1957</span>
          <span>saitomemphis.2018@outlook.com</span>
        </div>
      </section>
      <p>Built by
        <a href="https://anhbrian.com" target="_blank" rel="noopener noreferrer">Brian Hoang</a>
      </p>
    </footer>
  )
}

export default Footer;