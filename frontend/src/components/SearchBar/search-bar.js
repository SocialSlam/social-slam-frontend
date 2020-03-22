import React from 'react'
import { Pill } from '../atoms'

export function SearchBar() {
  return (
    <>
      <div className="control control--block">
        <input className="control__input" type="text" role="search" placeholder="Slams, Künstler, Kategorien finden" />
      </div>
      <Pill pillText="Hello World!" />
    </>
  )
}

export default SearchBar
