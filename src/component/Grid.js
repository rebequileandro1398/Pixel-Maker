import React, { useState } from 'react'
import {useStyles} from './Grid.styles'
export const Grid = () => {
    const classes = useStyles()
    const [cell] = useState(Array.from({length: 40}))
  return (
    <div className={classes.grid}>
        {
            cell.map(() => <div className={classes.cell}></div>)
        }
    </div>
  )
}
