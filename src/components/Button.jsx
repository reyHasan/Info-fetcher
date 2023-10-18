import React from 'react'

const Button = ({styles, onClick, children}) => {
  return (
    <button className={`px-4 py-2 md:px-12 md:py-4 border rounded-full ${styles}`} onClick={onClick}> {children} </button>
  )
}

export default Button