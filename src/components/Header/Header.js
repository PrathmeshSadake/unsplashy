import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

import GithubButton from '../GithubButton/GithubButton';

import './header.css';

class Header extends Component{
    render(){
        return(
            <div className="header" >
                <Image className="img" fluid/>
                <GithubButton/>
            </div>
        )
    }
};

export default Header;