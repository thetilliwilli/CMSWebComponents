import React from "react";
import { Link } from "react-router-dom";

export default class AllComponentsList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="creationTimeRanger">creationTimeRanger</Link></li>
                <li><Link to="exhibitCard">exhibitCard</Link></li>
                <li><Link to="langSelector">langSelector</Link></li>
                <li><Link to="staticFieldsList">staticFieldsList</Link></li>
                <li><Link to="titleHeader">titleHeader</Link></li>
            </ul>
        );
    }
}