import { Avatar, Paper } from '@mui/material';
import React, { Component } from 'react';
import './PostContainer.css';
import post from '../../../../images/post.jpeg';
import like from '../../../../images/like.png';
import likebutton from '../../../../images/likebutton.png';
import commentbutton from '../../../../images/comment.png';
import sharebutton from '../../../../images/share.png';

class Post extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    isImageAvailable=(data)=>{
        return data=="" ? false:true;
    }
    isDescriptionAvailable=(data)=>{
        return data=="" ? false:true;
    }
    render() { 
        return ( 
            <div>
                <Paper className='post__container'>
                    {/* headher */}
                    <div className='post__header'>
                        <div className='post__header__img'>
                            <Avatar src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-1…CsUjEfzF7k9FR2tTiDzTmwty3lPeQ1yaewI3A&oe=63EDB76C" className='post__img' width='65px' /> 
                        </div>
                        <div className='post__header__text'>
                            {this.props.object.user_name}
                        </div>
                    </div>
                    {/* description */}
                    <div className='post__description'>
                        {
                            this.isDescriptionAvailable(this.props.object.description) ? this.props.object.description: <span></span>
                        }
                        
                    </div>
                    {/* image */}
                    <div className='post__image'>
                        {
                            this.isImageAvailable(this.props.object.post_img) ? <img src={this.props.object.post_img} width="500px"/> : <span></span>
                        }
                    </div>
                    {/* like count */}
                    <div className='post__likeCountContainer'>
                        <div className='post__like'>
                            <img className='postlike__img' src={like}/>
                        </div>
                        <div className='post_likeCount'>
                            26
                        </div>
                    </div>
                    {/* like share box */}
                    <div className='post__likeShare'>
                        <div className='post__tab'>
                            <div className='post__tabfirst'>
                                <img src={commentbutton} className='post__tabimg'/>
                            </div>
                            <div className='post__tabtext'>
                                Like
                            </div>
                        </div>

                        <div className='post__tab'>
                            <div className='post__tabfirst'>
                                <img src={sharebutton} className='post__tabimg'/>
                            </div>
                            <div className='post__tabtext'>
                                Comment
                            </div>
                        </div>

                        <div className='post__tab'>
                            <div className='post__tabfirst'>
                                <img src={likebutton} className='post__tabimg'/>
                            </div>
                            <div className='post__tabtext'>
                                Share
                            </div>
                        </div>
                    </div>
                    {/* comment box */}
                    <div className='upload__comment'>
                        <div className='upload__top'>
                            <div>
                                <Avatar src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-1…VhPdewNuVzXrUX4ooXdcT2sszR-pSJREr4u5g&oe=63EDB76C " className='upload__img'/>
                            </div>
                            <div>
                                <input className='upload_box' type='text' placeholder="Type your comment" />
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
         );
    }
}
 
export default Post;