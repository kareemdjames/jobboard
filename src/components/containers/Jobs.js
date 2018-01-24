import React, { Component } from 'react'
import superagent from 'superagent'

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
        
      ]
    }
  }

  componentDidMount() {
    // Fetch the jobs from the db
    superagent.get('/api/job')
    .query(null)
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err) {
        alert('Error ' + err.mesasge)
      }
      const jobs = response.body.data
      console.log('JOBS: ' + JSON.stringify(jobs))

      this.setState({
        jobs
      })
    })
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