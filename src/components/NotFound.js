import React, { Component } from 'react'

export default class NotFound extends Component {
    render() {
        console.log(this.props);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <p className="display-4">page not found</p>
                        <p className="display-5">the requested url <span className="text-danger">{this.props.location.pathname}</span> was not found !!!</p>
                    </div>
                </div>
            </div>
        )
    }
}
