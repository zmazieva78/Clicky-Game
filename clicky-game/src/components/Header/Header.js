import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">

            <div className="title text-center">Clicky Game</div>
        
        <div className="row">
            <div className="col-8">
                <div className="rules">
                    <div>Rules: To get the most points, click on each purse once but remember never click the same one twice, you will lose.</div>
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