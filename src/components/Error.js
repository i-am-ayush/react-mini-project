import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
    const err = useRouteError()
  return (
    <>
    <h1>OOOPSS!!!!</h1>
    <h2>Something went wrong</h2>
    <h2>{err.status + " " + err.statusText}</h2>
    </>
  )
}

export default Error