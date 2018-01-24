import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Feed from './components/Feed'

const app = (
	<Router>
		<Feed />
	</Router>
)


ReactDOM.render(app, document.getElementById('root'))