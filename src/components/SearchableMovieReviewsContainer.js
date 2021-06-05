import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: "",
        reviews: []
    }

    handleChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch(URL + "&query=" + this.state.query)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })

    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <h1>Search Reviews</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="query" value={this.state.query}></input>
                    <input type="submit" value="search"></input>
                </form>
                {this.state.reviews && <MovieReviews reviews={this.state.reviews} />}
            </div>
        )
    }
}
