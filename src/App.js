import React, { Component } from 'react';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

import './App.css';

class App extends Component{
    render(){
        return(
            <div>
                <Header />
                <SearchBar/>
            </div>
        );
    };
};

export default App;