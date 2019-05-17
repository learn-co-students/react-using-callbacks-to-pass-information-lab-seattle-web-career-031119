import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selected: "#FFF"
    }
  }

  colorPicker = (color) => {
    this.setState({
      selected: color
    })
  }

  currentColorSelected = () => {
    {this.state.selected}
    console.log("Matrix selected color: ", this.state.selected)
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} currentColorSelected={this.currentColorSelected}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector colorPicker={this.colorPicker}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
