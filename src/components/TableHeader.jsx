import React from 'react'
import "./TableHeader.css"

function TableHeader({title, symbol}) {
  return (
    <div className="tableHeader">
      <div className="table--title">{title}</div>
      <div className="table--symbol">{symbol}</div>
      
    </div>
  )
}

export default TableHeader