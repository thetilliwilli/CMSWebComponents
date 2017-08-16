import React from "react";
import { Link } from "react-router-dom";

import AllComponentsList from "./AllComponentsList.jsx";

export default class MainLayout extends React.Component
{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    render(){
        return (
            <div>
                <Link to="creationTimeRanger">creationTimeRanger</Link>
                <div style={{height:`${window.screen.innerHeight}px`, width:`${0.3*window.screen.innerWidth}px`, border:"1px solid slategrey", float:"left"}}>
                    <this.props.leftBar />
                </div>
                <div style={{height:`${window.screen.innerHeight}px`, width:`${0.7*window.screen.innerWidth}px`, border:"1px solid slategrey"}}>
                    <this.props.content />
                    </div>
            </div>
        );
    }
}