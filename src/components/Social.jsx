import React from 'react'
import { Link } from 'react-router-dom'

const Social = ({ socialUrl, platform, handle, icon }) => {
  return (
    <div className="social__card">
      <div className="social__cardContent">
        <img src={icon} alt={`${platform} icon`} className="social__icon" />
        <div className="social__cardText">
        <Link style={{textDecoration: 'none', color: '#3a3153'}} target='__blank' to={socialUrl}>
          <h2>{platform}</h2>
          <p>{handle}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Social