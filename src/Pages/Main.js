import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login/Login'
import Index from './Index/Index'
 

class Main extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Router>
                <Route path="/Login" exact component={Login} ></Route>
                <Route path="/Index" component={Index} ></Route>
            </Router>
        )
    }
}

export default Main