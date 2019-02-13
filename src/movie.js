import React, { Component } from 'react';
// import Review from './review';
import Cast from './Cast';

class Movie extends React.Component {
    render() {
        const movie = this.props.movie;
        const castData = movie.cast.map(actor => {
            return <Cast actorData={actor} />
        })
        return (
            <div>

                <h2>{this.props.movie.title}</h2>
                <img src={this.props.movie.poster}></img>
                <br />
                <br />
                <strong>Rating : {this.props.movie.rating}</strong>
                <p>{this.props.movie.description}</p>
                {/* <Review /> */}
                {castData}
            </div>
        );
    }
}

export default Movie;