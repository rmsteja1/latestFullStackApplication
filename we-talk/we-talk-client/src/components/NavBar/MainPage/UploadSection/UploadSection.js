import { Avatar, Paper } from '@mui/material';
import React, { Component } from 'react';
import "./UploadSection.css"
import video from "../../../../images/video.png"
import image from "../../../../images/image.png"
import feeling from "../../../../images/feelings.png"

class  UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    render() { 
        return (  
            <div>
                <Paper className='upload__container'>
                    <div className='upload__top'>
                        <div>
                            <Avatar src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-1…VhPdewNuVzXrUX4ooXdcT2sszR-pSJREr4u5g&oe=63EDB76C " className='upload__img'/>
                        </div>
                        <div>
                            <input className='upload_box' type='text' placeholder="What do you want to post ?" />
                        </div>
                    </div>
                    <div className='upload__bottom'>
                        <div className='upload__tab'>
                            <img src={video} width= "35px"/> 
                            <div className='upload__text'>Live Video</div>
                        </div>
                        <div className='upload__tab'>
                            <img src={image}  width= "35px"/>
                            <div className='upload__text'>Photo/Video</div>
                        </div>
                        <div className='upload__tab'>
                            <img src={feeling}  width= "35px"/>
                            <div className='upload__text'>Feeling/Activity</div>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}
 
export default UploadSection;