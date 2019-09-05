import React, { Component } from 'react';
// import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        // console.log('componentDidMount - Dashboard');
        // axios.get('./../Data/Sample.json').then(response => {
        //     console.log(response);
        // }).catch(err => {
        //     console.log(err);
        // });
    }

    render() {
        return (
            <div>

                <h3>Dashboard Page {this.props.email} - {this.props.password} </h3>
                

            </div>
        );
    }
}