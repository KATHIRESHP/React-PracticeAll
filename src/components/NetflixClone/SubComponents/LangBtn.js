import React, { Component } from 'react'
import '../CSS/langbtn.css'
import LanguageIcon from '@mui/icons-material/Language';

export class LangBtn extends Component {
  render() {
    return (
      <button className='langbtn'>
        <LanguageIcon/>
        <div className='langtxt'>Lang</div>
      </button>
    )
  }
}

export default LangBtn