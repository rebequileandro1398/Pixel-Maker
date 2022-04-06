import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
  grid: {
    display: 'grid',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridTemplateColumns: 'repeat(8, 1fr)',
    width: '100vmin',
    height: '70vmin',
    outline: '2px solid black',
  },
  cell: {
    border: '1px solid black',
    cursor: 'pointer',
    '&:hover': {
        border: 'none',
        transform: 'scale(1.0.5)'
    }
  }
})