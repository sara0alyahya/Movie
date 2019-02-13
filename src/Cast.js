import React, { Component } from 'react';


class Cast extends React.Component {
    render() {

        const actorData = this.props.actorData;
        return (
            <div>
                <h3>NAME : {actorData.name}</h3>
                <p>ROLE : {actorData.role}</p>

            </div>
        );
    }
}

export default Cast;