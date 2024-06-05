import React from 'react'

const Social = ({ platform, handle, icon }) => {
  return (
    <div className="social__card">
      <div className="social__cardContent">
        <img src={icon} alt={`${platform} icon`} className="social__icon" />
        <div className="social__cardText">
          <h2>{platform}</h2>
          <p>{handle}</p>
        </div>
      </div>
    </div>
  )
}

export default Social