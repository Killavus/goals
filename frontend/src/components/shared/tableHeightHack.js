import React, { Children, Component } from 'react'

class TableHeightHack extends Component {
  render () {
    const { children } = this.props

    const tableStyle = { display: 'table', width:'100%', marginBottom: '20px'}
    const tableRowStyle = { display: 'table-row',  width:'100%' }
    const tableCellStyle = { display: 'table-cell', height: '100%', }

    return (
        <div style={tableStyle}>
          <div style={tableRowStyle}>
            {Children.map(children, (child) => React.cloneElement(child, { style: tableCellStyle }))}
          </div>
        </div>
    )
  }
}

export default TableHeightHack;