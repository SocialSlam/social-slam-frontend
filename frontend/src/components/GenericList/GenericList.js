import React from 'react';

import './GenericList.scss'

class GenericList extends React.Component {
  render() {
    return(
      <div>
        <h3>{this.props.header}</h3>
        <div className="generic-list">
          {this.props.objectList}
        </div>
      </div>
    )
  }
}

export default GenericList
