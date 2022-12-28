import {Button} from 'react-bootstrap'

import React from 'react'

function Button_Boot() {
  return (
    <>
        <Button 
         as='input' 
         variant='danger'
         value="HI" 
         size='lg'
         active
        />
    </>
  )
}

export default Button_Boot