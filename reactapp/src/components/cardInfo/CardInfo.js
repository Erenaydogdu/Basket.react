import React from 'react'
import "./cardInfo.css"
function CardInfo({info}) {
  return (
    <div style={{textAlign:"center", fontSize:"22px"}}>
      {info}
    </div>
  )
}

export default CardInfo
