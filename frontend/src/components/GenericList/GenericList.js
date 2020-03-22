import React from 'react';

import './GenericList.scss'

class GenericList extends React.Component {
  render() {
    return(
      <div>
        <span>{this.props.header}</span>
        <div className="artist-list">
          {this.props.objectList}
        </div>
      </div>
    )
  }
}

export default GenericList
