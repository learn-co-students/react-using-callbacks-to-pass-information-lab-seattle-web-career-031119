import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }

    this.updateCell = this.updateCell.bind(this)
  }

  updateCell() {
    const currentColor = this.props.sendColor()
    this.setState({
      color: currentColor
    })
  }

  render() {
    return (
      <div className="cell" onClick={this.updateCell} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
