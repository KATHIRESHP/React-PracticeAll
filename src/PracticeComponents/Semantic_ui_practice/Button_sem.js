
import {Button, ButtonContent , Icon} from 'semantic-ui-react'

import React, { Component } from 'react'

export class Button_sem extends Component {
  render() {
    return (
      <div>
        <Button animated="vertical">
            <ButtonContent visible>Ant</ButtonContent>
            <ButtonContent hidden>Killed it</ButtonContent>
        </Button>
      </div>
    )
  }
}

export default Button_sem