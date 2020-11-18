import React, { Component } from 'react';

import InputForm from '../InputForm/InputForm';

import './search-bar.css';

class SearchBar extends Component{
  
    render(){
        return(
          <div>
            <div className="ui container">
              <div className="inner-container">
                <h1 className="heading">The best source for freely-useable photos shared by talented creators.</h1>
                </div>
                </div>
                <InputForm />
              
            </div>
        )
    }
}
export default SearchBar