import * as React from 'react'

export const SearchBar:React.FC=()=> {
  return <div className="control control--block flex-align__bottom">
        <input className="control__input" type="text" role="search" placeholder="Slams, Künstler, Kategorien finden" />
      </div>
}
