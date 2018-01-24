import React, { Component } from 'react'

// Styling Object
const style = {
  jobPost: {
    padding: 16,
    background: '#f9f9f9',
    border: '1px solid #ddd',
    marginBottom: 24
  }
}

export default (props) => {
  
  const job = props

  return(
    <div style={style.jobPost}>
      <h4>{job.title}</h4>
      <p>{job.description}</p>
    </div>                
  )
}
