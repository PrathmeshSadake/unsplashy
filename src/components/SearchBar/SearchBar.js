import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

import './search-bar.css';

class SearchBar extends Component{
    render(){
        return(
            <div className="ui container">
              <div className="inner-container">
                <h1 className="heading">The best source for freely-useable photos shared by talented creators.</h1>
                <form>
                    <Input action='Search' className="search-bar" fluid placeholder='Search for free images' icon='search' iconPosition='left' />
                </form>
                <h3 className="license">Read more about the  <a href="https://unsplash.com/license">Unsplash License</a></h3>
              </div>
            </div>
        )
    }
}
export default SearchBar