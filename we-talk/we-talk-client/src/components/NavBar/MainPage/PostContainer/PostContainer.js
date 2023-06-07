import { cardContentClasses } from '@mui/material';
import React, { Component } from 'react';
import Post from './Post';
import './PostContainer.css'
import post from '../../../../images/post.jpeg'

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            data: []
        }
    }
    getData=()=>{
        let jsonData=[
            {
                "post_id":1,
                "user_id":12345678,
                "user_img":"url",
                "user_name":"Teja Ramisetty",
                //"description":"Loved this picture",
                "post_img":post,
                "like":"25"
            },
            {
                "post_id":2,
                "user_id":12345678,
                "user_img":"url",
                "user_name":"Teja RMS",
                "description":"I like it",
                "post_img":"",
                "like":"25"
            },
            // {
            //     "post_id":3,
            //     "user_id":12345678,
            //     "user_img":"url",
            //     "user_name":"Teja Ramisetty",
            //     //"description":"Loved this picture",
            //     "post_img":post,
            //     "like":"25"
            // },
            // {
            //     "post_id":3,
            //     "user_id":12345678,
            //     "user_img":"url",
            //     "user_name":"Teja Ramisetty",
            //     //"description":"Loved this picture",
            //     "post_img":post,
            //     "like":"25"
            // }
        ]

        this.setState({data:jsonData})
    }
    componentDidMount(){
        this.getData();
    }
    render() { 
        return ( 
            <div>
                {
                    this.state.data.map((item)=>(
                        <Post object={item}/>
                    ))
                }
            </div>
         );
    }
}
 
export default PostContainer;