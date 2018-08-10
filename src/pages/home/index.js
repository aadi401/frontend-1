import React, { Component } from 'react'
import logo from '../../logo.svg'
import './index.css'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

class Home extends Component {
  render () {
    return (
      <div className='home'>
        <header className='App-header'>
          <img src={logo} className='my-logo' alt='logo' />
          <h1 className='App-title'>Welcome to Dashboard</h1>
        </header>
        <Grid container spacing={16} >
          <Grid item xs={12}>
            <Grid container justify='center' spacing={Number(20)}>
              {[0, 1, 2, 3, 4, 5, 6, 7].map(value => (
                <Grid key={value} item>
                  <Paper classes='cards' />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

      </div>
    )
  }
}

export default Home
