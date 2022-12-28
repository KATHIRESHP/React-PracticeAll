import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class CompC extends Component {
  render() {
    return (
      <UserConsumer>
      {
        (username) => {
            return <h1>Hi! I am {username}</h1>
        }
      }
      </UserConsumer>
    )
  }
}

export default CompC