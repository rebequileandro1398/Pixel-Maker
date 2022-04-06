import React, { useState } from 'react'
import {useStyles} from './Grid.styles'

const offCell = {
  on: false,
  color: '#000000'
}
const initialCells = Array.from({length: 40}, ()=> offCell)
export const Grid = ({currentColor}) => {
    const classes = useStyles()
    const [cells, setCells] = useState(initialCells)

    const updateCell = (i, defaultState) => (e) => {
      e.preventDefault()
      setCells(cells.map((cell, cellindex)=>{
        if(cellindex === i) {
          if(defaultState) return defaultState;
          return {
            on: true,
            color: currentColor
          }
        }
        return cell;
      }))
    }
  return (
    <div className={classes.grid}>
        {
            cells.map((cell, i) => <div 
              key={i} style={{background: cell.on ? cell.color : '#fff'}} 
              className={classes.cell} 
              onClick={updateCell(i)}
              onContextMenu={updateCell(i, offCell)}
              ></div>)
        }
    </div>
  )
}
