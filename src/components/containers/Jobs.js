import React, { Component } from 'react'
import superagent from 'superagent'
import Preview from '../presentation/Preview'

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
                      <Preview {...job}/>
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