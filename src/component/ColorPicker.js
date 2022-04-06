import React, { useState } from 'react'
import { useStyles } from './ColorPicker.styles'
export const ColorPicker = ({currentColor, setCurrentColor}) => {
    const classes = useStyles()
    const colorChange = (e) => {
        setCurrentColor(e.target.value)
    }
  return (
    <div>
        <input type='color' className={classes.colorPicker} onChange={colorChange} value={currentColor}/>
    </div>
  )
}
