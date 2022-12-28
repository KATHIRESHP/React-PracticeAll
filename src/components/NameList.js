import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Kathir', 'Kavin', 'Nikesh']
    const Persons = [
        {
            id: 1,
            name: 'Kathir',
            age: 20,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Kavin',
            age: 18,
            skill: 'Machine learning'
        }
    ]
    const list =  names.map((name, indeex) => <h2 key = {indeex}>{indeex} {name}</h2>)
    return <div>{list}</div>
}

export default NameList