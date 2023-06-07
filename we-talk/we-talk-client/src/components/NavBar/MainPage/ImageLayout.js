import React, { Component } from 'react';
import { Avatar } from '@mui/material';
//import "C:/Users/rmste/OneDrive/Desktop/full stack applications/We Talk/we-talk/src/components/NavBar/MainPage/MainPage.css"
import "./Mainpage.css" 
class ImageLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (  
            <div class='imageLayout__container'>
            <div class ='imageLayout__imglay'>
                <Avatar class='imageLayout__img' src={this.props.image} />
            </div>
            <div class='imageLayout__text'>
                {this.props.text}
            </div>
        </div>
        );
    }
}
 
export default ImageLayout;