import React, { Component } from 'react';
import ImageLayout from '../ImageLayout';
import "./LeftSidePannel.css";
import covid from "../../../../images/covid.png";
import groups from "../../../../images/groups.png";
import memories from "../../../../images/memories.png";
//import messengerKids from "../../../../images/messengerKids.png";
import addManager from "../../../../images/admanager.png";
import blood from "../../../../images/blood.png"

class  LeftSidePannel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         }
    }
    getData=()=>{
        let jsondata =[
            {
                "image":covid,
                "text":"COVID-19 Information Center"
            },
            {
                "image":groups,
                "text":"Friends"
            },
            {
                "image":memories,
                "text":"Memories"
            },
            // {
            //     "image":messengerKids,
            //     "text":'Messenger Kids'
            // },
            {
                "image":addManager,
                "text":"Ads Manage"
            },
            {
                "image":blood,
                "text":"Blood"
            }
        ];
        this.setState({data:jsondata});
    }

    componentDidMount(){
        this.getData();
    }
    render() { 
        return (  
            <div>
                <ImageLayout image="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-1…U1KOq69ZoaM7wm4cGb6ebQm6CxDAP1texFQqg&oe=63E9C2EC" text="Teja Ramisetty"/>
                {
                    this.state.data.map((item)=>(
                        <ImageLayout image={item.image} text={item.text}/>
                    ))
                }
            </div>
        );
    }
}
 
export default LeftSidePannel;