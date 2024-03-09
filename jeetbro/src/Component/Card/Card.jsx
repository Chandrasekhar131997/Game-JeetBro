import React from 'react'
import "../Card/Card.css";

const Card = () => {
  return (
    <div>
      
<div className='card-content'>
<div className="card">
    <button className='c-button'>Player</button>
  <img src="Images/ludoking.jpg" alt="Avatar" style={{width:"100%"}}/>
  <div className="container"> 
  <p style={{color:"orange",fontWeight:"bold"}}>Live...</p>
  </div>
</div>

<div className="card">
    <button className='c-button'>Player</button>
  <img src="Images/Chessking.jpg" alt="Avatar" className='i-img' style={{width:"100%"}}/>
  <div className="container">
    <p style={{color:"green",fontWeight:"bold"}}>Comming soon....</p> 
  </div>
</div>

<div className="card">
    <button className='c-button'>Player</button>
  <img src="Images/Chessking.jpg" alt="Avatar" className='i-img' style={{width:"100%"}}/>
  <div className="container"> 
  <p style={{color:"green",fontWeight:"bold"}}>Comming soon....</p> 
  </div>
</div>

<div className="card">
    <button className='c-button'>Player</button>
  <img src="Images/Chessking.jpg" alt="Avatar" className='i-img' style={{width:"100%"}}/>
  <div className="container"> 
  <p style={{color:"green",fontWeight:"bold"}}>Comming soon....</p> 
  </div>
</div>

<div className="card">
    <button className='c-button'>Player</button>
  <img src="Images/Chessking.jpg" alt="Avatar" className='i-img' style={{width:"100%"}}/>
  <div className="container"> 
  <p style={{color:"green",fontWeight:"bold"}}>Comming soon....</p> 
  </div>
</div>
<div className="card">
    <button className='c-button'>Player</button>
  <img src="Images/Chessking.jpg" alt="Avatar" className='i-img' style={{width:"100%"}}/>
  <div className="container"> 
  <p style={{color:"green",fontWeight:"bold"}}>Comming soon....</p> 
  </div>
</div>
</div>

    </div>
  )
}

export default Card
