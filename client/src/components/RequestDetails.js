import React from 'react'
import ProgressBar from './styles/ProgressBar'
import { useParams } from 'react-router-dom'

function RequestDetails() {
  // get the params from the URL
  const params = useParams()
  console.log(params)
  return (
    <div className="form-div">
        <h2>Request Title</h2>
        <ProgressBar bgcolor="red" progress='60'  height={30} />
    </div>
  )
}

export default RequestDetails