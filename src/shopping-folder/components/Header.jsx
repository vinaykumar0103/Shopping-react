


import React from 'react'

const Header = () => {
  return (
    <div className="headerSection">
      <div className="left">
      <div className="tittle">
        <h2>Shopping</h2>
      </div>
      </div>
      <div className="center">
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Children</li>
        <li>Beauty</li>
      </ul>
      </div>
       <div className="search">
        <input type="text" placeholder='Search...' />
       </div>
      <div className="right">
        <div className="SignIn">
          Signin/Signup
        </div>
        <div className="cart">
          Cart
        </div>
      </div>
    </div>
  )
}

export default Header
