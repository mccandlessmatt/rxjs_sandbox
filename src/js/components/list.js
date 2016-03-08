import React from 'react'
import { Link } from 'react-router'
import DevTools from './devTools'

const List = (props) => (
  <div>
    <DevTools />
    <ul>
      <li><Link to={'/instagram'}>Search Instagram</Link></li>
    </ul>
    {props.children}
  </div>
)

export default List
