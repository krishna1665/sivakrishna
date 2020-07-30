import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Names from './Components/Names'
class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Names} />
                </Switch>
            </div>
        )
    }
}

export default Routes