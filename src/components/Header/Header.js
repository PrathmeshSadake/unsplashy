import React, { Component } from 'react';

import { Image } from 'semantic-ui-react'


import './header.css';
import SearchBar from '../SearchBar/SearchBar';
import GithubButton from '../GithubButton/GithubButton';


class Header extends Component{

    index = Math.floor(Math.random() * 5);
    arr = ["https://images.unsplash.com/photo-1559823317-161d069eea27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", "https://images.unsplash.com/photo-1605309367703-fc6e040816bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", "https://images.unsplash.com/photo-1604932292784-ce6b48294afc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80", "https://images.unsplash.com/photo-1605190274566-aa85a45fa0d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80","https://images.unsplash.com/photo-1600073956897-4fc08a2b27d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"];
    imageSource = this.arr[this.index];

    render(){
        return(
            <div className="header" >
                <Image className="img" fluid/>
                <SearchBar/>
                <GithubButton/>
            </div>
        )
    }
};

export default Header;