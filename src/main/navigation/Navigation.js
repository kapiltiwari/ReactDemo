import React from 'react';
import "./Navigation.css";
import Selection from "./Selection";
import Slider from './Slider';
import SearchButton from "./SearchButton";

class Navigation extends React.Component {

    // constructor (props) {
    //     super(props)
    // }


    render() {
        const {genre, genres, onGenreChange, onChange, year, rating, runtime} = this.props
        return (
            <section className="navigation">
                <Selection
                    genre = {genre}
                    genres = {genres}
                    onGenreChange = {onGenreChange}/>

                <Slider data={year} onChange={onChange}></Slider>
                <Slider data={rating} onChange={onChange}></Slider>
                <Slider data={runtime} onChange={onChange}></Slider>

                <SearchButton
                    onClick={this.props.onSearchButtonClick}
                />
            </section>
        );
    }


    componentDidMount () {
        const generURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

        fetch(generURL)
        .then(response => response.json())
        .then(data => this.props.setGenres(data.genres))
        .catch(error => console.log(error))

        console.log("componentDidMount is called")        
    }
    
}

export default Navigation;