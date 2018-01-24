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

class Jobs extends Component {

  constructor() {
    super()
    this.state = {
      jobs: [
        {id:0, title:'TEST', description:'this is a test job'},
        {id:1, title:'TEST 2', description:'this is a test job 2'}
      ]
    }
  }



  render() {
    return(
      <div>
        <h3>Current Jobs</h3>
            <ol>
              { this.state.jobs.map((job, i) => {
                return (
                  <li key={i}>
                    <div style={style.jobPost}>
                      <h4>{job.title}</h4>
                      <p>{job.description}</p>
                    </div>
                  </li>
                )
              })

              }
            </ol>
      </div>
    )
  }
}

export default Jobs