import React, {Component} from "react";
import {Button} from "primereact/button";
import axios from 'axios'


export class App extends Component {
    clickBtn = () => {
        axios.get('/rrr').then(data => {
            console.log(data);
        })
        console.log('here');
    }
    render() {
        return (
            <div>
                Hello World
                <Button onClick={this.clickBtn}/>
            </div>
        )
    }
}
