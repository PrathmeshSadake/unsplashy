import React, { Component } from 'react';

import { Image } from 'semantic-ui-react'

// import Unsplash from '../../api/unsplash';
import './header.css';
import GithubButton from '../GithubButton/GithubButton';
// import SearchBar from '../SearchBar/SearchBar';
// import ImageGrid from '../ImageGrid/ImageGrid';


class Header extends Component{



    render(){
        return(
            <div className="header" >
                <Image className="img" fluid/>
            
                {/* {console.log(this.state.images.length)} */}
                <GithubButton/>
                {/* {console.log(this.state.images)}
                <img src={} alt={}/> */}
            </div>
        )
    }
};

export default Header;