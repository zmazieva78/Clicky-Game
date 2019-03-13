import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <div className="row">
            <div className="title">Clicky Game</div>
        </div>
        <div className="row">
            <div className="col-8">
                <div className="rules">
                    <div>Rules: Click on each picture once, if you click it twice you will lose. Good luck!</div>
                </div>
            </div>
            <div className="col-4">
                <div className="scores">
                    Score: {props.score} Highscore: {props.highscore}
                </div>
            </div>
        </div>
        
    </div>
);

export default Header;