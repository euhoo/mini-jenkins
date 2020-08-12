import React, {Component} from "react";
import axios from "axios";
import {Button} from "primereact/button";

export class Btn extends Component {
    clickBtn = () => {
        axios.get('/api/rrr').then(data => {
            console.log(data);
        })
        console.log('here');
    }

    render() {
        return (
            <div>
                Hello world
                <Button onClick={this.clickBtn}/>
            </div>
        )
    }
}
