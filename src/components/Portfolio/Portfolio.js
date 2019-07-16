import React, { Component } from 'react';
import M from "materialize-css";
import portfolioInfo from "../../portfolioInfo"
import LeftImgDiv from "./LeftImgDiv";
import RightImgDiv from "./RightImgDiv";


class Portfolio extends Component {

    componentDidMount() {
        M.AutoInit();
        console.log(portfolioInfo);
      }
    
    render() {
        return (
            <div>
                <div className="container">
                    <h2 id="Portfolio" className="scrollspy center-align">Portfolio</h2>
                </div>
                <hr className="line-blue"></hr>
                {portfolioInfo.map(portInfo => {
                return portfolioInfo.indexOf(portInfo)%2 === 0 ? <LeftImgDiv portInfo={portInfo} /> : <RightImgDiv portInfo={portInfo}/>
            })}
            </div>
        )
    }
}


export default Portfolio;