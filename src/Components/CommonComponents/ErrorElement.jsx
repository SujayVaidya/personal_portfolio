import React from 'react'

const ErrorElement = ({ error }) => {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error?.message || 'An unexpected error occurred.'}</p>
    </div>
  )
}

export default ErrorElement
