import React from 'react';
import "./Movies.css"

import MovieListItem from "./MovieListItem";

//const movies = ["PK", "3 Idiots", "Sanju"];

class Movies extends React.Component {

    //constructor
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
        this.storeMovies = this.storeMovies.bind(this);

        this.fetchMovies = this.fetchMovies.bind(this);
    }

    storeMovies (data) {
        const movies = data.results.map (result => {
            const {voter_count, id, genre_ids,  poster_path, title, vote_average, release_date} = result;
            return {voter_count, id, genre_ids,  poster_path, title, vote_average, release_date};
        })

        this.setState({movies});
    }

    fetchMovies (url) {
        fetch(url)
        .then(response => response.json())
        .then(data => this.storeMovies(data))
        .catch(error => console.log(error))

        console.log("componentDidMount is called")       
    }

    componentWillReceiveProps(nextProps){
        if (this.props.url !== nextProps.url) {
            this.fetchMovies(nextProps.url);
          }
    }

    //componentDidMount() is called after the component has constructed and rendered first time.
    componentDidMount (){
        const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

        this.fetchMovies(apiURL);

        // // const apiURL = this.props.url;

        // // fetch(apiURL)
        // // .then(response => response.json())
        // // .then(data => this.storeMovies(data))
        // // .catch(error => console.log(error))

        console.log("componentDidMount is called")
    }

    render() {
        return (
            <section>
                <ul className="movies">
                {
                    this.state.movies.map ((movie)=> (
                        <MovieListItem key={movie.id} movie={movie}/>
                    ))
                }
                </ul>

            </section>
        );
    }
}

export default Movies;