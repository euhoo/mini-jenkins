import React, {Component} from "react";
import {Route, HashRouter as Router} from "react-router-dom";
import axios from 'axios'
import {Btn} from "./btn";


export class App extends Component {
    clickBtn = () => {
        axios.get('/rrr').then(data => {
            console.log(data);
        })
        console.log('here');
    }
    render() {
        return (
            <Router>
                {/*<Link to="/">Home</Link>*/}
                <Route path="/" component={Btn}/>
            </Router>

        )
    }
}
