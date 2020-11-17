import React, { Component } from 'react';

import { Image } from 'semantic-ui-react'

import Unsplash from '../../api/unsplash';
import './header.css';
import GithubButton from '../GithubButton/GithubButton';
import SearchBar from '../SearchBar/SearchBar';
// import ImageGrid from '../ImageGrid/ImageGrid';


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            images : []
        }
    }

    onSearchSubmit = async (input) => {
       const response = await Unsplash.get('search/photos', {
            params: { 
                query: input,
                per_page: 50,
                // orientation: 'landscape',
             },
        });

        console.log(response.data.results);

        this.setState({ images: response.data.results });
    }


    render(){
        return(
            <div className="header" >
                <Image className="img" fluid/>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {console.log(this.state.images.length)}
                <GithubButton/>
                {/* <ImageGrid images={this.state.images} /> */}
            </div>
        )
    }
};

export default Header;