import React from "react";
import './training.css';
import logo from './azarashi.jpg';

function Prof(){

    return(
        <>
        <div className="Prof">
            <div className="ProfImage">
            <img src={logo} alt =""/>
            </div>

            <div className="ProfPlot">
                <ul>
                    <li>初めまして</li>
                    <li>アザラシです</li>
                    <li><font color="#0095d9">寝起きです</font></li>
                    <li><font color="#e60033">お腹空きました</font></li>
                </ul>
            </div>

        </div>

        </>
        

    );

};

export default Prof;