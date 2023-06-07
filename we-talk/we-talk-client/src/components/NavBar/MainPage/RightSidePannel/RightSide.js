import React, { Component } from 'react';
import "./RightSide.css";
import covid from "../../../../images/covid.png";
import groups from "../../../../images/groups.png";
import memories from "../../../../images/memories.png";
//import messengerKids from "../../../../images/messengerKids.png";
import addManager from "../../../../images/admanager.png";
import blood from "../../../../images/blood.png"
import ImageLayout from '../ImageLayout';

class  RightSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]  
        }
    }
    getData=()=>{
        let jsondata=[
            {
                "image":covid,
                "text":"User1"
            },
            {
                "image":groups,
                "text":"Srinivas"
            },
            {
                "image":memories,
                "text":"Rao"
            },
            // {
            //     "image":messengerKids,
            //     "text":'Messenger Kids'
            // },
            {
                "image":addManager,
                "text":"Sravya"
            },
            {
                "image":blood,
                "text":"Aadhya"
            }
        ];
        this.setState({data:jsondata});
    }
    componentDidMount(){
        this.getData()
    }
    render() { 
        return (  
           <div className='rightside_container'>
                <div className='rightside__header'>
                    Contacts
                </div>
                <div className='rightside__content'>
                {
                    this.state.data.map((item)=>(
                        <ImageLayout image={item.image} text={item.text}/>
                    ))
                }
                </div>
           </div> 
        );
    }
}
 
export default RightSide;