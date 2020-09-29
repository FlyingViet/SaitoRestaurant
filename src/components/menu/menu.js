import React, { useState } from 'react'
import Hibachi from './hibachi'
import Sauces from './sauces'
import SushiMenu from './sushi'
import SpecialKidsSides from './sides'
import EmptyMenu from './empty-menu'
import Appetizers from './appetizers'

const Menu = () => {
  const [menuCategory, setMenuCategory] = useState('');
  let SelectedCategory;
  if (menuCategory === 'sushi') {
    SelectedCategory = SushiMenu
  } 
  else if (menuCategory === 'specialKidsSides') {
    SelectedCategory = SpecialKidsSides
  } 
  else if (menuCategory === 'hibachi') {
    SelectedCategory = Hibachi
  } 
  else if (menuCategory === 'sauces') {
    SelectedCategory = Sauces
  } 
  else if (menuCategory === 'appetizers') {
    SelectedCategory = Appetizers
  }
  else {
    SelectedCategory = EmptyMenu
  }
  
  return (
    <section className="menu">
      <h2>OUR MENUS</h2>
      <ul className="menu-headers">
        <li className="menu-header" onClick={() => setMenuCategory('appetizers')}>Appetizers</li>
        <li className="menu-header" onClick={() => setMenuCategory('sushi')}>Sushi</li>
        <li className="menu-header" onClick={() => setMenuCategory('hibachi')}>Hibachi</li>
        <li className="menu-header" onClick={() => setMenuCategory('specialKidsSides')}>Specials</li>
        <li className="menu-header" onClick={() => setMenuCategory('sauces')} >Sauces</li>
      </ul>
      <SelectedCategory />
      <br/>
      <h2>Order from</h2>
      <ul className="menu-headers">
        <li className="menu-header"><a target="_blank" rel="noopener noreferrer" href="https://www.doordash.com/store/Saito-Restaurant-NA-340776/en-US/?ignore_splash_experience=true&utm_source=tripadvisor&utm_medium=partnerships&utm_campaign=CX_US_PA_TA_TA_ACQ_CUSXXX__+340776">Door Dash</a></li>
        <li className="menu-header"><a target="_blank" rel="noopener noreferrer" href="https://www.grubhub.com/restaurant/saito-restaurant-6600-stage-rd-ste-101-bartlett/1218772?affiliate=1143&utm_source=tripadvisor-affiliate-network&utm_medium=affiliate&utm_campaign=1143&utm_content=1218772">Grubhub</a></li>
      </ul>
    
    </section>
  )
}

export default Menu;