import React from 'react'
import "../Content/Index.css";
const Index = () => {
  return (
    <div className='i-container'>
      <marquee style={{ backgroundColor: "green", padding: "5px", color: "white", marginTop: "-10px" }}>Commission: 5% Referral: 3% For All Games</marquee>
      <div className='wrapper'>
        <div className='content'>
          <h3>The Best Games Out There</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
            Obcaecati quam minima exercitationem sequi, enim libero<br /> adipisci
            ipsam laboriosam culpa provident consequuntur<br /> quaerat,
            placeat reiciendis vero.</p>

          <button className='n-button'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Index
