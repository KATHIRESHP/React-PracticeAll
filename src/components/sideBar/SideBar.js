import React from 'react'
import {sideBarData} from './sideBarList'
import './sidebarcss.css'
function SideBar() {
  return (
    <div className='sidebar'>
        <ul className='outerList'>
          {sideBarData.map((value, key) => {
              return(
                <div 
                class='each_row'
                key={key}
                id={window.location.pathname == value.link? "currentloc":""}
                onClick={()=>{window.location.pathname = value.link}}>
                  <div className='icon'>{value.icon}</div>
                  <div className='title'>{value.title}</div>
                </div>
              )
            }
          )
          }
        </ul>
    </div>
  )
}

export default SideBar