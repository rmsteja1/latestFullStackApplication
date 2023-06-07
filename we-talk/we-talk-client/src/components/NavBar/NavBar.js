import React, { Component } from 'react';
import "./NavBar.css";
import Grid from "@mui/material/Grid";
import fblogo from "../../images/logo.png";
import home from "../../images/home.svg";
import page from "../../images/pages.svg";
import watch from "../../images/watch.svg";
import market from "../../images/market.svg";
import group from "../../images/groups.svg";
import { Avatar } from '@mui/material';

class  NavBar extends Component {
    constructor(props) {
        super(props);
        this.state={ }
    }

    render() { 
        return (  
            <div>
                <Grid className='navbar__main' container>
                    <Grid item xs={3}>
                        <div className="navbar__leftbar">
                            <img className="navbar__logo" src={fblogo} />
                            <input className="navbar__search" type="text" placeholder="Search here" />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="navbar__container">
                            <div className="navbar__tab active">
                                <img src={home} height="35px" width="35px"/>
                            </div>
                            <div className="navbar__tab">
                                <img src={page} height="35px" width="35px"/>
                            </div>
                            <div className="navbar__tab">
                                <img src={watch} height="35px" width="35px"/>
                            </div>
                            <div className="navbar__tab">
                                <img src={market} height="35px" width="35px"/>
                            </div>
                            <div className="navbar__tab">
                                <img src={group} height="35px" width="35px"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="navbar__right">
                            <div className="navbar_righttab">
                                <Avatar className="navbar_rightimg" src="https://media.licdn.com/dms/image/C5603AQFb0Av0aLC…eta&t=qUhGh5IRbG0lBDkZN1hLE1bcTu3Dbn1D0zoOM5r1cDk"/>
                                <div className="navbar_profilename">Teja Ramisetty</div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
 
export default NavBar;