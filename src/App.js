import React, { Component } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

import Unsplash from './api/unsplash';

class App extends Component{
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

        this.setState({ images: response.data.results });
    }

    render(){
        return(
            <div>
                <Header />
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {
                    this.state.images.map((image)=>{
                        return <img key={image.id} src={image.urls.regular} alt={image.description}/>
                    })
                }
            </div>
        );
    };
};

export default App;